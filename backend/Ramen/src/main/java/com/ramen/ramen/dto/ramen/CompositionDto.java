package com.ramen.ramen.dto.ramen;

import lombok.Data;

import java.io.Serializable;

@Data
public class CompositionDto implements Serializable {
    private final boolean liquid;
    private final boolean powder;
    private final boolean seasoning;
    private final boolean soup;
    private final boolean cup;
    private final boolean cold;
    private final boolean jjajang;
}
