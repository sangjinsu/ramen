package com.ramen.ramen.dto.ramen;

import com.ramen.ramen.domain.Composition;
import com.ramen.ramen.domain.Nutrient;
import com.ramen.ramen.domain.Ramen;
import lombok.Data;

import java.io.Serializable;

@Data
public class RamenDetailDto implements Serializable {
    private final Long ramenId;
    private final String sampleId;
    private final String name;
    private final String englishName;
    private final String brand;
    private final String englishBrand;
    private final int surveyYear;
    private final String noodle;
    private final String code;

    // nutrient
    private final double volume;
    private final double protein;
    private final double kcal;
    private final double lipid;
    private final double transFat;
    private final double carbs;
    private final double sugar;
    private final double sodium;
    private final double cholesterol;
    private final double saturated_fat;
    private final double salty;
    private final double sweetness;

    // composition
    private final boolean liquid;
    private final boolean powder;
    private final boolean seasoning;
    private final boolean soup;
    private final boolean cup;
    private final boolean cold;
    private final boolean jjajang;

    // 유사 라면 리스트?

    public RamenDetailDto(Ramen ramen, Nutrient nutrient, Composition composition){
        this.ramenId = ramen.getRamenId();
        this.sampleId = ramen.getSampleId();
        this.name = ramen.getName();
        this.englishName = ramen.getEnglishName();
        this.brand = ramen.getBrand();
        this.englishBrand = ramen.getEnglishBrand();
        this.surveyYear = ramen.getSurveyYear();
        this.noodle = ramen.getNoodle();
        this.code = ramen.getCode();

        this.volume = nutrient.getVolume();
        this.protein = nutrient.getProtein();
        this.kcal = nutrient.getKcal();
        this.lipid = nutrient.getLipid();
        this.transFat = nutrient.getTransFat();
        this.carbs = nutrient.getCarbs();
        this.sugar = nutrient.getSugar();
        this.sodium = nutrient.getSodium();
        this.cholesterol = nutrient.getCholesterol();
        this.saturated_fat = nutrient.getSaturated_fat();
        this.salty = nutrient.getSalty();
        this.sweetness = nutrient.getSweetness();

        this.liquid = composition.getLiquid();
        this.powder = composition.getPowder();
        this.seasoning = composition.getSeasoning();
        this.soup = composition.getSoup();
        this.cup = composition.getCup();
        this.cold = composition.getCold();
        this.jjajang = composition.getJjajang();
    }
}
