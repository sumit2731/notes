package com.service;

import com.commonUtils.CommonUtils;
import com.jobs.FirstJob;
import com.model.TriggerInfo;
import com.scheduler.MainSchedular;
import jakarta.annotation.PostConstruct;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class FirstJobRun {
    // @Autowired
    private final MainSchedular schedular;
    // @Autowired
    private final CommonUtils commonUtils;

    @PostConstruct
    public void init() {
        TriggerInfo triggerInfo = commonUtils.getTriggerInfoObj(5, false, 1000L, 1000L, "First Job");
        schedular.scheduleJob(FirstJob.class, triggerInfo);
    }
}
