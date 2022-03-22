package com.ramen.ramen.service.ramen;


import com.ramen.ramen.domain.Composition;
import com.ramen.ramen.domain.Nutrient;
import com.ramen.ramen.domain.Ramen;
import com.ramen.ramen.dto.ramen.RamenDetailDto;
import com.ramen.ramen.dto.ramen.RamenListDto;
import com.ramen.ramen.exception.RamenNotFoundException;
import com.ramen.ramen.repository.ramen.AnalysisRepository;
import com.ramen.ramen.repository.ramen.CompositionRepository;
import com.ramen.ramen.repository.ramen.NutrientRepository;
import com.ramen.ramen.repository.ramen.RamenRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class RamenService {

    private final RamenRepository ramenRepository;
    private final AnalysisRepository analysisRepository;
    private final CompositionRepository compositionRepository;
    private final NutrientRepository nutrientRepository;

    public RamenDetailDto fetchDetailRamen(Long ramenId) {

        Optional<Ramen> optionalRamen = ramenRepository.findById(ramenId);
        if (optionalRamen.isEmpty()) {
            throw new RamenNotFoundException();
        }

        Ramen ramen = optionalRamen.get();

        RamenDetailDto ramenDetailDto = new RamenDetailDto(ramen);

        return ramenDetailDto;
    }

    public RamenListDto fetchRamensByCategory(String category){ // List composition

        if (category == "건면") {
            List<Ramen> ramens = ramenRepository.findRamensByNoodle("category");
        }

        if (category == "유탕면") {
            List<Ramen> ramens = ramenRepository.findRamensByNoodle("category");
        }

        if (category == "생면" || category == "숙면") {
            List<Ramen> ramens = ramenRepository.findRamensByNoodle("생면");
            List<Ramen> ramens = ramenRepository.findRamensByNoodle("숙면");
        }

        if (category == "liquid") {
            List<Ramen> ramens = ramenRepository.findRamensByCompositionLiquid();
        }

        if (category == "powder") {
            List<Ramen> ramens = ramenRepository.findRamensByCompositionPowder();
        }

        if (category == "seasoning") {
            List<Ramen> ramens = ramenRepository.findRamensByCompositionSeasoning();
        }

        if (category == "soup") {
            List<Ramen> ramens = ramenRepository.findRamensByCompositionSoup();
        }

        if (category == "cup") {
            List<Ramen> ramens = ramenRepository.findRamensByCompositionCup();
        }

        if (category == "cold") {
            List<Ramen> ramens = ramenRepository.findRamensByCompositionCold();
        }

        if (category == "jjajang") {
            List<Ramen> ramens = ramenRepository.findRamensByCompositionJjajang();
        }

        // 3개 다 && 로 합친 후에
        // crawling count로 for 문 돌리면서 정렬

        return ;
    }

    public RamenListDto fetchRamensByAnalysis(String analysis){
//        List<Ramen> ramens = ramenRepository.findRamensByAnalysis(analysis);
        // 리스트 가져온 후 crawling cnt 로 정렬

        switch(analysis) {
            case "beef": List<Ramen> ramens = ramenRepository.findRamensByAnalysisBeef();


        }

        // crawling cnt로 정렬

        return ;
    }

}
