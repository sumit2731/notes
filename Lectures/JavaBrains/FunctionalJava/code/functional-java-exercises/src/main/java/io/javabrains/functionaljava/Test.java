package io.javabrains.functionaljava;

import java.util.function.Supplier;

public class Test {

    public static void main(String[] args) {
        String str = "Hello, World!";

        Supplier<String> lambda = () -> str.toUpperCase(); // Using lambda
        Supplier<String> methodRef = str::toUpperCase; // Using method reference

        System.out.println(lambda.get()); // Output: HELLO, WORLD!
        System.out.println(methodRef.get()); // Output: HELLO, WORLD!
    }

}
