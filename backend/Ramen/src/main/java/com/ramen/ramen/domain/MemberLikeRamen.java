package com.ramen.ramen.domain;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "member_like_ramen")
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class MemberLikeRamen {
    @Id
    @Column(name = "member_like_ramen_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long memberLikeRamenId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    @NonNull
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ramen_id")
    @NonNull
    private Ramen ramen;
}