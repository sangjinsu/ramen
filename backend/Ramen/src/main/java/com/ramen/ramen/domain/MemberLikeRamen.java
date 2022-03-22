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

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "ramen_id")
    private Ramen ramen;
}