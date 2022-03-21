package com.ramen.ranking.domain;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;
import org.springframework.data.redis.core.index.Indexed;

//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
import java.io.Serializable;

@Data
@RedisHash(value="ramenlike")
public class RamenLike implements Serializable {

    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long Id;
    @Indexed
    private Long ramenId;
    @Indexed
    private Long memberId;

}
