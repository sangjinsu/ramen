package com.ramen.ramen.repository.member;

import com.ramen.ramen.domain.Member;
import com.ramen.ramen.domain.MemberLikeRamen;
import com.ramen.ramen.domain.Ramen;
import com.ramen.ramen.dto.member.ResponseLikeRamenDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface MemberLikeRamenRepository extends JpaRepository<MemberLikeRamen, Long> {

    Optional<MemberLikeRamen> findByMemberAndRamen(Member member, Ramen ramen);

    // 좋아요한 라면 조회
    // @Query("select ramen.ramenId, ramen.name,ramen.englishName,ramen.brand,ramen.englishBrand from MemberLikeRamen memberLikeRamen join fetch Ramen ramen on ramen.ramenId = memberLikeRamen.ramen.ramenId where memberLikeRamen.member.memberId = :memberId")
    @Query("select mlr from MemberLikeRamen mlr join fetch mlr.ramen where mlr.member = :member")
    //List<Object[]> findLikedRamens(@Param("memberId") Long memberId);
    List<MemberLikeRamen> findLikedRamens(@Param("member") Member member);

    // 좋아요 여부 조회
    @Query("select memberLikeRamen from MemberLikeRamen memberLikeRamen where memberLikeRamen.member.memberId = :memberId and memberLikeRamen.ramen.ramenId =:ramenId ")
    MemberLikeRamen findRamenIsLiked(@Param("ramenId") Long ramenId, @Param("memberId") Long memberId);
}