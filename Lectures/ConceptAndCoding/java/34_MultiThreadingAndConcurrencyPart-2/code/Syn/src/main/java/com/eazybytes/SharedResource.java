package com.eazybytes;

public class SharedResource {
    boolean itemAvailable = false;

    public synchronized void addItem() {
        itemAvailable = true;
        System.out.println("Item added by : " + Thread.currentThread().getName() + " and notifying all threads which are waiting");
        notifyAll();
    }

    public synchronized  void consumeItem() {
        System.out.println("Consume Item method invoked by : " + Thread.currentThread().getName());

        /**
         * here we are using while loop because sometime thread can wakeup even if no one has called notify,
         * so we need to check wherever we are waiting for is ready or not and then start then working
         */
        while(!itemAvailable) {
            try {
                System.out.println("Thread " + Thread.currentThread().getName() + " is waiting now");
                wait();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        System.out.println("Item consumed by : " + Thread.currentThread().getName());
        itemAvailable = false;

    }
}
