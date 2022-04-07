package com.ramen.ramen.repository.member;

import com.ramen.ramen.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long> {
}