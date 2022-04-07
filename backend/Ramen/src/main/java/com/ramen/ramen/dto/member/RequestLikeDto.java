package com.ramen.ramen.dto.member;

import lombok.Data;

import java.io.Serializable;
import java.util.List;

@Data
public class RequestLikeDto implements Serializable {
    private final Long memberId;
    private final Long ramenId;
}
