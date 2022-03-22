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

    @NonNull
    private int liquid; // tinyint <-> int? boolean?

    @NonNull
    private int powder;

    @NonNull
    private int seasoning;

    @NonNull
    private int soup;

    @NonNull
    private int cup;

    @NonNull
    private int cold;

    @NonNull
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