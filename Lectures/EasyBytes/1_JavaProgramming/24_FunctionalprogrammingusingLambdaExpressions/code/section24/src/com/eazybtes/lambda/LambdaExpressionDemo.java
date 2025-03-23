package com.eazybtes.lambda;

public class LambdaExpressionDemo {
    public static void main(String[] args) {
        //way 1
        Hello hello = () -> System.out.println("Hello");
        process(hello);
        //way 2
        process(() -> System.out.println("Hello World"));

        ArithmeticOperation a1 = (a,b) -> a+b;
        a1.operation(10,20);
    }

    public static void process(Hello h) {
        h.sayHello();
    }
}
