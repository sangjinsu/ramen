package com.ramen.ramen.dto.member;

import com.ramen.ramen.domain.Ramen;
import lombok.Builder;
import lombok.Data;

import java.io.Serializable;

@Data
@Builder
public class ResponseLikeRamenDto implements Serializable {
    private final Ramen ramen;
}
