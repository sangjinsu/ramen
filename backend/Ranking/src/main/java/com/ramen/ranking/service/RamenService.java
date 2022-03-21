package com.ramen.ranking.service;


import com.ramen.ranking.component.RankingZset;
import com.ramen.ranking.repository.RamenLikeRedisRepository;
import com.ramen.ranking.repository.RamenViewRedisRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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



}
