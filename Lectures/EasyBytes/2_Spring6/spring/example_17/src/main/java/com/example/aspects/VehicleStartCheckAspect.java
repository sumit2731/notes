package com.example.aspects;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import java.util.logging.Logger;

@Aspect
@Component
@Order(1)
public class VehicleStartCheckAspect {

    private Logger logger = Logger.getLogger(VehicleStartCheckAspect.class.getName());

    /**
     * here Argument is of type JoinPoint becaue here we do not get control to execute the function
     * which we were getting in ProceedingJoinPoint in case of around
     */
    @Before("execution(* com.example.services.*.*(..)) && args(vehicleStarted,..)")
    /**
     * Use this one as it avoids run time exceptions
     */
//@Before("execution(* com.example.services.*.*(..)) && args(boolean, ..)")
    public void checkVehicleStarted(JoinPoint joinPoint, boolean vehicleStarted) throws Throwable {
        if(!vehicleStarted){
            throw new RuntimeException("Vehicle not started");
        }
    }
}
