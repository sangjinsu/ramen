package com.ramen.ramen.repository.ramen;

import com.ramen.ramen.domain.Nutrient;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NutrientRepository extends JpaRepository<Nutrient, Long> {
}