package com.ramen.ramen.repository.ramen;

import com.ramen.ramen.domain.Composition;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CompositionRepository extends JpaRepository<Composition, Long> {

    @Query("SELECT c from Composition c where c.ramen.ramenId=:ramenId ")
    public Composition findByRamenId(@Param("ramenId") Long ramenId);

}