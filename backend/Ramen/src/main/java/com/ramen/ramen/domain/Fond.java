package com.ramen.ramen.domain;

import com.ramen.ramen.dto.member.RequestFondDto;
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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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

    private void setNoodleLength(String noodleLength) {
        this.noodleLength = noodleLength;
    }

    private void setNoodleTexture(String noodleTexture) {
        this.noodleTexture = noodleTexture;
    }

    private void setIngredient(String ingredient) {
        this.ingredient = ingredient;
    }

    private void setEgg(String egg) {
        this.egg = egg;
    }

    private void setTopping(String topping) {
        this.topping = topping;
    }

    private void setSpicy(String spicy) {
        this.spicy = spicy;
    }

    public void updateFond(RequestFondDto requestFondDto) {
        this.setNoodleLength(requestFondDto.getNoodleLength());
        this.setNoodleLength(requestFondDto.getNoodleLength());
        this.setIngredient(requestFondDto.getIngredient());
        this.setSpicy(requestFondDto.getSpicy());
        this.setEgg(requestFondDto.getEgg());
        this.setTopping(requestFondDto.getTopping());
    }
}