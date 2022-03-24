package com.ramen.ranking.controller;
import com.ramen.ranking.repository.RamenLikeRedisRepository;
import com.ramen.ranking.repository.RamenViewRedisRepository;
import com.ramen.ranking.service.RamenService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequiredArgsConstructor
@RequestMapping("v1/ranking/")
public class RamenController {

//    @Autowired
//    private final RamenLikeRedisRepository ramenLikeRedisRepository;
//    @Autowired
//    private final RamenViewRedisRepository ramenViewRedisRepository;
    @Autowired
    private final RamenService ramenService;

    @GetMapping("/view/{ramenId}")// /{userIp}
    public void beerView(@PathVariable("ramenId") Long ramenId){//, @PathVariable("userIp") Long userIp) {

            HttpServletRequest req = ((ServletRequestAttributes)RequestContextHolder.currentRequestAttributes()).getRequest();
            String ip = req.getHeader("X-FORWARDED-FOR");
            if (ip == null) {
                ip = req.getRemoteAddr();
            }
            String userIp = ip;
        System.out.println(ip);
        ramenService.saveRamenView(ramenId, userIp);
    }

    @GetMapping("/like/{ramenId}/{memberId}")
    public void beeLike(@PathVariable("ramenId") Long ramenId, @PathVariable("memberId") Long memberId) {
        ramenService.saveRamenLike(ramenId, memberId);
    }

    @GetMapping("/ramen")
    public void fetchPopRamen() {
        ramenService.getPopRamen();
    }

}
