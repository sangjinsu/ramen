package com.ramen.ramen.dto.member;

import lombok.Builder;
import lombok.Data;

import java.io.Serializable;

@Data
@Builder
public class FondDto implements Serializable {
    private final String noodleLength;
    private final String noodleTexture;
    private final Boolean ingredientNone;
    private final Boolean ingredientGarlic;
    private final Boolean ingredientPepper;
    private final Boolean ingredientGreenOnion;
    private final String egg;
    private final Boolean toppingNone;
    private final Boolean toppingCheese;
    private final Boolean toppingTteok;
    private final Boolean toppingDumpling;
    private final String spicy;
}
