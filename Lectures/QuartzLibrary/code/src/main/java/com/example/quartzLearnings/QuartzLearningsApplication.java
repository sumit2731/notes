package com.example.quartzLearnings;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"com.service","com.jobs","com.commonUtils","com.model","com.scheduler"})
public class QuartzLearningsApplication {

	public static void main(String[] args) {
		SpringApplication.run(QuartzLearningsApplication.class, args);
	}

}
