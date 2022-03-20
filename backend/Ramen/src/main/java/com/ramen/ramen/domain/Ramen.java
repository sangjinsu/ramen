package com.ramen.ramen.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Ramen {
    @Id
    @Column(name = "ramen_id", nullable = false)
    private Long ramenId;

    public Long getRamenId() {
        return ramenId;
    }

    public void setRamenId(Long ramenId) {
        this.ramenId = ramenId;
    }
}
