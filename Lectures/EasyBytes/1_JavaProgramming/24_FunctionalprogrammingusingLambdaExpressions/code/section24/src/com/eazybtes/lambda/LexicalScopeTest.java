package com.eazybtes.lambda;

public class LexicalScopeTest {
    public static void main(String[] args) {
        String input = "abc";
        /**
         * you cannot use inout as variable with this nam already exists in this scope.
         * but you
         */
//        Printer printer = (input) -> System.out.println(input);
        Printer printer = (input1) -> System.out.println(input1);
//        After lambda expression you can use variables of same name
        String input1 = "sood";
        System.out.println(input1);
    }
}
