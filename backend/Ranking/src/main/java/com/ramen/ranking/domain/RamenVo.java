package com.ramen.ranking.domain;


import lombok.Data;

import java.io.Serializable;

@Data
public class RamenVo implements Serializable {

    private final Long ramenId;

    public RamenVo(RamenView ramen) {
        this.ramenId = ramen.getRamenId();
    }

    public RamenVo(RamenLike ramen) {
        this.ramenId = ramen.getRamenId();
    }

    public RamenVo(String ramenId) {
        this.ramenId = Long.valueOf(ramenId);
    }

}
