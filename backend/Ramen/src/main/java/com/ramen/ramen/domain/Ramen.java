package com.ramen.ramen.domain;

import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Getter
public class Ramen {
    @Id
    @Column(name = "ramen_id", nullable = false)
    private Long ramenId;

    private String sampleId;

    private String name;

    private String englishName;

    private String brand;

    private String englishBrand;

    private int surveyYear;

    @Override
    public String toString() {
        return "Ramen{" +
                "ramenId=" + ramenId +
                ", sampleId='" + sampleId + '\'' +
                ", name='" + name + '\'' +
                ", englishName='" + englishName + '\'' +
                ", brand='" + brand + '\'' +
                ", englishBrand='" + englishBrand + '\'' +
                ", surveyYear=" + surveyYear +
                ", noodle='" + noodle + '\'' +
                ", code='" + code + '\'' +
                ", composition=" + composition +
                ", nutrient=" + nutrient +
                ", analysis=" + analysis +
                '}';
    }

    private String noodle;

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

    @OneToMany(mappedBy = "ramen", cascade = CascadeType.ALL, orphanRemoval = true)
    private final List<MemberLikeRamen> likedMembers = new ArrayList<>();
}
