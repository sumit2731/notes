package com.easybytes.app;

//import com.easybytes.model.Employee;
//import com.easybytes.model.Vehicle;

import com.easybytes.model.Class1;
import com.easybytes.model.Employee;
import com.easybytes.model.Vehicle;
import com.easybytes.service.VehicleService;
import com.easybytes.utility.MyConstants;

public class MainClass {
    public static void main(String[] args) {
        Vehicle vehicle = new Vehicle();
        com.easybytes.model.Employee employee = new com.easybytes.model.Employee();
        Employee employee2 = new Employee();
        VehicleService vehicleService = new VehicleService();
        System.out.println(MyConstants.SHIPPING_COST);
        System.out.println(MyConstants.TAX_RATE);
        // Class1 is defined in 2 different packages
        Class1 class1 = new Class1();
        com.easybytes.service.Class1 class2 = new com.easybytes.service.Class1();
        MyOuterClass.MyInnerClass innerClass = new MyOuterClass.MyInnerClass();
        innerClass.display();
    }
}
