package com.ramen.ranking.controller;
import com.ramen.ranking.repository.RamenLikeRedisRepository;
import com.ramen.ranking.repository.RamenViewRedisRepository;
import com.ramen.ranking.service.RamenService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("ramen")
public class RamenController {

    @Autowired
    RamenLikeRedisRepository ramenLikeRedisRepository;
    @Autowired
    RamenViewRedisRepository ramenViewRedisRepository;
    @Autowired
    RamenService ramenService;



}
