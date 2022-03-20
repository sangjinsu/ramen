package com.ramen.ramen.repository.member;

import com.ramen.ramen.domain.Member;
import com.ramen.ramen.domain.MemberLikeRamen;
import com.ramen.ramen.domain.Ramen;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberLikeRamenRepository extends JpaRepository<MemberLikeRamen, Long> {
    Optional<MemberLikeRamen> findByMemberAndRamen(Member member, Ramen ramen);
}