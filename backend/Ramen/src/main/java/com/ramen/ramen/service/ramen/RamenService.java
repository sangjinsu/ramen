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
        List<Object[]> ramens1;
        List<Object[]> ramens2;
        List<Object[]> ramens3;


        if (category == "건면") {
            List<Object[]> ramens = ramenRepository.findRamensByNoodle("category");
        }

        if (category == "유탕면") {
            List<Object[]> ramens = ramenRepository.findRamensByNoodle("category");
        }

        if (category == "생면" || category == "숙면") {
            List<Object[]> ramens = ramenRepository.findRamensBySoftNoodle();
        }

        if (category == "liquid") {
            List<Object[]> ramens = ramenRepository.findRamensByCompositionLiquid();
        }

        if (category == "powder") {
            List<Object[]> ramens = ramenRepository.findRamensByCompositionPowder();
        }

        if (category == "seasoning") {
            List<Object[]> ramens = ramenRepository.findRamensByCompositionSeasoning();
        }

        if (category == "soup") {
            List<Object[]> ramens = ramenRepository.findRamensByCompositionSoup();
        }

        if (category == "cup") {
            List<Object[]> ramens = ramenRepository.findRamensByCompositionCup();
        }

        if (category == "cold") {
            List<Object[]> ramens = ramenRepository.findRamensByCompositionCold();
        }

        if (category == "jjajang") {
            List<Object[]> ramens = ramenRepository.findRamensByCompositionJjajang();
        }

        // 3개 다 && 로 합친 후에
        // crawling count로 for 문 돌리면서 정렬
    
        
        // 임시
        RamenListDto ramenListDto = null;

        return ramenListDto;
    }

//    public RamenListDto fetchRamensByAnalysis(String analysis){
    public List<Object[]> fetchRamensByAnalysis(String analysis){
        // 리스트 가져온 후 crawling cnt 로 정렬
        // List<Ramen> ramens = ramenRepository.findRamensByAnalysis(analysis);
        List<Object[]> ramens = null;

        switch(analysis) {
            case "kkoDeul": ramens = ramenRepository.findRamensByAnalysisKkoDeul(); break;
            case "taengGeul": ramens = ramenRepository.findRamensByAnalysisTaengGeul(); break;
            case "jjolGit": ramens = ramenRepository.findRamensByAnalysisJjolGit(); break;
            case "greenOnion": ramens = ramenRepository.findRamensByAnalysisGreenOnion(); break;
            case "egg": ramens = ramenRepository.findRamensByAnalysisEgg(); break;
            case "beef": ramens = ramenRepository.findRamensByAnalysisBeef(); break;
            case "pork": ramens = ramenRepository.findRamensByAnalysisPork(); break;
            case "chickenBreast": ramens = ramenRepository.findRamensByAnalysisChickenBreast(); break;
            case "milk": ramens = ramenRepository.findRamensByAnalysisMilk(); break;
            case "riceCake": ramens = ramenRepository.findRamensByAnalysisRiceCake(); break;
            case "dumpling": ramens = ramenRepository.findRamensByAnalysisDumpling(); break;
            case "softTofu": ramens = ramenRepository.findRamensByAnalysisSoftTofu(); break;
            case "kimchi": ramens = ramenRepository.findRamensByAnalysisKimchi(); break;
            case "mayonnaise": ramens = ramenRepository.findRamensByAnalysisMayonnaise(); break;
            case "cheese": ramens = ramenRepository.findRamensByAnalysisCheese(); break;
            case "garlic": ramens = ramenRepository.findRamensByAnalysisGarlic(); break;
            case "pepper": ramens = ramenRepository.findRamensByAnalysisPepper(); break;
            case "chiliPowder": ramens = ramenRepository.findRamensByAnalysisChiliPowder(); break;
            case "beanSprouts": ramens = ramenRepository.findRamensByAnalysisBeanSprouts(); break;
            case "redPepper": ramens = ramenRepository.findRamensByAnalysisRedPepper(); break;
            case "soyaSprouts": ramens = ramenRepository.findRamensByAnalysisSoyaSprouts(); break;
            case "seafood": ramens = ramenRepository.findRamensByAnalysisSeafood(); break;
            case "seaweed": ramens = ramenRepository.findRamensByAnalysisSeaweed(); break;
            case "sausage": ramens = ramenRepository.findRamensByAnalysisSausage(); break;
            case "tuna": ramens = ramenRepository.findRamensByAnalysisTuna(); break;
            case "ketchup": ramens = ramenRepository.findRamensByAnalysisKetchup(); break;
            case "vegan": ramens = ramenRepository.findRamensByAnalysisVegan(); break;
            case "diet": ramens = ramenRepository.findRamensByAnalysisDiet(); break;
            case "spicy": ramens = ramenRepository.findRamensByAnalysisSpicy(); break;
            case "lightness": ramens = ramenRepository.findRamensByAnalysisLightness(); break;
            case "haejang": ramens = ramenRepository.findRamensByAnalysisHaejang(); break;
        }

        // crawling cnt로 정렬

        return ramens;
    }

}
