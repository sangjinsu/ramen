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
    private boolean liquid; // tinyint <-> int? boolean?

    @NonNull
    private boolean powder;

    @NonNull
    private boolean seasoning;

    @NonNull
    private boolean soup;

    @NonNull
    private boolean cup;

    @NonNull
    private boolean cold;

    @NonNull
    private boolean jjajang;

    //Getter

    public boolean getLiquid() {
        return liquid;
    }

    public boolean getPowder() {
        return powder;
    }

    public boolean getSeasoning() {
        return seasoning;
    }

    public boolean getSoup() {
        return soup;
    }

    public boolean getCup() {
        return cup;
    }

    public boolean getCold() {
        return cold;
    }

    public boolean getJjajang() {
        return jjajang;
    }

}