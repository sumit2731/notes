package com.eazybtes.lambda;

import java.util.Arrays;
import java.util.List;
import java.util.function.Consumer;

public class ConsumerDemo {
    public static void main(String[] args) {
        Consumer<String> convertAndDisplay = s -> System.out.println(s.toUpperCase());
        convertAndDisplay.accept("abc");

        //realworldUsecase
        Consumer<Integer> squareOf = num -> System.out.println(num * num);
        List<Integer> numberList = Arrays.asList(1,2,3,4,5,6,7,8,9,10);
        numberList.forEach(squareOf);

        //chaining
        Consumer<String> appendInput = input -> System.out.println("Hello " + input);
        appendInput.andThen(convertAndDisplay).accept("Lambda Expression");
    }
}
