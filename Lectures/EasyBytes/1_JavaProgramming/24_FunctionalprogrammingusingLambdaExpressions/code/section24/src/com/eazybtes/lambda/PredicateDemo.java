package com.eazybtes.lambda;

import java.util.Arrays;
import java.util.List;
import java.util.function.Predicate;
import java.util.stream.Collectors;

public class PredicateDemo {
    public static void main(String[] args) {
        Predicate<Integer> isEven = num -> num%2 == 0;
        Predicate<Integer> isGreaterThan50 = num -> num > 50;
        //test
        System.out.println(isEven.test(2));
        System.out.println(isGreaterThan50.test(20));
        //and
        Predicate<Integer> newPredicate = isEven.and(isGreaterThan50);
        System.out.println(newPredicate.test(70));

        //negate
        Predicate<Integer> isOdd = isEven.negate();
        System.out.println(isOdd.test(63));

        //not
        Predicate<Integer> isOdd2 = Predicate.not(isEven);
        System.out.println(isOdd2.test(63));


        //isEqual
        Predicate<String> checkEquality = Predicate.isEqual("Sumeet");
        System.out.println(checkEquality.test("Sood"));

        //using predicates in reallife
        List<Integer> list = Arrays.asList(1,2,3,4,5,6,7,8);
        List<Integer> evenList = list.stream().filter(isEven).collect(Collectors.toList());
        System.out.println(evenList);


    }
}
