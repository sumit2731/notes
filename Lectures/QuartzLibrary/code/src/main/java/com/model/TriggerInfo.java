package com.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class TriggerInfo {
    private int triggerCount;
    private boolean isRunForever;
    //if running forever we need to have gap
    private Long timeInterval;
    //delay between starting project to starting job/scheduler
    private Long initialOffset;
    private String info;
}
