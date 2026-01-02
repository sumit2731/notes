package com.eazybytes;

import java.util.LinkedList;
import java.util.Queue;

public class SharedResource {
    private Queue<Integer> sharedBuffer;
    private int bufferSize;

    public SharedResource(int bufferSize) {
        sharedBuffer = new LinkedList<>();
        this.bufferSize = bufferSize;
    }

    public synchronized void produce(int value) throws InterruptedException  {
        while(sharedBuffer.size() == bufferSize) {
            System.out.println("Buffer is full, waiting for consumer to consume");
            wait();
        }
        sharedBuffer.add(value);
        System.out.println("Produced: " + value);
        notifyAll();
    }

    public synchronized int consume() throws InterruptedException {
        while(sharedBuffer.isEmpty()) {
            System.out.println("Buffer is empty, Consumer is waiting for producer");
            wait();
        }
        int value = sharedBuffer.poll();
        System.out.println("Consumed: " + value);
        notifyAll();
        return value;
    }
}
