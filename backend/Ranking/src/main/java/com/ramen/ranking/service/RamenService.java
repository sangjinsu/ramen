package com.ramen.ranking.service;


import com.ramen.ranking.component.RankingZset;
import com.ramen.ranking.domain.RamenLike;
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
    public void saveRamenView(Long ramenId, Long userIp) {
        RamenView ramenview = new RamenView();
        Optional<RamenView> ramen = Optional.ofNullable(ramenViewRedisRepository.findByRamenIdAndUserIp(ramenId, userIp));
        if (ramen.isEmpty()) { // 비어 있는 경우 추가
            ramenview.setRamenId(ramenId);
            ramenview.setUserIp(userIp);
            ramenViewRedisRepository.save(ramenview);
            rankingZset.ramenViewCount(ramenId);
        } else if (ramen.get().getUserIp() != userIp) { // 기존 post 있는 경우에  post 조회한 memberId와 새로운 memberId 비교 후 중복이 아니라면 저장
            ramenview.setRamenId(ramenId);
            ramenview.setUserIp(userIp);
            ramenViewRedisRepository.save(ramenview);
            rankingZset.ramenViewCount(ramenId);
        }

    }

    @Transactional
    public void saveRamenLike(Long ramenId, Long memberId) {
        RamenLike ramenlike = new RamenLike();
        Optional<RamenLike> ramen = Optional.ofNullable(ramenLikeRedisRepository.findByRamenIdAndMemberId(ramenId, memberId));

        if (ramen.isEmpty()) {
            ramenlike.setRamenId(ramenId);
            ramenlike.setMemberId(memberId);
            ramenLikeRedisRepository.save(ramenlike);
            rankingZset.ramenLikeCountUp(ramenId);
        } else if (ramen.get().getMemberId() != memberId) { // 기존 post 있는 경우에  post 조회한 memberId와 새로운 memberId 비교 후 중복이 아니라면 저장
            ramenlike.setRamenId(ramenId);
            ramenlike.setMemberId(memberId);
            ramenLikeRedisRepository.save(ramenlike);
            rankingZset.ramenLikeCountUp(ramenId);
        } else if (ramen.get().getMemberId() == memberId) { // 좋아요 취소
            ramenLikeRedisRepository.deleteById(ramen.get().getId());
            rankingZset.ramenLikeCountDown(ramenId);
        }
    }

    public List<String> getRamenViewId() {
        return rankingZset.getRamenViewId();
    }

    public List<String> getRamenLikeId() {
        return rankingZset.getRamenLikeId();
    }

    public List<String> getPopRamen() {
        List<String> ramenLikes = getRamenLikeId();
        List<String> ramenViews = getRamenViewId();

        for (String ramenId : ramenViews) { // 중복 제거
            if (!ramenLikes.contains(ramenId))
                ramenLikes.add(ramenId);
        }
        return ramenLikes;
    }



}
