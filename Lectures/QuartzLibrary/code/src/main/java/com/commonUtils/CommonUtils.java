package com.commonUtils;

import com.model.TriggerInfo;
import org.quartz.*;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class CommonUtils {
    public JobDetail getJobDetail(Class<? extends Job> classname, TriggerInfo triggerInfo) {
        JobDataMap jobData = new JobDataMap();
        jobData.put(classname.getSimpleName(),triggerInfo);
        return JobBuilder.newJob(classname)
                //how you want this job to be identified
                .withIdentity(classname.getSimpleName(),"grp1")
                .setJobData(jobData)
                .build();
    }

    public JobDetail getJobDetail(Class<? extends Job> classname) {
        return JobBuilder.newJob(classname)
                //how you want this job to be identified
                .withIdentity(classname.getSimpleName(),"grp1")
                .build();
    }
    public Trigger getTriggerInfoOfJob(Class<? extends Job> classname, TriggerInfo triggerInfo) {
        SimpleScheduleBuilder builder = SimpleScheduleBuilder
                .simpleSchedule()
                .withIntervalInMilliseconds(triggerInfo.getTimeInterval());
        if(triggerInfo.isRunForever()) builder.repeatForever();
        else builder.withRepeatCount(triggerInfo.getTriggerCount());
        return TriggerBuilder
                .newTrigger()
                .startAt(new Date(System.currentTimeMillis()+ triggerInfo.getInitialOffset()))
                .withSchedule(builder)
                .build();
    }

    public Trigger getTriggerByCronExpression(Class className,String cronExpression) {
        return TriggerBuilder
                .newTrigger()
                .withIdentity(className.getSimpleName())
                .withSchedule(CronScheduleBuilder.cronSchedule(cronExpression))
                .build();
    }

    public TriggerInfo getTriggerInfoObj(int triggerCount, boolean runForever, long repeatValue, long initialOffset, String information) {
        TriggerInfo triggerInfo = new TriggerInfo();
        triggerInfo.setTriggerCount(triggerCount);
        triggerInfo.setRunForever(runForever);
        triggerInfo.setTimeInterval(repeatValue);
        triggerInfo.setInitialOffset(initialOffset);
        triggerInfo.setInfo(information);
        return triggerInfo;
    }
}
