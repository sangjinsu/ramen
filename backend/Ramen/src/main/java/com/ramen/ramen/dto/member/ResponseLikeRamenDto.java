package com.ramen.ramen.dto.member;

import com.ramen.ramen.domain.Ramen;
import com.ramen.ramen.dto.ramen.RamenSortDto;
import lombok.Builder;
import lombok.Data;

import java.io.Serializable;

@Data
public class ResponseLikeRamenDto implements Serializable {
    private final Long ramenId;
    private final String name;
    private final String englishName;
    private final String brand;
    private final String englishBrand;

    public ResponseLikeRamenDto(Ramen ramen) {
        this.ramenId = ramen.getRamenId();
        this.name = ramen.getName();
        this.englishName = ramen.getEnglishName();
        this.brand = ramen.getBrand();
        this.englishBrand = ramen.getEnglishBrand();
    }
}
