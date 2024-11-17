package io.javabrains.functionaljava;

import java.time.LocalDateTime;
import java.util.function.BiConsumer;
import java.util.function.Consumer;
import java.util.function.UnaryOperator;

public class LambdaComposability {
    /**
     * It takes a Operation to run and Logs start time and endTime.
     * 
     * we want to define this also as lambda instaed of sttaic function.
     * see version 1 of logger
     */
    public static void operationLogger(UnaryOperator<Integer> operator) {
        System.out.println("Start: " + LocalDateTime.now());
        operator.apply(10);
        System.out.println("End: " + LocalDateTime.now());
    }

    public static void main(String[] args) {
        /**
         * Version 2
         */
        // Runnable logStart = () -> System.out.println("Start: " +
        // LocalDateTime.now());
        // Runnable logEnd = () -> System.out.println("End: " + LocalDateTime.now());

        /**
         * Version 3
         * 
         * I am reusing the fucntionality,all these are individual smaller pieces , I am
         * composing them to form bigger pieces. on elmabda class another lambda, which
         * then calls another one and so on.
         */
        Consumer<String> logMessage = (msg) -> System.out.println(msg + ": " + LocalDateTime.now());
        Runnable logStart = () -> logMessage.accept("Start");
        Runnable logEnd = () -> logMessage.accept("End");

        UnaryOperator<Integer> increment = x -> x + 1;

        BiConsumer<UnaryOperator<Integer>, Integer> logger = (operator, number) -> {

            /**
             * Verion 1 - labmda that takes a anther labmda and number, logs time
             * before and after executing that lambda
             */

            /*
             * System.out.println("Start: " + LocalDateTime.now());
             * operator.apply(number);
             * System.out.println("End: " + LocalDateTime.now());
             */

            /**
             * Version 2
             * 
             * we can create lambda exoression for logging state as well
             */

            // logStart.run();
            // operator.apply(number);
            // logEnd.run();

            /**
             * Version 3
             */
            logStart.run();
            operator.apply(number);
            logEnd.run();
        };
        /**
         * we can create lambda's inline passe them to functions directly.
         * although our labmda return a number, we can assign them to consumer
         */
        logger.accept(x -> x + 1, 20);
        logger.accept(x -> x * 100, 42);
    }
}
