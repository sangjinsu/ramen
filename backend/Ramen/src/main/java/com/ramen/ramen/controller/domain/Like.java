package com.ramen.ramen.controller.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "like")
@Getter
@Setter
public class Like {
    @Id
    @Column(name = "id", nullable = false)
    private Long id;


}