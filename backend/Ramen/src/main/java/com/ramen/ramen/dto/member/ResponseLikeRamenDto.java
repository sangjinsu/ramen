package com.ramen.ramen.dto.member;

import com.ramen.ramen.domain.Ramen;
import com.ramen.ramen.dto.ramen.RamenSortDto;
import lombok.Builder;
import lombok.Data;

import java.io.Serializable;

@Data
@Builder
public class ResponseLikeRamenDto implements Serializable {
//    private final Ramen ramen;

    private final Long ramenId;
    private final String name;
    private final String englishName;
    private final String brand;
    private final String englishBrand;

    public ResponseLikeRamenDto(Long ramenId, String name, String englishName, String brand, String englishBrand) {
        this.ramenId = ramenId;
        this.name = name;
        this.englishName = englishName;
        this.brand = brand;
        this.englishBrand = englishBrand;

    }
}
