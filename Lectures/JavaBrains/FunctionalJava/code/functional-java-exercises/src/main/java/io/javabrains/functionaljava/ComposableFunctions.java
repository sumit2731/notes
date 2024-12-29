package io.javabrains.functionaljava;

import java.util.function.Function;

public class ComposableFunctions {
        public static void main(String[] args) {
                Function<Integer, Integer> increment = x -> x + 1;
                Function<Integer, Integer> doubleIt = x -> x * 2;

                int i = 10;

                /**
                 * We want to dounble a number and then increment it. one way to do that is to
                 * create lambda for it.
                 * 
                 */
                /**
                 * way 1 - plus 1 , then double it
                 */
                increment.apply(doubleIt.apply(i));

                /**
                 * Other way is to chain above 2 lambdas togaher
                 * each of these functions have method called andThen, which takes another
                 * function.
                 * 
                 * we have a new lambda, i did nt write this lambda,
                 * this lambda is created by composing 2 existing exiting lambdas togather
                 */
                Function<Integer, Integer> combine = doubleIt
                                .andThen(increment)
                                .andThen(doubleIt)
                                .andThen(increment);

                System.out.println(combine.apply(10));

                /**
                 * Opposite of andThen is compose - but most of time I prefer andThen
                 * because this is how we think, but both of them can get the job done
                 */
                /**
                 * common use case of andThen is with function refrences
                 * 
                 * Let's You have to create a lambda which is a calling a bunch of API calls and
                 * each one of them can be method refrence,it is much easier to string them
                 * togather with andThen rather thn create a block of code which does all that.
                 * this is
                 * popular paradigm and i have seen it many times in code bases.
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

                System.out.println(processedName);
        }
}
