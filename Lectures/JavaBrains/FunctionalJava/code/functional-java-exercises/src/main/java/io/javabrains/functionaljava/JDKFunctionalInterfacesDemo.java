package io.javabrains.functionaljava;

import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.function.Supplier;
import java.util.function.UnaryOperator;
import java.util.function.BinaryOperator;

public class JDKFunctionalInterfacesDemo {
    public static void main(String[] args) {
        
        Function<Integer, Integer> myFunc = x -> x * 2;
        myFunc.apply(2); // in order to call lambda , we need to call single abstract method in inerface

        //operators
        UnaryOperator<Integer> myFunc2 = x -> x * 2;
        
        Function<Integer, String> f2 = num -> "Valu is  " + num;

        Consumer<String> greeting = name -> System.out.println("Hello, " + name);
        greeting.accept("Sumeet");

        Supplier<Double> random = () -> Math.random();
        random.get();

        Predicate<Integer> isEven = num -> (num % 2) == 0;
        isEven.test(5);
        
        Function<Integer, Boolean> isEven2 = num -> (num % 2) == 0;
        isEven2.apply(10);

    }
}
