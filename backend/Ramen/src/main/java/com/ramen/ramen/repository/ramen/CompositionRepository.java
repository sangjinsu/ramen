package com.ramen.ramen.repository.ramen;

import com.ramen.ramen.domain.Composition;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompositionRepository extends JpaRepository<Composition, Long> {
}