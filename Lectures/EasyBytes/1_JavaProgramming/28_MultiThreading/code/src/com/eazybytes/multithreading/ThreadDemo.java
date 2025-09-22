package com.eazybytes.multithreading;

public class ThreadDemo {

    public static void main(String[] args) {
        Thread thread = new Thread();
        thread.start();

        Thread thread1 = new Thread(() -> System.out.println("Hello from Java Thread"));
        /*
        * By calling start, your thread will enter into the race of getting the CPU time from
        * the operating system. JVM is going to request the operating system to schedule this
        * thread to get a CPU time, only after this function is called.this can be called only
        * once, calling again gives run time exception.this lines only schedules the execution, then control
        * goes to next line, here outer thread does not wait to finish the execution of inner thread.
        * their are ways to do that, which we will see later
        * */
        thread1.start();

        Runnable runnable = () -> System.out.println("Hi from Java Thread");
        Thread thread2 = new Thread(runnable);
        thread2.start();

        HelloThread thread3 = new HelloThread();
        thread3.start();

        Thread thread4 = new Thread(new HelloThread1());
        thread4.start();

        Thread thread5 = new Thread(Hello::sayHello);
        thread5.start();


        System.out.println("Hello from Main Thread");
    }

}
