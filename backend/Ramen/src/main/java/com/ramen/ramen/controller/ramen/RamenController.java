package com.ramen.ramen.controller.ramen;

import com.ramen.ramen.dto.ramen.CategoryVo;
import com.ramen.ramen.dto.ramen.RamenDetailDto;
import com.ramen.ramen.dto.ramen.RamenListDto;
import com.ramen.ramen.service.ramen.RamenService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController("/v1/ramen")
@RequiredArgsConstructor
public class RamenController {

    private final RamenService ramenService;

    // 라면 디테일 페이지 조회
    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/detail/{ramenId}")
    RamenDetailDto ramenDetailDto(@PathVariable("ramenId") Long ramenId) {
        return ramenService.fetchDetailRamen(ramenId);
    }

    // 라면 조건 카테고리 별로 리스트 조회
    // query dsl 적용 필요
    @ResponseStatus(HttpStatus.OK)
    @PostMapping("/category") // 1개부터 최대 3개까지
    List<RamenListDto> fetchRamensByCategory(@RequestBody CategoryVo category){
//        System.out.println(category);
//        List<RamenListDto> ramenListDtos = new ArrayList<>();
//        return ramenListDtos;
        return ramenService.fetchRamensByCategory(category);
    }

    // 라면 조건 Analysis 별로 리스트 조회
    // query dsl 적용 필요
    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/analysis/{analysis}")
//    RamenListDto fetchRamensByAnalysis(@PathVariable("analysis") String analysis){
    List<RamenListDto> fetchRamensByAnalysis(@PathVariable("analysis") String analysis){
        return ramenService.fetchRamensByAnalysis(analysis);
    }





}
