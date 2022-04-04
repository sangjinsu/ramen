package com.ramen.ramen.domain;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "composition")
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class Composition {

    @Id
    @Column(name = "composition_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long compositionId;

    private int liquid; // tinyint <-> int? boolean?

    private int powder;

    private int seasoning;

    private int soup;

    private int cup;

    private int cold;

    private int jjajang;

    //Getter

    public int getLiquid() {
        return liquid;
    }

    public int getPowder() {
        return powder;
    }

    public int getSeasoning() {
        return seasoning;
    }

    public int getSoup() {
        return soup;
    }

    public int getCup() {
        return cup;
    }

    public int getCold() {
        return cold;
    }

    public int getJjajang() {
        return jjajang;
    }

}