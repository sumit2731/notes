package com.example.main;

import com.example.config.ProjectConfig;
import com.example.model.Song;
import com.example.services.VehicleServices;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class Example17 {

    public static void main(String[] args) {
        var context = new AnnotationConfigApplicationContext(ProjectConfig.class);
        VehicleServices vehicleServices = context.getBean(VehicleServices.class);
        /**
         * Here type differs before and after you introduce AOP
         * After AOP this is proxy
         */
        System.out.println(vehicleServices.getClass());
//        Song song = new Song();
//        song.setTitle("Blank Space");
//        song.setSingerName("Taylor Swift");
        boolean vehicleStarted = true;
        String moveVehicleStatus = vehicleServices.moveVehicle(vehicleStarted);
//        String playMusicStatus = vehicleServices.playMusic(vehicleStarted,song);
//        String applyBrakeStatus = vehicleServices.applyBrake(vehicleStarted);
    }
}
