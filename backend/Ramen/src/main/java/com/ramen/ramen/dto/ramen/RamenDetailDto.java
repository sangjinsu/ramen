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
    private final int liquid;
    private final int powder;
    private final int seasoning;
    private final int soup;
    private final int cup;
    private final int cold;
    private final int jjajang;

    // 유사 라면 리스트?

    public RamenDetailDto(Ramen ramen) {
        this.ramenId = ramen.getRamenId();
        this.sampleId = ramen.getSampleId();
        this.name = ramen.getName();
        this.englishName = ramen.getEnglishName();
        this.brand = ramen.getBrand();
        this.englishBrand = ramen.getEnglishBrand();
        this.surveyYear = ramen.getSurveyYear();
        this.noodle = ramen.getNoodle();
        this.code = ramen.getCode();

        this.volume = ramen.getNutrient().getVolume();
        this.protein = ramen.getNutrient().getProtein();
        this.kcal = ramen.getNutrient().getKcal();
        this.lipid = ramen.getNutrient().getLipid();
        this.transFat = ramen.getNutrient().getTransFat();
        this.carbs = ramen.getNutrient().getCarbs();
        this.sugar = ramen.getNutrient().getSugar();
        this.sodium = ramen.getNutrient().getSodium();
        this.cholesterol = ramen.getNutrient().getCholesterol();
        this.saturated_fat = ramen.getNutrient().getSaturated_fat();
        this.salty = ramen.getNutrient().getSalty();
        this.sweetness = ramen.getNutrient().getSweetness();

        this.liquid = ramen.getComposition().getLiquid();
        this.powder = ramen.getComposition().getPowder();
        this.seasoning = ramen.getComposition().getSeasoning();
        this.soup = ramen.getComposition().getSoup();
        this.cup = ramen.getComposition().getCup();
        this.cold = ramen.getComposition().getCold();
        this.jjajang = ramen.getComposition().getJjajang();
    }
}
