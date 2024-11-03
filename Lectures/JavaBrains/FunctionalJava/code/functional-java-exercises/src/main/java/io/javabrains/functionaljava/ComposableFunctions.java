package io.javabrains.functionaljava;

import java.util.function.Function;

public class ComposableFunctions {
    public static void main(String[] args) {
        Function<Integer, Integer> increment = x -> x + 1;
        Function<Integer, Integer> doubleIt = x -> x * 2;

        int i = 10;

        Function<Integer, Integer> combine = doubleIt
                .andThen(increment)
                .andThen(doubleIt)
                .andThen(increment);

        System.out.println(combine.apply(10));

        /**
         * Opposite of andThen is compose
         */
        /**
         * Main use case of andThen is with function refrences
         * 
         * Ex - given astring, trim psaces from bith end then convert it into uppercase
         */

        Function<String, String> trimLeading = String::stripLeading;
        Function<String, String> trimEnding = String::stripTrailing;
        Function<String, String> upperCase = String::toUpperCase;

        String name = "   sumeet   ";

        String processedName = trimLeading
                .andThen(trimEnding)
                .andThen(upperCase)
                .apply(name);

        System.out.println(processedName);

        /**
         * Shorterway
         */
        String processedName2 = trimEnding
                .andThen(String::stripLeading)
                .andThen(String::toUpperCase)
                .apply(name);
    }
}
