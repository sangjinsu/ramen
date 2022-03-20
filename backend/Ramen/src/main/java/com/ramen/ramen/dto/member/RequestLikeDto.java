package com.ramen.ramen.dto.member;

import lombok.Data;

import java.io.Serializable;

@Data
public class RequestLikeDto implements Serializable {
    private final Long memberId;
    private final Long ramenId;
}
