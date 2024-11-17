package io.javabrains.functionaljava;

import java.util.function.Function;

public class ScopesProblem {
    /**
     * without closure
     */
    public static int counter() {
        int count = 0;
        Function<Integer, Integer> increment = x -> count + 1;
        return increment.apply(count);
    }

    /**
     * with clousre
     */
    public static Function<Integer, Integer> counter2() {
        int count = 0;
        Function<Integer, Integer> increment = x -> count + 1;
        /**
         * we get error if we try to modify the the variable which is defined outside
         * function scope
         * but refrenced in lambda.we cannot modify thtaht varible inside as well as
         * outside lambda
         */
        // Function<Integer, Integer> increment = x -> {
        // count++;
        // return count + 1;
        // };
        // count++;
        return increment;
    }

    public static void main(String[] args) {
        System.out.println(ScopesProblem.counter());
        Function<Integer, Integer> counter = ScopesProblem.counter2();
        System.out.println(counter.apply(0));
    }
}
