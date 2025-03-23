package com.eazybtes.lambda;

import java.util.function.Function;
import java.util.function.UnaryOperator;

public class UnaryOperatorDemo {
    public static void main(String[] args) {
        UnaryOperator<String> convertStr = input -> input.toUpperCase();
        System.out.println(convertStr.apply("abc"));

        UnaryOperator<String> sameValue = UnaryOperator.identity();
        System.out.println(sameValue.apply("HI Sumeet"));

        //composing function

        UnaryOperator<Integer> doubleValue = (num) -> num*2;
        UnaryOperator<Integer> addThree = num -> num+3;

        Function<Integer,Integer> o1 = doubleValue.andThen(addThree);
        Function<Integer,Integer> o2 = doubleValue.compose(addThree);
        System.out.println(o1.apply(5));
        System.out.println(o2.apply(5));
    }
}
