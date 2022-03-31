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

    private String sampleId;

    private double kkoDeul;

    private double jjolGit;

    private double greenOnion;

    private double egg;

    private double beef;

    private double pork;

    private double chickenBreast;

    private double milk;

    private double riceCake;

    private double dumpling;

    private double softTofu;

    private double kimchi;

    private double mayonnaise;

    private double cheese;

    private double garlic;

    private double pepper;

    private double chiliPowder;

    private double beanSprouts;

    private double cabbage;

    private double carrot;

    private double pumpkin;

    private double mushroom;

    private double potato;

    private double redPepper;

    private double soyaSprouts;

    private double seafood;

    private double seaweed;

    private double sausage;

    private double eomuk;

    private double tuna;

    private double ketchup;

    private double vegan;

    private double outdoor;

    private double morning;

    private double lunch;

    private double dinner;

    private double midnightSnack;

    private double haejang;

    private double diet;

    private double notSpicy;

    private double spicy;

    private double delicious;

    private double notDelicious;

    private double lightness;

    private double blogCnt;

    private double tweetCnt;

    private double crawlingCnt;

    private double taengGeul;

}