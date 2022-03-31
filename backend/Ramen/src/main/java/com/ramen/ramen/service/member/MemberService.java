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

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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

        List<Long> ramenIds = requestLikeDto.getRamenIds();
        List<Ramen> ramens = ramenRepository.findAllById(ramenIds);

        if (ramens.isEmpty()) {
            throw new RamenNotFoundException();
        } else if (ramens.size() == 1) {
            Ramen ramen = ramens.get(0);
            Optional<MemberLikeRamen> likeRamen = memberLikeRamenRepository.findByMemberAndRamen(member, ramen);

            if (likeRamen.isPresent()) {
                memberLikeRamenRepository.delete(likeRamen.get());
                return;
            }

            MemberLikeRamen memberLikeRamen = MemberLikeRamen.builder().member(member).ramen(ramen).build();
            memberLikeRamenRepository.save(memberLikeRamen);
        } else {
            ramens.forEach(ramen -> {
                MemberLikeRamen memberLikeRamen = MemberLikeRamen.builder().member(member).ramen(ramen).build();
                memberLikeRamenRepository.save(memberLikeRamen);
            });
        }
    }

    public List<ResponseLikeRamenDto> fetchLikedRamens(Long memberId) {
        Optional<Member> optionalMember = memberRepository.findById(memberId);
        if (optionalMember.isEmpty()) {
            throw new MemberNotFoundException();
        }
        Member member = optionalMember.get();
        List<Object[]> likedRamens = memberLikeRamenRepository.findLikedRamens(member.getMemberId());

        List<ResponseLikeRamenDto> responseLikeRamenDtos = new ArrayList<>();

        for (Object o[] : likedRamens) {
            Long ramenId = (Long) o[0];
            String name = (String) o[1];
            String englishName = (String) o[2];
            String brand = (String) o[3];
            String englishBrand = (String) o[4];

            responseLikeRamenDtos.add(new ResponseLikeRamenDto(ramenId, name, englishName, brand, englishBrand));
        }

//        return likedRamens.stream()
//                .map(ramen -> ResponseLikeRamenDto.builder().ramen(ramen).build())
//                .collect(Collectors.toList());

//        return likedRamens.stream()
//                .map(ramen -> ResponseLikeRamenDto.builder().ramen(ramen).build())
//                .collect(Collectors.toList());

        return responseLikeRamenDtos;
    }
}
