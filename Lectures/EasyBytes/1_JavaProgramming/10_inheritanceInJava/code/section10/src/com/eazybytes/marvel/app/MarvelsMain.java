package com.eazybytes.marvel.app;

import com.eazybytes.marvel.base.Person;
import com.eazybytes.marvel.heros.IronMan;

public class MarvelsMain {

    public static void main(String[] args) {
        IronMan ironMan = new IronMan();
        /*
        * here we cannot access protected members of Person class
        * because MarvelsMain is in another package and is not extending Person class
        */
//        System.out.println(ironMan.name);
        ironMan.walk();
        ironMan.eat("Pasta");
        ironMan.sleep();
        ironMan.usePower();

        Person person = new Person();
        int hc = person.hashCode();
        String str = person.toString();
    }

}