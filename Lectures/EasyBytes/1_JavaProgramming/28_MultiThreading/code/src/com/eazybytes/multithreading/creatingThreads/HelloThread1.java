package com.eazybytes.multithreading.creatingThreads;

public class HelloThread1 implements Runnable {

    @Override
    public void run () {
        System.out.println("Hello from HelloThread1 class " +
                " which implements Runnable");
    }

}
