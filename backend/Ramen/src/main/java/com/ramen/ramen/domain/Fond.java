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
    @Setter
    private String noodleLength;

    @NonNull
    @Setter
    private String noodleTexture;

    @NonNull
    @Setter
    private Boolean ingredientNone;

    @NonNull
    @Setter
    private Boolean ingredientGarlic;

    @NonNull
    @Setter
    private Boolean ingredientPepper;

    @NonNull
    @Setter
    private Boolean ingredientGreenOnion;

    @NonNull
    @Setter
    private String egg;

    @NonNull
    @Setter
    private Boolean toppingNone;

    @NonNull
    @Setter
    private Boolean toppingCheese;

    @NonNull
    @Setter
    private Boolean toppingTteok;

    @NonNull
    @Setter
    private Boolean toppingDumpling;

    @NonNull
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