import json
from elasticsearch import Elasticsearch
import pandas as pd
import numpy as np

def create_df_log_value(member_id):
    # ES 로그 조회
    es = Elasticsearch('http://j6c104.p.ssafy.io:9200')
    search_word = 'memberId:' + str(member_id)

    docs = es.search(
        index='log', 
        size=50,
        body={
            "query": {
                "match_phrase": {
                    "message": search_word
                }
            },
            "sort": [
                {
                    "@timestamp": {
                        "order": "desc"
                    }
                }
            ]
        })
    user_logs = list(map(lambda log: json.loads(log['_source']
                         ['message']), docs['hits']['hits']))

    USER_LOG_LENGTH = len(user_logs)
    df_user_logs = pd.DataFrame(user_logs)
    df_user_logs.columns = ['member_id', 'ramen_id']
    # df_user_logs = df_user_logs.set_index(keys=['member_id'], inplace=False, drop=True)
    if USER_LOG_LENGTH > 0:
        weight = np.arange(USER_LOG_LENGTH, 0, -1) ** 2 / USER_LOG_LENGTH ** 2 * 5
    else:
        weight = 0.0
        
    df_user_logs['rating'] = weight
    df_user_logs = df_user_logs.groupby('ramen_id').mean()
    df_user_logs['ramen_id'] = df_user_logs.index
    df_user_logs = df_user_logs.astype({'member_id': 'int'})
    df_user_logs = df_user_logs.reset_index(drop=True)
    return df_user_logs
