package com.eazybytes.method.refrence;

import java.util.Arrays;
import java.util.List;
import java.util.function.Function;

public class ClassMethodReference {
    public static void main(String[] args) {
        var departmentList = List.of("Supply","HR","Sales", "Marketing");
        departmentList.forEach(deparment -> System.out.println(deparment));
        //see lecture notes
        departmentList.forEach(System.out::println);

        //Example from chatGPT
        List<String> names = Arrays.asList("Alice", "bob", "Charlie", "dave");
        /**
         * Using method reference for instance method (ClassName::instanceMethod)
         *
         * String::compareToIgnoreCase is interpreted by the compiler to mean that the first string will have its compareToIgnoreCase
         * method called, passing the second string as an argument.
         *
         * Even if no second argument is heir firstArgument will be used as inastance on which instance method will be called
         *
         * This generates a lambda
         */
        //
        names.sort(String::compareToIgnoreCase);
        System.out.println(names);

        //it can also be used when instance method does not expect any other parameter
        Function<String, String> substringFunctionMethodReference = String::toUpperCase;
        System.out.println(substringFunctionMethodReference.apply("example"));
    }
}
