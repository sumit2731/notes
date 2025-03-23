package com.eazybytes.method.refrence;

public class StaticMethodReference {
    public static void main(String[] args) {
        //way 1
        ArithmeticOperation operation = (a,b) -> {
            int sum = a + b;
            System.out.println(sum);
            return sum;
        };
        operation.performOperation(2,3);

        //way2 - here reuse the logic defined in method
        ArithmeticOperation methodReference = StaticMethodReference::PerformAddition;
        methodReference.performOperation(2,3);
    }

    public static int PerformAddition(int a , int b) {
        int sum = a + b;
        System.out.println(sum);
        return sum;
    }
}
