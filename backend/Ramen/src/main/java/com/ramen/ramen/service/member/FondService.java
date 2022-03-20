package com.ramen.ramen.service.member;

import com.ramen.ramen.domain.Fond;
import com.ramen.ramen.domain.Member;
import com.ramen.ramen.dto.member.FondDto;
import com.ramen.ramen.dto.member.RequestFondDto;
import com.ramen.ramen.exception.MemberNotFoundException;
import com.ramen.ramen.repository.member.FondRepository;
import com.ramen.ramen.repository.member.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class FondService {

    private final FondRepository fondRepository;
    private final MemberRepository memberRepository;

    public FondDto fetchFond(Long memberId) {
        Optional<Member> optionalMember = memberRepository.findById(memberId);

        if (optionalMember.isEmpty()) {
            throw new MemberNotFoundException();
        }
        Member member = optionalMember.get();
        Fond fond = member.getFond();
        return FondDto.builder()
                .noodleLength(fond.getNoodleLength())
                .noodleTexture(fond.getNoodleTexture())
                .ingredient(fond.getIngredient())
                .topping(fond.getTopping())
                .egg(fond.getEgg())
                .spicy(fond.getSpicy()).build();
    }

    public void createFond(RequestFondDto requestFondDto) {
        Long memberId = requestFondDto.getMemberId();
        Fond fond = Fond.builder()
                .noodleLength(requestFondDto.getNoodleLength())
                .noodleTexture(requestFondDto.getNoodleTexture())
                .egg(requestFondDto.getEgg())
                .ingredient(requestFondDto.getIngredient())
                .spicy(requestFondDto.getSpicy())
                .topping(requestFondDto.getTopping())
                .build();
        Optional<Member> optionalMember = memberRepository.findById(memberId);
        if (optionalMember.isEmpty()) {
            throw new MemberNotFoundException();
        }
        Member member = optionalMember.get();

        fondRepository.save(fond);
        member.setFond(fond);
    }

    public void updateFond(RequestFondDto requestFondDto) {
        Long memberId = requestFondDto.getMemberId();
        Optional<Member> optionalMember = memberRepository.findById(memberId);
        if (optionalMember.isEmpty()) {
            throw new MemberNotFoundException();
        }
        Member member = optionalMember.get();
        Fond fond = member.getFond();
        fond.updateFond(requestFondDto);
    }
}
