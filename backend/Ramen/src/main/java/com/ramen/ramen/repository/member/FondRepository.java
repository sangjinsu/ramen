package com.ramen.ramen.repository.member;

import com.ramen.ramen.domain.Fond;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FondRepository extends JpaRepository<Fond, Long> {
}