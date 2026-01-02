package com.eazybytes.ReadWriteLock;

import java.util.concurrent.locks.ReadWriteLock;
import java.util.concurrent.locks.ReentrantLock;

public class SharedResource {

    boolean isAvailable = false;

    public void producer(ReadWriteLock lock) {
        try {
            lock.readLock().lock();
            System.out.println("Read Lock acquired by: " + Thread.currentThread().getName());
            Thread.sleep(8000);
        }
        catch (InterruptedException e) {}
        finally {
            lock.readLock().unlock();
            System.out.println("Lock released by: " + Thread.currentThread().getName());
        }
    }

    public void consume(ReadWriteLock lock) {
        try {
            lock.writeLock().lock();
            System.out.println("write Lock acquired by: " + Thread.currentThread().getName());
            isAvailable = false;
        }
        catch (Exception e) {}
        finally {
            lock.writeLock().unlock();
            System.out.println("Lock released by: " + Thread.currentThread().getName());
        }
    }
}
