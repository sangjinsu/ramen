package com.ramen.ramen.service.ramen;


import com.ramen.ramen.repository.member.MemberRepository;
import com.ramen.ramen.repository.ramen.AnalysisRepository;
import com.ramen.ramen.repository.ramen.CompositionRepository;
import com.ramen.ramen.repository.ramen.NutrientRepository;
import com.ramen.ramen.repository.ramen.RamenRepository;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class RamenService {

    private final RamenRepository ramenRepository;
    private final AnalysisRepository analysisRepository;
    private final CompositionRepository compositionRepository;
    private final NutrientRepository nutrientRepository;




}
