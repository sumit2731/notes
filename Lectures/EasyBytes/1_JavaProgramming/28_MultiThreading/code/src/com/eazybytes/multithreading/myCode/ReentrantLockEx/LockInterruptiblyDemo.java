package com.eazybytes.multithreading.myCode.ReentrantLockEx;

import java.util.concurrent.locks.ReentrantLock;

public class LockInterruptiblyDemo {

    private static final ReentrantLock lock1 = new ReentrantLock();
    private static final ReentrantLock lock2 = new ReentrantLock();

    public static void main(String[] args) throws InterruptedException {

        Thread t1 = new Thread(() -> {
            try {
                System.out.println("Thread 1: trying to acquire lock1...");
                lock1.lockInterruptibly();
                System.out.println("Thread 1: acquired lock1");

                Thread.sleep(50); // simulate some work

                System.out.println("Thread 1: trying to acquire lock2...");
                lock2.lockInterruptibly();
                System.out.println("Thread 1: acquired lock2");

                System.out.println("Thread 1: acquired both locks, performing work...");
                Thread.sleep(200);
                System.out.println("Thread 1: work done.");

            } catch (InterruptedException e) {
                System.out.println("Thread 1: interrupted to avoid deadlock.");
            } finally {
                if (lock1.isHeldByCurrentThread()) {
                    lock1.unlock();
                    System.out.println("Thread 1: released lock1");
                }
                if (lock2.isHeldByCurrentThread()) {
                    lock2.unlock();
                    System.out.println("Thread 1: released lock2");
                }
            }
        });

        Thread t2 = new Thread(() -> {
            try {
                System.out.println("Thread 2: trying to acquire lock2...");
                lock2.lockInterruptibly();
                System.out.println("Thread 2: acquired lock2");

                Thread.sleep(50); // simulate some work

                System.out.println("Thread 2: trying to acquire lock1...");
                lock1.lockInterruptibly();
                System.out.println("Thread 2: acquired lock1");

                System.out.println("Thread 2: acquired both locks, performing work...");
                Thread.sleep(200);
                System.out.println("Thread 2: work done.");

            } catch (InterruptedException e) {
                System.out.println("Thread 2: interrupted to avoid deadlock.");
            } finally {
                if (lock1.isHeldByCurrentThread()) {
                    lock1.unlock();
                    System.out.println("Thread 2: released lock1");
                }
                if (lock2.isHeldByCurrentThread()) {
                    lock2.unlock();
                    System.out.println("Thread 2: released lock2");
                }
            }
        });

        t1.start();
        t2.start();

        // Give both threads some time to start and potentially deadlock
        Thread.sleep(500);

        // Interrupt one thread to break the potential deadlock
        System.out.println("\nMain thread: interrupting Thread 2 to avoid deadlock...\n");
        t2.interrupt();

        // Wait for both threads to finish
        t1.join();
        t2.join();

        System.out.println("\nMain thread: both threads have finished execution.");

    }
}