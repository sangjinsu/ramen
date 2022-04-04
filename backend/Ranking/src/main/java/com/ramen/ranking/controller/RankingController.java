package com.ramen.ranking.controller;
import com.ramen.ranking.domain.RamenVo;
import com.ramen.ranking.service.ClearService;
import com.ramen.ranking.service.RamenService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping("v1/ranking/")
@CrossOrigin(origins = "*", allowedHeaders = "*")
//@CrossOrigin(origins = "http://j6c104.p.ssafy.io:8888/", allowedHeaders = "*")
public class RankingController {

    @Autowired
    private final RamenService ramenService;

    @Autowired
    private final ClearService clearService;

    @GetMapping("/view/{ramenId}")
    public void ramenView(@PathVariable("ramenId") Long ramenId){//, @PathVariable("userIp") Long userIp) {

            HttpServletRequest req = ((ServletRequestAttributes)RequestContextHolder.currentRequestAttributes()).getRequest();
            String ip = req.getHeader("X-FORWARDED-FOR");
            if (ip == null) {
                ip = req.getRemoteAddr();
            }
            String userIp = ip;
        System.out.println(ip);
        ramenService.saveRamenView(ramenId, userIp);
    }

    @GetMapping("/view/{ramenId}/{memberId}")
    public void ramenLoginView(@PathVariable("ramenId") Long ramenId, @PathVariable("memberId") Long memberId) {
        ramenService.saveRamenLoginView(ramenId, memberId);
    }


    @GetMapping("/like/{ramenId}/{memberId}")
    public void ramenLike(@PathVariable("ramenId") Long ramenId, @PathVariable("memberId") Long memberId) {
        ramenService.saveRamenLike(ramenId, memberId);
    }

    @GetMapping("/ramen")
    public List<RamenVo> fetchPopRamen() {
        List<String> ramens = ramenService.getPopRamen();
        return ramens.stream().map(RamenVo::new).collect(Collectors.toList());
    }

    @DeleteMapping("/clear")
    public void clearAll(){
        clearService.flushALl();
    }

}
