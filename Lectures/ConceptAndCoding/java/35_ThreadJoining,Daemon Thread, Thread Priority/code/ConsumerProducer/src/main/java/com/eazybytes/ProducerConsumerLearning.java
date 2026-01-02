package com.eazybytes;

public class ProducerConsumerLearning {
    public static void main( String[] args ) {
        SharedResource sharedResource = new SharedResource(3);

        Thread producerThread = new Thread(() -> {
            try {
                for(int i = 1; i <=6; i++) {
                    sharedResource.produce(i);
                }
            } catch (InterruptedException e) {
                //handle exception here
            }
        });

        Thread consumerThread = new Thread(()-> {
            try {
                for(int i = 1 ; i <= 6; i++) {
                    sharedResource.consume();
                }
            }
            catch (InterruptedException e) {
                // handle exception here
            }

        });

        producerThread.start();
        consumerThread.start();
    }
}
