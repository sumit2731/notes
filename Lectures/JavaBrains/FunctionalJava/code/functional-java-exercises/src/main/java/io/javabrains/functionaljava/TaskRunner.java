package io.javabrains.functionaljava;

import java.time.LocalDateTime;

public class TaskRunner {
    public static void runner(Task task) {
        System.out.println("Start: " + LocalDateTime.now());
        task.run();
        System.out.println("End: " + LocalDateTime.now());
    }

    public static void main(String[] args) {
        Task task = new HelloWorldTask();
        TaskRunner.runner(task);
    }
}

interface Task {
    void run();
}

class HelloWorldTask implements Task {

    @Override
    public void run() {
        System.out.println("Hello World");
    }
}