package com.eazybytes.marvel.app;

import com.eazybytes.marvel.animals.Cat;
import com.eazybytes.marvel.animals.Dog;
import com.eazybytes.marvel.base.Animal;

public class DownCastingDemo {

    public static void main(String[] args) {
        Animal anm;
        Dog dog = new Dog();
        anm = dog; // upcasting
        /*
        * We need to very sure that anm is holding object of Dog type, otherwise we will get exception
        * ClassCastException
        * */
        dog = (Dog) anm; // downcasting
        AnimalUtility.performAction(dog);
        // perform downcasting safely
        if (anm instanceof Cat ) {
            Cat cat = (Cat) anm;
        }

    }

}