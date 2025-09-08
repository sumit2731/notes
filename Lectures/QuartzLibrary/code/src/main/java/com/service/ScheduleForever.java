package com.service;

import com.commonUtils.CommonUtils;
import com.jobs.FirstJob;
import com.jobs.SecondJob;
import com.model.TriggerInfo;
import com.scheduler.MainSchedular;
import jakarta.annotation.PostConstruct;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class ScheduleForever {
    private final MainSchedular schedular;
    private final CommonUtils commonUtils;

    @PostConstruct
    public void init() {
//        TriggerInfo triggerInfo = commonUtils.getTriggerInfoObj(1,true,2000L,2000L,"Hello");
//        schedular.scheduleJob(SecondJob.class,triggerInfo);

//        schedular.scheduleJob(SecondJob.class,"0/2 * * * * ?");
    }
}
