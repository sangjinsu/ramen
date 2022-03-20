package com.ramen.ramen.controller.ramen;

import com.ramen.ramen.dto.ramen.RamenDetailDto;
import com.ramen.ramen.service.ramen.RamenService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController("/v1/ramen")
@RequiredArgsConstructor
public class RamenController {

    private final RamenService ramenService;

    // 라면 디테일 페이지 조회
    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/{ramenId}/detail")
    RamenDetailDto ramenDetailDto(@PathVariable("ramenId") Long ramenId) {
        return ramenService.fetchDetailRamen(ramenId);
    }


    // 라면 조건별로 리스트 조회
    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/") // ????? 어떤 조건을 받을지? 어떤 자료 반환할지??



}
