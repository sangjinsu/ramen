package com.ramen.ramen.domain;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

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

}
