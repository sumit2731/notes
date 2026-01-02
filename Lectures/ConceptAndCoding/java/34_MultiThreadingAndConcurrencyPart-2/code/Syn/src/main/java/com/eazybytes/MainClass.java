package com.eazybytes;

public class MainClass {
    public static void main(String[] args) {

        System.out.println("Main method Start");
        SharedResource sharedResource = new SharedResource();

        Thread producerThread = new Thread(() -> {
            System.out.println("Producer thread: " + Thread.currentThread().getName());
            try{
                Thread.sleep(1000);
            } catch (InterruptedException e) {

            }
            sharedResource.addItem();
        });

        Thread consumerThread = new Thread(() -> {
            System.out.println("Consumer thread: " + Thread.currentThread().getName());
            sharedResource.consumeItem();
        });

        producerThread.start();
        consumerThread.start();
        System.out.println("Main thread completed");
    }
}
