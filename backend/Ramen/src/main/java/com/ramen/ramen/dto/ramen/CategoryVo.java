package com.ramen.ramen.dto.ramen;

import lombok.Data;

import java.io.Serializable;

@Data
public class CategoryVo implements Serializable {
    int ramenType;
    int noodleType;
    int ramenStyle;
}
