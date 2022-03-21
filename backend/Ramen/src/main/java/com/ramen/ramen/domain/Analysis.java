package com.ramen.ramen.domain;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "analysis")
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class Analysis {
    @Id
    @Column(name = "analysis_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long analysisId;

    @NonNull
    private String sampleId;

    @NonNull
    private double kkoDeul;

    @NonNull
    private double jjolGit;

    @NonNull
    private double greenOnion;

    @NonNull
    private double egg;

    @NonNull
    private double beef;

    @NonNull
    private double pork;

    @NonNull
    private double chickenBreast;

    @NonNull
    private double milk;

    @NonNull
    private double riceCake;

    @NonNull
    private double dumpling;

    @NonNull
    private double softTofu;

    @NonNull
    private double kimchi;

    @NonNull
    private double mayonnaise;

    @NonNull
    private double cheese;

    @NonNull
    private double garlic;

    @NonNull
    private double pepper;

    @NonNull
    private double chiliPowder;

    @NonNull
    private double beanSprouts;

    @NonNull
    private double cabbage;

    @NonNull
    private double carrot;

    @NonNull
    private double pumpkin;

    @NonNull
    private double mushroom;

    @NonNull
    private double potato;

    @NonNull
    private double redPepper;

    @NonNull
    private double soyaSprouts;

    @NonNull
    private double seafood;

    @NonNull
    private double seaweed;

    @NonNull
    private double sausage;

    @NonNull
    private double eomuk;

    @NonNull
    private double tuna;

    @NonNull
    private double ketchup;

    @NonNull
    private double vegan;

    @NonNull
    private double outdoor;

    @NonNull
    private double morning;

    @NonNull
    private double lunch;

    @NonNull
    private double dinner;

    @NonNull
    private double midnightSnack;

    @NonNull
    private double haejang;

    @NonNull
    private double diet;

    @NonNull
    private double notSpicy;

    @NonNull
    private double spicy;

    @NonNull
    private double delicious;

    @NonNull
    private double notDelicious;

    @NonNull
    private double lightness;

    @NonNull
    private double blogCnt;

    @NonNull
    private double tweetCnt;

    @NonNull
    private double crawlingCnt;

}