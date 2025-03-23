package com.eazybtes.lambda;

public class AnonymousClassDemo {
    public static void main(String[] args) {
        // here we are creating the object of anonymous inner class
        //in a single line class in defined and instantiated
        Hello hello = new Hello() {
            @Override
            public void sayHello() {
                System.out.println("Hello");
            }
        };
        //way 1
        process(hello);
        //way 2
        process(new Hello() {
            @Override
            public void sayHello() {
                System.out.println("Hello");
            }
        });
    }

    public static void process(Hello h) {
        h.sayHello();
    }
}
