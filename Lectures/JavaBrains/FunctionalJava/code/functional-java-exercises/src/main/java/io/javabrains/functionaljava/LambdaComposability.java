package io.javabrains.functionaljava;

import java.time.LocalDateTime;
import java.util.function.BiConsumer;
import java.util.function.Consumer;
import java.util.function.UnaryOperator;

public class LambdaComposability {
    /**
     * 
     * @Version 1
     * 
     *          It takes a Operation to run and Logs start time and endTime.
     * 
     *          we want to define this also as lambda instead of static function.
     *          see version 1 of logger
     */
    public static void operationLogger(UnaryOperator<Integer> operator) {
        System.out.println("Start: " + LocalDateTime.now());
        operator.apply(10);
        System.out.println("End: " + LocalDateTime.now());
    }

    public static void main(String[] args) {
        /**
         * Version 1
         */
        UnaryOperator<Integer> increment = x -> x + 1;
        operationLogger(increment);

        /**
         * Version 2 - we want operationLogger to be lambda nota static method
         */

        BiConsumer<UnaryOperator<Integer>, Integer> logger = (operation, number) -> {
            System.out.println("Start: " + LocalDateTime.now());
            operation.apply(number);
            System.out.println("End: " + LocalDateTime.now());
        };
        logger.accept(x -> x + 1, 20);
        logger.accept(x -> x * 100, 42);

        /**
         * Version 3 - we can make printing of statement also a lambda
         */

        Runnable logStart = () -> System.out.println("Start: " + LocalDateTime.now());
        Runnable logEnd = () -> System.out.println("End: " + LocalDateTime.now());
        BiConsumer<UnaryOperator<Integer>, Integer> logger2 = (operation, number) -> {
            logStart.run();
            operation.apply(number);
            logEnd.run();
        };

        /**
         * Version 4 - Instead of defining separate lambdas for start and end time, we
         * can define a common lambda
         */

        Consumer<String> logMessage = (msg) -> System.out.println(msg + ": " + LocalDateTime.now());
        Runnable logStart2 = () -> logMessage.accept("Start");
        Runnable logEnd2 = () -> logMessage.accept("End");
        BiConsumer<UnaryOperator<Integer>, Integer> logger3 = (operation, number) -> {
            logStart2.run();
            operation.apply(number);
            logEnd2.run();
        };

    }

}
