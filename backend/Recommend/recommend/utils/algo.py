import numpy as np
import pandas as pd 
### 코사인 유사도를 계산하는 사이킷런 라이브러리
from sklearn.metrics.pairwise import cosine_similarity
from recommend.utils.elastic import create_df_log_value
from sklearn.utils import shuffle

from recommend.utils.table import member, member_like_ramen, ramen
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras.models import Model
from tensorflow.keras.layers import Input, Embedding, Flatten
from tensorflow.keras.layers import Dense, Concatenate, Activation
from tensorflow.keras.regularizers import l2
from tensorflow.keras.optimizers import SGD
from rest_framework.exceptions import ParseError

df_ramen = ramen()
ramens = df_ramen.drop(['name', 'english_name'], axis=1)
similarities = cosine_similarity(ramens)
similarities = pd.DataFrame(similarities)
similarities.index = df_ramen.index
similarities.columns = df_ramen.index

df_rating = member_like_ramen()
mu = df_rating.rating.mean()


def user_based_cf(member_id):
    df_rating = member_like_ramen()
    df_log_value = create_df_log_value(member_id)
    
    if len(df_rating) == 0 and len(df_log_value) == 0:
        raise ParseError(detail='추천 받을 수 없습니다')
    
    if len(df_log_value.index):
        for memberId, ramen_id, rating in zip(df_log_value['member_id'], df_log_value['ramen_id'], df_log_value['rating']):
            existed = (df_rating['member_id'] == memberId) & (df_rating['ramen_id'] == ramen_id)
            if existed.any():
                df_rating[(df_rating['member_id'] == memberId) & (df_rating['ramen_id'] == ramen_id)]['rating'] = (df_rating[(df_rating['member_id'] == memberId) & (df_rating['ramen_id'] == ramen_id)]['rating']  + rating) / 2
            else:
                df_rating = df_rating.append({'member_id': memberId, 'ramen_id': ramen_id, 'rating': rating}, ignore_index=True)
        df_rating = df_rating.astype({'member_id': 'int', 'ramen_id': 'int'})
    
    df_member = member()
    rated_ramen = df_rating.loc[df_rating['member_id']==member_id]['ramen_id'].tolist()

    ratings_matrix = df_rating.pivot(index='member_id', columns='ramen_id', values='rating')
    # 코사인 유사도를 구하기 위해 rating 값을 복사하고 계산 시 NaN 값 에러 대비를 위해 결측치 0으로 대체
    matrix_dummy = ratings_matrix.copy().fillna(0)
    # 모든 사용자간 코사인 유사도 구함 
    user_similarity = cosine_similarity(matrix_dummy, matrix_dummy)
    # 필요한 값 조회를 위해 인덱스 및 컬럼명 지정 
    user_similarity = pd.DataFrame(user_similarity,
                               index=ratings_matrix.index,
                               columns=ratings_matrix.index)

    ### 사용자 평가 경향을 고려한 함수 
    rating_mean = ratings_matrix.mean(axis=1)
    rating_bias = (ratings_matrix.T - rating_mean).T
    
    rating_binary_1 = np.array(ratings_matrix>0).astype(float)
    rating_binary_2 = rating_binary_1.T

    counts = np.dot(rating_binary_1, rating_binary_2)
    counts = pd.DataFrame(counts, 
                      index=ratings_matrix.index,
                      columns=ratings_matrix.index).fillna(0)
    
    SIG_LEVEL = 3
    MIN_RATINGS = 10
    ### 사용자 평가 경향을 고려한 함수 
    def CF_knn_bias_sig(member_id, ramen_id, neighbor_size=0):
        if ramen_id in rating_bias.columns:
            sim_scores = user_similarity[member_id].copy()
            ramen_ratings = rating_bias[ramen_id].copy()
            
            no_rating = ramen_ratings.isnull()
            common_counts = counts[member_id]
            low_significance = common_counts < SIG_LEVEL
            
            none_rating_idx = ramen_ratings[no_rating | low_significance].index
            ramen_ratings = ramen_ratings.drop(none_rating_idx)
            sim_scores = sim_scores.drop(none_rating_idx)

            if neighbor_size == 0:
                prediction = np.dot(sim_scores, ramen_ratings) / sim_scores.sum()
                prediction = prediction + rating_mean[member_id]
    
            else:
                if len(sim_scores) > MIN_RATINGS:
                    neighbor_size = min(neighbor_size, len(sim_scores))
                    sim_scores = np.array(sim_scores)
                    ramen_ratings = np.array(ramen_ratings)
                    member_idx = np.argsort(sim_scores)
                    sim_scores = sim_scores[member_idx][-neighbor_size:]
                    ramen_ratings = ramen_ratings[member_idx][-neighbor_size:]
                    prediction = np.dot(sim_scores, ramen_ratings) / sim_scores.sum()
                    prediction = prediction + rating_mean[member_id]
                else:
                    prediction = rating_mean[member_id]
                    
        else:
            prediction = rating_mean[member_id] 
         
        if prediction <= 0:
            prediction = 0
         
        return prediction 
    
    def recom_ramen(member_id, neighbor_size = 30):
        member_ramen = ratings_matrix.loc[member_id].copy()
        for ramen in ratings_matrix.columns:
            if pd.notnull(member_ramen.loc[ramen]):
                member_ramen.loc[ramen] = 0
            else:
                member_ramen.loc[ramen] = CF_knn_bias_sig(member_id, ramen, neighbor_size)
  
        return member_ramen

    try:
        recommendations = recom_ramen(member_id, neighbor_size=30)
    except Exception:
        raise ParseError(detail="추천 받을 수 없습니다")
    
    merged_ratings  = pd.merge(df_rating, member(), on='member_id')
    merged_ratings = merged_ratings.set_index('member_id').drop(['fond_id'], axis=1)
    
    groupby_key = merged_ratings.columns.tolist()
    groupby_key.remove('rating')

    fond_mean = pd.DataFrame(merged_ratings[merged_ratings.columns].groupby(groupby_key)['rating'].mean())
    
    rating_matrix = df_rating.pivot(index='member_id', columns='ramen_id', values='rating')
    rating_matrix = rating_matrix.fillna(0)
    
    groupby_key.remove('ramen_id')
    def cf_fond(member_id, ramen_id):
        if ramen_id in rating_matrix.columns:
            fond = df_member.loc[[member_id], groupby_key]
            fond = tuple(fond.values.tolist()[0])
            if fond in fond_mean.loc[ramen_id].index.to_list():
                fond_rating = fond_mean.loc[(ramen_id, ) + fond]['rating']
            else:
                fond_rating = 3.0
        else:
            fond_rating = 3.0
        return fond_rating
    fond_ratings = pd.DataFrame(index=df_rating['ramen_id'].drop_duplicates(), columns=['rating'])
    fond_ratings['rating'] = df_rating['ramen_id']
    fond_ratings['rating'] = fond_ratings['rating'].apply(lambda x : cf_fond(member_id, x))
    
    fond_recommendations = fond_ratings.sort_values(by='rating', ascending=False)
    recommendations = recommendations.to_frame(name='rating')
    
    weight = [0.8, 0.2]
    predictions: pd.DataFrame = recommendations * weight[0] + fond_recommendations * weight[1]
    predictions = predictions.drop(rated_ramen, axis=0)
    
    pred_sort = predictions.sort_values(ascending=False, by='rating')[:10]
    recom_ramens = shuffle(df_ramen.loc[pred_sort.index]['name'], random_state=0)
    return recom_ramens.to_dict()
          
def item_based_cf(member_id):
    df_rating = member_like_ramen()
    df_log_value = create_df_log_value(member_id)
    
    if len(df_rating) == 0 and len(df_log_value) == 0:
        raise ParseError(detail='추천 받을 수 없습니다')
     
    if len(df_log_value.index):
        for memberId, ramen_id, rating in zip(df_log_value['member_id'], df_log_value['ramen_id'], df_log_value['rating']):
            existed = (df_rating['member_id'] == memberId) & (df_rating['ramen_id'] == ramen_id)
            if existed.any():
                df_rating[(df_rating['member_id'] == memberId) & (df_rating['ramen_id'] == ramen_id)]['rating'] = (df_rating[(df_rating['member_id'] == memberId) & (df_rating['ramen_id'] == ramen_id)]['rating']  + rating) / 2
            else:
                df_rating = df_rating.append({'member_id': memberId, 'ramen_id': ramen_id, 'rating': rating}, ignore_index=True)
        df_rating = df_rating.astype({'member_id': 'int', 'ramen_id': 'int'})
    
    df_member = member()
    rated_ramen = df_rating.loc[df_rating['member_id']==member_id]['ramen_id'].tolist()

    ratings_matrix = df_rating.pivot(index='member_id', columns='ramen_id', values='rating')
    
    rating_matrix_t = np.transpose(ratings_matrix)
    matrix_dummy = rating_matrix_t.copy().fillna(0)
    item_similarity = cosine_similarity(matrix_dummy, matrix_dummy)
    item_similarity = pd.DataFrame(item_similarity,
                               index=rating_matrix_t.index,
                               columns=rating_matrix_t.index)

    def CF_IBCF(member_id, ramen_id):
        if ramen_id in item_similarity.columns:
            sim_scores = item_similarity[ramen_id]
            member_rating = rating_matrix_t[member_id]
            none_rating_idx = member_rating[member_rating.isnull()].index
            member_rating = member_rating.dropna()
            sim_scores = sim_scores.drop(none_rating_idx)
            sim_scores_sum = 1 if sim_scores.sum() == 0 else sim_scores.sum()
            mean_rating = np.dot(sim_scores, member_rating) / sim_scores_sum
        else:
            mean_rating = 3.0
        return mean_rating
    
    def recom_ramen(member_id):
        member_ramen = ratings_matrix.loc[member_id].copy()
        for ramen in ratings_matrix.columns:
            if pd.notnull(member_ramen.loc[ramen]):
                member_ramen.loc[ramen] = 0
            else:
                member_ramen.loc[ramen] = CF_IBCF(member_id, ramen)
  
        return member_ramen

    try:
        recommendations = recom_ramen(member_id)
    except Exception:
        raise ParseError(detail="추천 받을 수 없습니다")
    
    merged_ratings  = pd.merge(df_rating, member(), on='member_id')
    merged_ratings = merged_ratings.set_index('member_id').drop(['fond_id'], axis=1)
    
    groupby_key = merged_ratings.columns.tolist()
    groupby_key.remove('rating')

    fond_mean = pd.DataFrame(merged_ratings[merged_ratings.columns].groupby(groupby_key)['rating'].mean())
    
    rating_matrix = df_rating.pivot(index='member_id', columns='ramen_id', values='rating')
    rating_matrix = rating_matrix.fillna(0)
    
    groupby_key.remove('ramen_id')
    def cf_fond(member_id, ramen_id):
        if ramen_id in rating_matrix.columns:
            fond = df_member.loc[[member_id], groupby_key]
            fond = tuple(fond.values.tolist()[0])
            if fond in fond_mean.loc[ramen_id].index.to_list():
                fond_rating = fond_mean.loc[(ramen_id, ) + fond]['rating']
            else:
                fond_rating = 3.0
        else:
            fond_rating = 3.0
        return fond_rating
    
    fond_ratings = pd.DataFrame(index=df_rating['ramen_id'].drop_duplicates(), columns=['rating'])
    fond_ratings['rating'] = df_rating['ramen_id']
    fond_ratings['rating'] = fond_ratings['rating'].apply(lambda x : cf_fond(member_id, x))
    
    fond_recommendations = fond_ratings.sort_values(by='rating', ascending=False)
    recommendations = recommendations.to_frame(name='rating')
    
    weight = [0.8, 0.2]
    predictions: pd.DataFrame = recommendations * weight[0] + fond_recommendations * weight[1]
    predictions = predictions.drop(rated_ramen, axis=0)
    
    pred_sort = predictions.sort_values(ascending=False, by='rating')[:10]
    recom_ramens = shuffle(df_ramen.loc[pred_sort.index]['name'], random_state=0)
    return recom_ramens.to_dict()

def ramen_similarity(ramen_id):
    similarities_others = similarities.drop([ramen_id])
    top3 = similarities_others[ramen_id].sort_values(ascending=False).head(3).index
    return df_ramen.loc[top3][['name', 'salty', 'sweetness']].T.to_dict()

def RMSE(y_true, y_pred):
        return tf.sqrt(tf.reduce_mean(tf.square(y_true - y_pred)))

def train_ai():
    df_member = member()
    df_rating = member_like_ramen()
    # 잠재요인 수 2000으로 지정
    K = 1000
    # 전체 평균 계산
    mu = df_rating.rating.mean()

    # 사용자 아이디와 영화 아이디의 최대값을 구한다 
    # +1를 더해주는 이유는 나중에 bias term 의 크기 1 추가를 고려한 것이다 
    M = df_member.index.max() + 1
    N = df_ramen.index.max() + 1
    
    user = Input(shape=(1,))
    item = Input(shape=(1,))
    
    P_embedding = Embedding(M, K, embeddings_regularizer=l2())(user)
    Q_embedding = Embedding(N, K, embeddings_regularizer=l2())(item)

    user_bias = Embedding(M, 1, embeddings_regularizer=l2())(user)
    item_bias = Embedding(M, 1, embeddings_regularizer=l2())(user)

    P_embedding = Flatten()(P_embedding)
    Q_embedding = Flatten()(Q_embedding)
    user_bias = Flatten()(user_bias)
    item_bias = Flatten()(item_bias)
    
    R = Concatenate()([P_embedding, Q_embedding, user_bias, item_bias])

    R = Dense(1024)(R)
    R = Activation('relu')(R)

    R = Dense(32)(R)
    R = Activation('relu')(R)

    R = Dense(1)(R)

    model = Model(inputs=[user, item], outputs=R)
    model.compile(
        loss=RMSE,
        optimizer=SGD(),
        metrics=[RMSE]
    )
    
    # Model Fitting
    # 모델 입력에 필요한 데이터 정리
    model.fit(
        x = [df_rating.member_id.values, df_rating.ramen_id.values],
        y = df_rating.rating.values - mu,
        epochs=30,
        batch_size = 512,
        verbose=0,
    )
    
    model.save('ramen_rc_model')
    
def deaplearning_based_rc(member_id):
    rated_ramen = df_rating.loc[df_rating['member_id']==member_id]['ramen_id'].tolist()
    model = keras.models.load_model('ramen_rc_model', custom_objects={"RMSE": RMSE })
    # 전체 평균 계산
    member_ids = np.array([member_id] * len(df_ramen.index)) 
    ramen_ids = np.array(df_ramen.index)

    predictions = model.predict([member_ids, ramen_ids]) + mu
    predictions = pd.DataFrame(predictions, columns=['predict_rate'])
    predicton_ids = predictions.drop(rated_ramen, axis=0).sort_values(by=['predict_rate'], ascending=False).head(10).index
    recom_ramens = shuffle(df_ramen.loc[predicton_ids]['name'], random_state=0).to_dict()
    return recom_ramens
    
    #raise exceptions.NotFound(detail="추천 받을 수 없습니다")
        
