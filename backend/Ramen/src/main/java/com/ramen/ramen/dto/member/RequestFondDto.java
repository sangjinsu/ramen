package com.ramen.ramen.dto.member;

import lombok.Data;

import java.io.Serializable;

@Data
public class RequestFondDto implements Serializable {
    private final Long memberId;
    private final String noodleLength;
    private final String noodleTexture;
    private final String ingredient;
    private final String egg;
    private final String topping;
    private final String spicy;
}
