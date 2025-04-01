package com.eazybytes.marvel.app;

import com.eazybytes.marvel.base.Vehicle;
import com.eazybytes.marvel.vehicle.Car;

public class TestMethodHiding {

    public static void main(String[] args) {

        Vehicle vehicle = new Car(); // upcasting
        Car car = new Car();

        Vehicle.start(); // 1 = Vehicle starting...
        vehicle.start(); // 2 = Vehicle starting...

        Car.start(); // 3 = Car starting...
        car.start(); // 4 = Car starting...
        ((Vehicle) car).start(); // 5 = Vehicle starting...
//
        vehicle = car; // 6
        /**
         * even now methods of Vehicle will be called because type of vehicle is vehicle
         * so in case of static methods and all fields only static type is considered not run time
         */
        vehicle.start(); // 7 = Vehicle starting...
        ((Car) vehicle).start(); // 8 = Car starting...

    }

}
