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

//    @NonNull
//    private String sampleId; mariaDB in sampleId??? but not in ERD

    @NonNull
    private Double kkoDeul;

    @NonNull
    private Double jjolGit;

    @NonNull
    private Double greenOnion;

    @NonNull
    private Double egg;

    @NonNull
    private Double beef;

    @NonNull
    private Double pork;

    @NonNull
    private Double chickenBreast;

    @NonNull
    private Double milk;

    @NonNull
    private Double riceCake;

    @NonNull
    private Double dumpling;

    @NonNull
    private Double softTofu;

    @NonNull
    private Double kimchi;

    @NonNull
    private Double mayonnaise;

    @NonNull
    private Double cheese;

    @NonNull
    private Double garlic;

    @NonNull
    private Double pepper;

    @NonNull
    private Double chiliPowder;

    @NonNull
    private Double beanSprouts;

    @NonNull
    private Double cabbage;

    @NonNull
    private Double carrot;

    @NonNull
    private Double pumpkin;

    @NonNull
    private Double mushroom;

    @NonNull
    private Double potato;

    @NonNull
    private Double redPepper;

    @NonNull
    private Double soyaSprouts;

    @NonNull
    private Double seafood;

    @NonNull
    private Double seaweed;

    @NonNull
    private Double sausage;

    @NonNull
    private Double eomuk;

    @NonNull
    private Double tuna;

    @NonNull
    private Double ketchup;

    @NonNull
    private Double vegan;

    @NonNull
    private Double outdoor;

    @NonNull
    private Double morning;

    @NonNull
    private Double lunch;

    @NonNull
    private Double dinner;

    @NonNull
    private Double midnightSnack;

    @NonNull
    private Double haejang;

    @NonNull
    private Double diet;

    @NonNull
    private Double notSpicy;

    @NonNull
    private Double spicy;

    @NonNull
    private Double delicious;

    @NonNull
    private Double notDelicious;

    @NonNull
    private Double lightness;

    @NonNull
    private Double blogCnt;

    @NonNull
    private Double tweetCnt;

    @NonNull
    private Double crawlingCnt;

    @Setter
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ramen_id")
    private Ramen ramen;

}