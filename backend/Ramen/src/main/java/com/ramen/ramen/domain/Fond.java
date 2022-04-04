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

    @Setter
    private String noodleLength;

    @Setter
    private String noodleTexture;

    @Setter
    private Boolean ingredientNone;

    @Setter
    private Boolean ingredientGarlic;

    @Setter
    private Boolean ingredientPepper;

    @Setter
    private Boolean ingredientGreenOnion;

    @Setter
    private String egg;

    @Setter
    private Boolean toppingNone;

    @Setter
    private Boolean toppingCheese;

    @Setter
    private Boolean toppingTteok;

    @Setter
    private Boolean toppingDumpling;

    @Setter
    private String spicy;

    public void updateFond(RequestFondDto requestFondDto) {
        this.setNoodleLength(requestFondDto.getNoodleLength());
        this.setNoodleTexture(requestFondDto.getNoodleTexture());

        this.setIngredientNone(requestFondDto.getIngredientNone());
        this.setIngredientGarlic(requestFondDto.getIngredientGarlic());
        this.setIngredientPepper(requestFondDto.getIngredientPepper());
        this.setIngredientGreenOnion(requestFondDto.getIngredientGreenOnion());


        this.setEgg(requestFondDto.getEgg());

        this.setToppingNone(requestFondDto.getToppingNone());
        this.setToppingCheese(requestFondDto.getToppingCheese());
        this.setToppingTteok(requestFondDto.getToppingTteok());
        this.setToppingDumpling(requestFondDto.getToppingDumpling());

        this.setSpicy(requestFondDto.getSpicy());

    }
}