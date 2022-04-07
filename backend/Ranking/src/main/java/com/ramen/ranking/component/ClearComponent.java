package com.ramen.ranking.component;


import com.ramen.ranking.service.ClearService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component
public class ClearComponent {

    @Autowired
    private final ClearService clearService;

    @Scheduled(cron = "0 0 7 * * *", zone = "Asia/Seoul")
    public void clear() {
        clearService.flushALl();
    }

}
