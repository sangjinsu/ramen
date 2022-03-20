package com.ramen.ramen.service.ramen;


import com.ramen.ramen.domain.Composition;
import com.ramen.ramen.domain.Nutrient;
import com.ramen.ramen.domain.Ramen;
import com.ramen.ramen.dto.ramen.RamenDetailDto;
import com.ramen.ramen.exception.RamenNotFoundException;
import com.ramen.ramen.repository.ramen.AnalysisRepository;
import com.ramen.ramen.repository.ramen.CompositionRepository;
import com.ramen.ramen.repository.ramen.NutrientRepository;
import com.ramen.ramen.repository.ramen.RamenRepository;
import lombok.RequiredArgsConstructor;

import java.util.Optional;

@RequiredArgsConstructor
public class RamenService {

    private final RamenRepository ramenRepository;
    private final AnalysisRepository analysisRepository;
    private final CompositionRepository compositionRepository;
    private final NutrientRepository nutrientRepository;

    public RamenDetailDto fetchDetailRamen(Long ramenId) { // 영양정보, 구성, 유사 라면, 라면 정보 -> 한영 구분?
                                                           // 그렇다면 영양 정보, 구성 모두 영어 속성?

        Optional<Ramen> optionalRamen = ramenRepository.findById(ramenId);
        if (optionalRamen.isEmpty()) {
            throw new RamenNotFoundException();
        }

        Ramen ramen = optionalRamen.get();

        Composition composition = compositionRepository.findByRamenId(ramenId);

        Nutrient nutrient = nutrientRepository.findByRamenId(ramenId);

        RamenDetailDto ramenDetailDto = new RamenDetailDto(ramen, nutrient, composition);

        return ramenDetailDto;

    }

    // nutreint에 대한 조건, analysis에 대한 조건, composition에 대한 조건
    // 반환 데이터 dtd 는 어떻게 구성?? 영어는 어떻게 구성???




}
