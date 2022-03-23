package com.ramen.ramen.dto.ramen;

import lombok.Data;

import java.io.Serializable;

@Data
public class RamenSortDto implements Serializable {
    private final Long ramenId;
    private final String name;
    private final String englishName;
    private final String brand;
    private final String englishBrand;
    private final double c;

    public RamenSortDto(Long ramenId, String name, String englishName, String brand, String englishBrand, double c){
        this.ramenId = ramenId;
        this.name = name;
        this.englishName = englishName;
        this.brand = brand;
        this.englishBrand = englishBrand;
        this.c = c;
    }

}

