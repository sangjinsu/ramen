package com.ramen.ramen.controller.log;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("v1/log")
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Slf4j(topic = "kafka-logger")
public class LogController {

//    @PostMapping()
//    public void log(@RequestBody RequestLogDto requestLogDto) {
//        Gson gson = new Gson();
//        String jsonString = gson.toJson(requestLogDto);
//        log.info(jsonString);
//    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping()
    public void testlog() throws IOException {
        // kafka logger에 로그 남기기
        // log.info(memberId, ramendId);
        log.info("hello~!@");
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/{memberId}/{ramenId}")
    public void log(@PathVariable("memberId") String memberId, @PathVariable("ramenId") String ramenId) throws IOException {
        // kafka logger에 로그 남기기
        log.info(memberId, ramenId);
//        log.info("hello~!@");
    }

}
