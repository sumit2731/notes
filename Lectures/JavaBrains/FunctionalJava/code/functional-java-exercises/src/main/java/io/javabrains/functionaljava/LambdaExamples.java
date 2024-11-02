package io.javabrains.functionaljava;

public class LambdaExamples {
    public static void main(String[] args) {
        MathOperation increment = x -> x +1 ;
        int result = increment.operation(10);
        System.out.println("result = " + result);

        MathOperation newLambda = num -> num*2 + 124;
        System.out.println(newLambda.operation(20));

        newLambda = increment;
        System.out.println(newLambda.operation(20));


        SecondMathOperaton secondMathOperaton = x -> x * 2;
        System.out.println(secondMathOperaton.operation(10));

        // This does not work because interface type is different
        // secondMathOperaton = (SecondMathOperaton) increment;
    }
}


interface MathOperation {
    int operation(int x);
}


interface SecondMathOperaton {
    int operation(int x);
}