package com.ramen.ranking.repository;

import com.ramen.ranking.domain.RamenView;
import org.springframework.data.repository.CrudRepository;

public interface RamenViewRedisRepository extends CrudRepository<RamenView, Long> {
    public RamenView findByRamenIdAndUserIp(Long ramenId, String userIp);
    public RamenView findByRamenIdAndMemberId(Long ramenId, Long memberId);
}
