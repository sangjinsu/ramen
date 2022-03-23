package com.ramen.ramen.controller.ramen;

import com.ramen.ramen.dto.ramen.RamenDetailDto;
import com.ramen.ramen.dto.ramen.RamenListDto;
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


    // 라면 조건 카테고리 별로 리스트 조회
    // query dsl 적용 필요
    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/category/{category}") // 1개부터 최대 3개까지
    RamenListDto fetchRamensByCategory(@PathVariable("category") String category){
        return ramenService.fetchRamensByCategory(category);
    }


    // 라면 조건 Analysis 별로 리스트 조회
    // query dsl 적용 필요
    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/analysis/{analysis}")
//    RamenListDto fetchRamensByAnalysis(@PathVariable("analysis") String analysis){
    List<Object[]> fetchRamensByAnalysis(@PathVariable("analysis") String analysis){
        return ramenService.fetchRamensByAnalysis(analysis);
    }





}
