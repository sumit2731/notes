package com.eazybytes.object.demo;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;

public class HashCodeEqualsDemo {

    public static void main(String[] args) throws Exception  {
        Person p1 = new Person("John", 25, 'M', 564323456);
        Person p2 = new Person("John", 25, 'M', 564323456);
        System.out.println(p1.hashCode());
        System.out.println(p2.hashCode());
        System.out.println(p1.equals(p2)); // false
        System.out.println(p1);
        System.out.println(p2);

    }

}