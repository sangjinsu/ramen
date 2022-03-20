package com.ramen.ramen.repository.ramen;

import com.ramen.ramen.domain.Ramen;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RamenRepository extends JpaRepository<Ramen, Long> {
}