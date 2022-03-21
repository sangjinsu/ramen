package com.ramen.ramen.domain;

import lombok.*;

import javax.persistence.*;

@Entity
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Getter
public class Ramen {
    @Id
    @Column(name = "ramen_id", nullable = false)
    private Long ramenId;

    @NonNull
    private String sampleId;

    @NonNull
    private String name;

    @NonNull
    private String englishName;

    @NonNull
    private String brand;

    @NonNull
    private String englishBrand;

    @NonNull
    private int surveyYear;

    @NonNull
    private String noodle;

    @NonNull
    private String code;

    @Setter
    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "composition_id")
    private Composition composition;

    @Setter
    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "nutrient_id")
    private Nutrient nutrient;

    @Setter
    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "analysis_id")
    private Analysis analysis;

}
