package com.ramen.ranking.repository;

import com.ramen.ranking.domain.RamenLike;
import org.springframework.data.repository.CrudRepository;

public interface RamenLikeRedisRepository extends CrudRepository<RamenLike, Long> {

}
