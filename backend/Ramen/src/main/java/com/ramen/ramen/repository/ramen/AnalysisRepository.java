package com.ramen.ramen.repository.ramen;

import com.ramen.ramen.domain.Analysis;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface AnalysisRepository extends JpaRepository<Analysis, Long> {

//    @Query("SELECT a from Analysis a where a.ramen.ramenId=:ramenId ")
//    public Analysis findByRamenId(@Param("ramenId") Long ramenId);
}