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

    private double volume;

    private double protein;

    private double kcal;

    private double lipid;

    private double transFat;

    private double carbs;

    private double sugar;

    private double sodium;

    private double cholesterol;

    private double saturated_fat;

    private double salty;

    private double sweetness;

}