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
    private double volume;

    @NonNull
    private double protein;

    @NonNull
    private double kcal;

    @NonNull
    private double lipid;

    @NonNull
    private double transFat;

    @NonNull
    private double carbs;

    @NonNull
    private double sugar;

    @NonNull
    private double sodium;

    @NonNull
    private double cholesterol;

    @NonNull
    private double saturated_fat;

    @NonNull
    private double salty;

    @NonNull
    private double sweetness;

}