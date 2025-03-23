package com.eazybtes.lambda;

import java.util.function.Function;

public class FunctionDemo {
    public static void main(String[] args) {
        Function<String,String> convertStr = input -> input.toUpperCase();
        System.out.println(convertStr.apply("abc"));

        Function<String,Integer> getStrLength = input -> input.length();
        System.out.println(getStrLength.apply("abc"));

        Function<String,String> sameValue = Function.identity();
        System.out.println(sameValue.apply("HI Sumeet"));

        //composing function

        Function<Integer,Integer> doubleValue = (num) -> num*2;
        Function<Integer,Integer> addThree = num -> num+3;

        Function<Integer,Integer> o1 = doubleValue.andThen(addThree);
        Function<Integer,Integer> o2 = doubleValue.compose(addThree);
        System.out.println(o1.apply(5));
        System.out.println(o2.apply(5));
     }
}
