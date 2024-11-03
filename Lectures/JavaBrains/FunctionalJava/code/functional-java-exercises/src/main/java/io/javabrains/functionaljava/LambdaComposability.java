package io.javabrains.functionaljava;

import java.time.LocalDateTime;
import java.util.function.BiConsumer;
import java.util.function.Consumer;
import java.util.function.UnaryOperator;

public class LambdaComposability {

    public static void operationLogger(Task task) {
        System.out.println("Start: " + LocalDateTime.now());
        task.run();
        System.out.println("End: " + LocalDateTime.now());
    }

    public static void main(String[] args) {

        Consumer<String> logMessage = (msg) -> System.out.println(msg + ": " + LocalDateTime.now());
        Runnable logStart = () -> logMessage.accept("Start");
        Runnable logEnd = () -> logMessage.accept("End");

        UnaryOperator<Integer> increment = x -> x + 1;

        BiConsumer<UnaryOperator<Integer>, Integer> logger = (operator, number) -> {
            logStart.run();
            operator.apply(number);
            logEnd.run();
        };

        logger.accept(x -> x = 1, 20);
        logger.accept(x -> x * 100, 42);
    }
}
