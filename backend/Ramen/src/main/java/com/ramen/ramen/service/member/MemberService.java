package com.ramen.ramen.service.member;

import com.ramen.ramen.domain.Member;
import com.ramen.ramen.domain.MemberLikeRamen;
import com.ramen.ramen.domain.Ramen;
import com.ramen.ramen.dto.member.RequestLikeDto;
import com.ramen.ramen.dto.member.ResponseLikeRamenDto;
import com.ramen.ramen.exception.MemberNotFoundException;
import com.ramen.ramen.exception.RamenNotFoundException;
import com.ramen.ramen.repository.member.MemberLikeRamenRepository;
import com.ramen.ramen.repository.member.MemberRepository;
import com.ramen.ramen.repository.ramen.RamenRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;
    private final RamenRepository ramenRepository;
    private final MemberLikeRamenRepository memberLikeRamenRepository;

    @Transactional
    public void likeRamen(RequestLikeDto requestLikeDto) {
        Long memberId = requestLikeDto.getMemberId();

        Optional<Member> optionalMember = memberRepository.findById(memberId);
        if (optionalMember.isEmpty()) {
            throw new MemberNotFoundException();
        }
        Member member = optionalMember.get();

        Long ramenId = requestLikeDto.getRamenId();
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

    public List<ResponseLikeRamenDto> fetchLikedRamens(Long memberId) {
        Optional<Member> optionalMember = memberRepository.findById(memberId);
        if (optionalMember.isEmpty()) {
            throw new MemberNotFoundException();
        }
        Member member = optionalMember.get();
        List<MemberLikeRamen> likedRamens = memberLikeRamenRepository.findLikedRamens(member);
        return likedRamens.stream().map(likedRamen -> new ResponseLikeRamenDto(likedRamen.getRamen())).collect(Collectors.toList());
    }
}
