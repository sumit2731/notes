package com.eazybytes.multithreading.WaitNotify;

public class SharedResource {
    /**
     * Using these variable only the Producer is going to produce a value and store it inside these int variable.
     * And from these variable only the Consumer thread it is going to read the data.
     */
    private int data;
    /**
     *  With the help of this boolean I'm going to control the logic of Producer and Consumer.
     *
     *  So whenever my Producer want to produce a new value,it needs to check whether the is empty is true.If the is empty is true,
     *  that means the Consumer consume the value and Producer can generate a new value.
     *
     *  On the Consumer side, the consumer should never try to read the value whenever the isEmpty() is true.It should only try to
     *  read the value when the is empty is false.
     *
     *
     */
    private boolean isEmpty = true;

    // Producer method
    synchronized void produce(int value) {
        /**
         * why we need loop here?
         * check Spurious Wake-up in my notes
         */
        while (!isEmpty) {
            try {
                // Buffer is not empty, wait for the consumer to consume
                /**
                 * This means thread will be in waiting state, It will not ask the OS or CPU for CPU time.
                 * Instead it will sit idle for condition to meet
                 *
                 * Thread will come out from this state until another thread invokes notify() or notifyAll()
                 * method for this object.
                 *
                 */
                wait();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

        // Produce an item
        data = value;
        isEmpty = false;
        System.out.println("Produced: " + value);

        /**
         * Other consumer thread which is waiting for this peoducer thread to complete its business logic,
         * It is going to wake up and it is going to start asking the CPU and the operating system to provide some
         * CPU time so that it can start executing the Consumer logic.
         */
        // Notify the waiting consumer
        notify();
    }

    // Consumer method
    synchronized int consume() {
        while (isEmpty) {
            try {
                // Buffer is empty, wait for the producer to produce
                wait();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        // Consume the item
        int consumedData = data;
        isEmpty = true;
        System.out.println("Consumed: " + consumedData);

        // Notify the waiting producer
        notify();

        return consumedData;
    }


}
