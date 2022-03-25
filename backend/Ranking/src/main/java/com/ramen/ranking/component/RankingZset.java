package com.ramen.ranking.component;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ZSetOperations;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class RankingZset {

    //Sorted Set 추가
    @Autowired
    private final RedisTemplate<String,String> redisTemplate;
    private final ZSetOperations<String, String> zSetOperations;
    private final org.springframework.data.redis.core.SetOperations<String, String> SetOperations;

    public RankingZset(RedisTemplate<String, String> redisTemplate) {
        this.redisTemplate = redisTemplate;
        this.zSetOperations = redisTemplate.opsForZSet();
        this.SetOperations = redisTemplate.opsForSet();
    }

    public void ramenViewCount(Long ramenId) {
        zSetOperations.incrementScore("ramenviewcount", String.valueOf(ramenId), 1);
    }

//    public void ramenLoginViewCount(Long ramenId) {
//        zSetOperations.incrementScore("ramenloginviewcount", String.valueOf(ramenId), 1);
//    }

    public void ramenLikeCountUp(Long ramenId) {
        zSetOperations.incrementScore("ramenlikecount", String.valueOf(ramenId), 1);
    }

    public void ramenLikeCountDown(Long ramenId){
        zSetOperations.incrementScore("ramenlikecount", String.valueOf(ramenId), -1);
    }

    public List<String> getRamenViewId() {
        return new ArrayList<>(zSetOperations.reverseRange("ramenviewcount", 0,1));
    }

//    public List<String> getRamenLoginViewId() {
//        return new ArrayList<>(zSetOperations.reverseRange("ramenloginviewcount", 0,1));
//    }

    public List<String> getRamenLikeId() {
        return new ArrayList<>(zSetOperations.reverseRange("ramenlikecount", 0,1));
    }


}
