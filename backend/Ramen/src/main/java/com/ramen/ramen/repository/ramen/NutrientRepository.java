package com.ramen.ramen.repository.ramen;

import com.ramen.ramen.domain.Nutrient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface NutrientRepository extends JpaRepository<Nutrient, Long> {

//    @Query("SELECT n from Nutrient n where n.ramen.ramenId=:ramenId ")
//    public Nutrient findByRamenId(@Param("ramenId") Long ramenId);

}