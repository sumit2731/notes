package io.javabrains.functionaljava;

import java.time.LocalDateTime;

public class TaskRunner2 {
    public static void runner(Task2 task) {
        System.out.println("Start: " + LocalDateTime.now());
        task.run();
        System.out.println("End: " + LocalDateTime.now());
    }

    public static void main(String[] args) {
        // Task task = new HelloWorldTask();
        Task2 task = () -> System.out.println("Hello World");
        TaskRunner2.runner(task);
        /* 
         * This is alternate syntax for passing lambda expression
         * you do not need to create a instance
         */
        TaskRunner2.runner(() -> System.out.println("Hello World"));
        /**
         * Similar thing can also be done by Announymous Classes
         * we are passing  a instance of Task2 to runner method. we do not need to create new class
         * to get instnace of interface, we can just implement it inline. so rather than passing labmda
         * we are passing actual instance.
         * 
         * Problem with this -
         *  a)very verbose, we just are passing one line, for that this is very verbose.
         *  b)Concept is not very different from having a separate class.we have implmentation of
         *      interface that we are passing to method.you are not passing behaiour, you are passing a
         *      thing with a behaviour.behind the scene compiler needs to do same stuff that it does with 
         *      normal class. 
         *    First when compiler runs, it compiles it down to a class.when run time runs it calls the
         *    constructor,it goes through all the process of creating a  new object.none of that happens when
         *    using lambdas.it not only less verbose but also more efficient.
         */
        TaskRunner2.runner(new Task2() {
            @Override
            public void run() {
                System.out.println("Hello World");
            }
        });
    }
}
/**
 * @FunctionalInterface
 * Only single abstract method is allowed`
 * If more than 1 sabstract method is allowed then it wnt know with which method it should map
 * lambda expression. however defulat methods are allowed
 * 
 * If this had more than 1 abstract method, then error comes at place where it is used to type lambda.
 * using this annotaion, error is thrown here itself
 */
@FunctionalInterface
interface Task2 {
    void run();
    // int run2();
    /**
     * DEfault methods are allowed in Functional Interafces
     */
    // default int foo() {
    //     return 1;
    // }
}

// class HelloWorldTask2 implements Task2 {

//     @Override
//     public void run() {
//         System.out.println("Hello World");
//     }
// }