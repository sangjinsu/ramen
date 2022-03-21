package com.ramen.ranking.repository;

import com.ramen.ranking.domain.RamenLike;
import com.ramen.ranking.domain.RamenView;
import org.springframework.data.repository.CrudRepository;

public interface RamenLikeRedisRepository extends CrudRepository<RamenLike, Long> {
    public RamenLike findByRamenIdAndMemberId(Long ramenId, Long memberId);
}
