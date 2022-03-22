package com.ramen.ramen.dto.ramen;

import lombok.Data;

import java.io.Serializable;

@Data
public class RamenListDto implements Serializable {
    private final Long ramenId;
    private final String name;
    private final String englishName;
    private final String brand;
    private final String englishBrand;



}
