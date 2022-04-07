package com.ramen.ramen.controller.log;

import com.google.gson.Gson;
import com.ramen.ramen.dto.log.LogDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("v1/log")
@RequiredArgsConstructor
//@CrossOrigin(origins = "*", allowedHeaders = "*")
@Slf4j
public class LogController {

    @PostMapping()
    public void log(@RequestBody LogDto logDto) {
        Gson gson = new Gson();
        String jsonString = gson.toJson(logDto);
        log.info(jsonString);
    }
}


