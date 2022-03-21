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
                .ingredientNone(fond.getIngredientNone())
                .ingredientGarlic(fond.getIngredientGarlic())
                .ingredientPepper(fond.getIngredientPepper())
                .ingredientGreenOnion(fond.getIngredientGreenOnion())
                .egg(fond.getEgg())
                .toppingNone(fond.getToppingNone())
                .toppingCheese(fond.getToppingCheese())
                .toppingTteok(fond.getToppingTteok())
                .toppingDumpling(fond.getToppingDumpling())
                .spicy(fond.getSpicy()).build();
    }

    public void createFond(RequestFondDto requestFondDto) {
        Long memberId = requestFondDto.getMemberId();
        Fond fond = Fond.builder()
                .noodleLength(requestFondDto.getNoodleLength())
                .noodleTexture(requestFondDto.getNoodleTexture())
                .ingredientNone(requestFondDto.getIngredientNone())
                .ingredientGarlic(requestFondDto.getIngredientGarlic())
                .ingredientPepper(requestFondDto.getIngredientPepper())
                .ingredientGreenOnion(requestFondDto.getIngredientGreenOnion())
                .egg(requestFondDto.getEgg())
                .toppingNone(requestFondDto.getToppingNone())
                .toppingCheese(requestFondDto.getToppingCheese())
                .toppingTteok(requestFondDto.getToppingTteok())
                .toppingDumpling(requestFondDto.getToppingDumpling())
                .spicy(requestFondDto.getSpicy()).build();

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
