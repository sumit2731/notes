package com.scheduler;

import com.commonUtils.CommonUtils;
import com.jobs.FirstJob;
import com.model.TriggerInfo;
import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;
import lombok.AllArgsConstructor;
import org.quartz.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class MainSchedular {

    private final Scheduler scheduler;
    private final CommonUtils commonUtils;

    @PostConstruct
    public void startScheduler()  {
        try {
            scheduler.start();
        } catch (SchedulerException e) {
            throw new RuntimeException(e);
        }
    }


    public void scheduleJob(Class<? extends Job> classname, TriggerInfo triggerInfo) {
        try {
            JobDetail jobDetail = commonUtils.getJobDetail(classname,triggerInfo);
            Trigger triggerDetail = commonUtils.getTriggerInfoOfJob(classname, triggerInfo);
            scheduler.scheduleJob(jobDetail, triggerDetail );
        } catch (SchedulerException e) {
            throw new RuntimeException(e);
        }
    }

    public void scheduleJob(Class<? extends Job> classname, String cronExpression) {
        try {
            JobDetail jobDetail = commonUtils.getJobDetail(classname);
            Trigger triggerDetail = commonUtils.getTriggerByCronExpression(classname,cronExpression);
            scheduler.scheduleJob(jobDetail, triggerDetail );
        } catch (SchedulerException e) {
            throw new RuntimeException(e);
        }
    }
    @PreDestroy
    public void closeScheduler() {
        try {
            scheduler.shutdown();
        } catch (SchedulerException e) {
            throw new RuntimeException(e);
        }
    }
}
