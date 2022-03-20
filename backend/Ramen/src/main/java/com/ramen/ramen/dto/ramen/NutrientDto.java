package com.ramen.ramen.dto.ramen;

import lombok.Data;

import java.io.Serializable;

@Data
public class NutrientDto implements Serializable {
    private final Long nutrientId;
    private final Double volume;
    private final Double protein;
    private final Double kcal;
    private final Double lipid;
    private final Double transFat;
    private final Double carbs;
    private final Double sugar;
    private final Double sodium;
    private final Double cholesterol;
    private final Double saturated_fat;
    private final Double salty;
    private final Double sweetness;
}
