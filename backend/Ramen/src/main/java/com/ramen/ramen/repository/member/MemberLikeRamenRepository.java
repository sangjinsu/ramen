package com.ramen.ramen.repository.member;

import com.ramen.ramen.domain.MemberLikeRamen;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberLikeRamenRepository extends JpaRepository<MemberLikeRamen, Long> {
}