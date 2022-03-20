package com.ramen.ramen.domain;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "fond")
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Getter
public class Fond {

    @Id
    @Column(name = "fond_id", nullable = false)
    private Long fondId;

    @NonNull
    private String noodleLength;

    @NonNull
    private String noodleTexture;

    @NonNull
    private String ingredient;

    @NonNull
    private String egg;

    @NonNull
    private String topping;

    @NonNull
    private String spicy;
}