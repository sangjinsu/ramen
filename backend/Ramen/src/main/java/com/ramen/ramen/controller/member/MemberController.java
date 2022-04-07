package com.ramen.ramen.controller.member;

import com.ramen.ramen.dto.member.FondDto;
import com.ramen.ramen.dto.member.RequestFondDto;
import com.ramen.ramen.dto.member.RequestLikeDto;
import com.ramen.ramen.dto.member.ResponseLikeRamenDto;
import com.ramen.ramen.service.member.FondService;
import com.ramen.ramen.service.member.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/member")
@RequiredArgsConstructor
//@CrossOrigin(origins = "*", allowedHeaders = "*")
public class MemberController {

    private final FondService fondService;
    private final MemberService memberService;

    // 라면 취향 조회
    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/{memberId}/fond")
    FondDto fetchFond(@PathVariable("memberId") Long memberId) {
        return fondService.fetchFond(memberId);
    }

    //라면 취향 생성
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/fond")
    void createFond(RequestFondDto requestFondDto) {
        fondService.createFond(requestFondDto);
    }

    //라면 취향 수정
    @ResponseStatus(HttpStatus.ACCEPTED)
    @PutMapping("/fond")
    void updateFond(RequestFondDto requestFondDto) {
        fondService.updateFond(requestFondDto);
    }

    //라면 좋아요
    @ResponseStatus(HttpStatus.OK)
    @PostMapping("/like")
    void likeRamen(RequestLikeDto requestLikeDto) {
        memberService.likeRamen(requestLikeDto);
    }

    // 좋아요한 라면 리스트 가져오기
    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/{memberId}/like")
    List<ResponseLikeRamenDto> fetchLikedRamens(@PathVariable("memberId") Long memberId) {
        return memberService.fetchLikedRamens(memberId);
    }
}
