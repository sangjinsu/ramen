package com.ramen.ranking.service;


import com.ramen.ranking.component.RankingZset;
import com.ramen.ranking.domain.RamenView;
import com.ramen.ranking.repository.RamenLikeRedisRepository;
import com.ramen.ranking.repository.RamenViewRedisRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional(readOnly = true)
public class RamenService {

    @Autowired
    RamenLikeRedisRepository ramenLikeRedisRepository;
    @Autowired
    RamenViewRedisRepository ramenViewRedisRepository;
    @Autowired
    private final RedisTemplate<String,String> redisTemplate = new RedisTemplate<>();
    @Autowired
    RankingZset rankingZset = new RankingZset(redisTemplate);


    @Transactional
    public void saveRamenView(Long postId, Long memberId) {
        RamenView ramenview = new RamenView();
        Optional<RamenView> ramen = Optional.ofNullable(ramenViewRedisRepository.findByPostIdAndMemberId(postId, memberId));
        if (ramen.isEmpty()) { // 비어 있는 경우 추가
            postview.setPostId(postId);
            postview.setMemberId(memberId);
            postViewRedisRepository.save(postview);
            rankingZset.postViewCount(postId);
        } else if (ramen.get().getMemberId() != memberId) { // 기존 post 있는 경우에  post 조회한 memberId와 새로운 memberId 비교 후 중복이 아니라면 저장
            ramenview.setPostId(postId);
            ramenview.setMemberId(memberId);
            ramenViewRedisRepository.save(ramenview);
            rankingZset.ramenViewCount(postId);
        }

    }

    @Transactional
    public void savePostLike(Long postId, Long memberId) {
        PostLike postlike = new PostLike();
        Optional<PostLike> post = Optional.ofNullable(postLikeRedisRepository.findByPostIdAndMemberId(postId, memberId));

        if (post.isEmpty()) {
            postlike.setPostId(postId);
            postlike.setMemberId(memberId);
            postLikeRedisRepository.save(postlike);
            rankingZset.postLikeCountUp(postId);
        } else if (post.get().getMemberId() != memberId) { // 기존 post 있는 경우에  post 조회한 memberId와 새로운 memberId 비교 후 중복이 아니라면 저장
            postlike.setPostId(postId);
            postlike.setMemberId(memberId);
            postLikeRedisRepository.save(postlike);
            rankingZset.postLikeCountUp(postId);
        } else if (post.get().getMemberId() == memberId) { // 좋아요 취소
            postLikeRedisRepository.deleteById(post.get().getId());
            rankingZset.postLikeCountDown(postId);
        }
    }

    @Transactional
    public void deletePost(Long postId) {

        List<PostView> postViews = postViewRedisRepository.findAllByPostId(postId);
        for (PostView postView : postViews) {
            postViewRedisRepository.deleteById(postView.getId());
        }

        List<PostLike> postLikes = postLikeRedisRepository.findAllByPostId(postId);
        for (PostLike postLike : postLikes) {
            postViewRedisRepository.deleteById(postLike.getId());
        }

        rankingZset.deletePostById(postId);
    }

    public List<String> getPostViewId() {
        return rankingZset.getPostViewId();
    }

    public List<String> getPostLikeId() {
        return rankingZset.getPostLikeId();
    }

    public List<String> getHotPost() {
        List<String> postLikes = getPostLikeId();
        List<String> postViews = getPostViewId();

        for (String postId : postViews) {
            if (!postLikes.contains(postId))
                postLikes.add(postId);
        }
        return postLikes;
    }



}
