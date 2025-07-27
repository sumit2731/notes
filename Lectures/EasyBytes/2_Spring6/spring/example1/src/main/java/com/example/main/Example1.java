package com.example.main;

import com.example.beans.Vehicle;
import com.example.config.ProjectConfig;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class Example1 {
    /**
     * Now I need to write a main class that will initialize the IOC container or spring context.
     * during the initialization process, My framework is going to look for the configuration classes
     * like project config
     */
    public static void main(String[] args) {
        /**
         * This wnt be tracked inside spring container
         */
        Vehicle vehicle = new Vehicle();
        vehicle.setName("Honda City");
        System.out.println("Vehicle name from non-spring context is: " + vehicle.getName());
        /*
   

        Now, in order to track all these beans that we have mentioned here, first we need to initialize the
        spring IOC container or Spring Context. for the same,we need to create an object of AnnotationConfigApplicationContext
        and to this class constructor we need to pass the where we have defined all our configurations.During the initialization
        we are telling to the spring framework, Please consider all the configurations that I have mentioned inside the project
        config class.

        AnnotationConfigApplicationContext is implementation of ApplicationContext. we are using it
        because we aredoing all configurations with help of annotations.if we have done configuration
        via XML then we need to use different class.

        this line initializes the IOC Container and Context.
        * */
        var context = new AnnotationConfigApplicationContext(ProjectConfig.class);

        /**
         * And to this get bean method we can send what is the data type of our bean
         * The data type of vehicle bean is vehicle.class.It will give be bean maintained
         * by IOC container, which is of this data type
         */
        Vehicle veh = context.getBean(Vehicle.class);
        System.out.println("Vehicle name from Spring Context is: " + veh.getName());

        /*
        We don’t need to do any explicit casting while fetching a bean from context.
        Spring is smart enough to look for a bean of the type you requested in its context.
        If such a bean doesn’t exist,Spring will throw an exception.
        * */
        String hello = context.getBean(String.class);
        System.out.println("String value from Spring Context is: " + hello);
        Integer num = context.getBean(Integer.class);
        System.out.println("Integer value from Spring Context is: " + num);

    }
}
