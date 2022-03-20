package com.ramen.ramen.domain;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "nutrient")
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class Nutrient {
    @Id
    @Column(name = "nutrient_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long nutrientId;

    @NonNull
    private Double volume;

    @NonNull
    private Double protein;

    @NonNull
    private Double kcal;

    @NonNull
    private Double lipid;

    @NonNull
    private Double transFat;

    @NonNull
    private Double carbs;

    @NonNull
    private Double sugar;

    @NonNull
    private Double sodium;

    @NonNull
    private Double cholesterol;

    @NonNull
    private Double saturated_fat;

    @NonNull
    private Double salty;

    @NonNull
    private Double sweetness;

    @Setter
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ramen_id")
    private Ramen ramen;

}