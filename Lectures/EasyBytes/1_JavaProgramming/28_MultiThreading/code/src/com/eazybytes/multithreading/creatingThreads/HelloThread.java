package com.eazybytes.multithreading.creatingThreads;

public class HelloThread extends Thread {

    @Override
    public void run () {
        System.out.println("Hello from HelloThread class " +
                " which extends Thread");
    }

}
