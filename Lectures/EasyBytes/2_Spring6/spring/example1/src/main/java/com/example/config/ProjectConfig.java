package com.example.config;

import com.example.beans.Vehicle;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/*
Spring @Configuration annotation is part of the spring core framework.

The purpose of this @configuration annotation inside the spring framework is
this will let my IOC container to scan all the content of this class(during
startup or during initialization of IOC) because this is an indication to the
spring framework that the developer has done some changes(this class has @Bean
definition methods) which will result into creating beans.

Spring container will process this class and generate Spring beans that will
be used in application

* */
@Configuration
public class ProjectConfig {


    /*
    @Bean annotation, which lets Spring know that it needs to call
     this method when it initializes its context, it converts returned value into
     bean and adds it to the context.

     name of bean inside context is name of method
    * */
    @Bean
    Vehicle vehicle() {
        var veh = new Vehicle();
        veh.setName("Audi 8");
        return veh;
    }

    /*
   The method names usually follow verbs notation.But for methods
   which we will use to create beans, can use nouns as names.
   This will be a good practise as the method names will become
   bean names inside spring context.
   * */
    @Bean
    String hello() {
        return "Hello World";
    }

    @Bean
    Integer number() {
        return 16;
    }
}
