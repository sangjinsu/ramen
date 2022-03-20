package com.ramen.ramen.dto.member;

import lombok.Builder;
import lombok.Data;

import java.io.Serializable;

@Data
@Builder
public class FondDto implements Serializable {
    private final String noodleLength;
    private final String noodleTexture;
    private final String ingredient;
    private final String egg;
    private final String topping;
    private final String spicy;
}
