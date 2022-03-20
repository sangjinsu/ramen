package com.ramen.ramen.service.member;

import com.ramen.ramen.domain.Member;
import com.ramen.ramen.domain.MemberLikeRamen;
import com.ramen.ramen.domain.Ramen;
import com.ramen.ramen.dto.member.RequestLikeDto;
import com.ramen.ramen.exception.MemberNotFoundException;
import com.ramen.ramen.exception.RamenNotFoundException;
import com.ramen.ramen.repository.member.MemberLikeRamenRepository;
import com.ramen.ramen.repository.member.MemberRepository;
import com.ramen.ramen.repository.ramen.RamenRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;
    private final RamenRepository ramenRepository;
    private final MemberLikeRamenRepository memberLikeRamenRepository;

    public void likeRamen(RequestLikeDto requestLikeDto) {
        Long ramenId = requestLikeDto.getRamenId();
        Long memberId = requestLikeDto.getMemberId();

        Optional<Member> optionalMember = memberRepository.findById(memberId);
        if (optionalMember.isEmpty()) {
            throw new MemberNotFoundException();
        }
        Member member = optionalMember.get();

        Optional<Ramen> optionalRamen = ramenRepository.findById(ramenId);
        if (optionalRamen.isEmpty()) {
            throw new RamenNotFoundException();
        }
        Ramen ramen = optionalRamen.get();

        Optional<MemberLikeRamen> likeRamen = memberLikeRamenRepository.findByMemberAndRamen(member, ramen);

        if (likeRamen.isPresent()) {
            memberLikeRamenRepository.delete(likeRamen.get());
            return;
        }

        MemberLikeRamen memberLikeRamen = MemberLikeRamen.builder().member(member).ramen(ramen).build();
        memberLikeRamenRepository.save(memberLikeRamen);
    }
}
