package com.easybytes.app;

public class MyOuterClass {
    // if we mark this class as private, it can't be accessed from outside
    public static class MyInnerClass {
        public void display() {
            System.out.println("This is an inner class");
        }
    }
}
