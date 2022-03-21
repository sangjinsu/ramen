package com.ramen.ranking.repository;

import com.ramen.ranking.domain.RamenView;
import org.springframework.data.repository.CrudRepository;

public interface RamenViewRedisRepository extends CrudRepository<RamenView, Long> {
}
