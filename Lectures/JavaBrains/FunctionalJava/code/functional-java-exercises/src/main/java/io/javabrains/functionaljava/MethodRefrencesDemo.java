package io.javabrains.functionaljava;

import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.function.BiPredicate;
import java.util.function.Supplier;
import java.util.function.Function;

/**
 * These are code examples of 
 */
public class MethodRefrencesDemo {
    public static void main(String[] args) {
        Supplier<Double> random = () -> Math.random();
        /**
         * Method refrence is not better than above syntx, its just prefrence
         */
        Supplier<Double> random2 = Math::random;

        /* 
         * lambda that returns the name of person
         */
        Function<Person, String> getName = (p) -> p.getName();
        Function<Person, String> getName2 = Person::getName;

        Person p1 = new Person("Foo", 25);
        Person p2 = new Person("Foo", 25);

        /**
         * lambda expression that checks if 2 peron instnaces are equal or not
         */

        BiPredicate<Person, Person> isEqual = (per1, per2) -> per1.equals(per2);
        BiPredicate<Person, Person> isEqual2 =  Person::equals;

        /**
         * lambda expression that accepts a list abd returns the length of list
         */
        Function<List<String>, Integer> getCount = list -> list.size();
        Function<List<String>, Integer> getCount2 = List::size;

        /*
         * A lambda that receives a list and dedupes it and returns collection of string. here we are using
         * constructor. we can also replace it with method refrence. here method is constructor.
         * 
         * Turns out that constructor is also treated as a method, special method afterall. name of mehod is new.
         * Functional refrence can be used for constructor also, if all you are doing is passing input argument
         * to constructor
         */

        Function<List<String>, Collection<String>> deDupe = list -> new HashSet<>(list);
        Function<List<String>, Collection<String>> deDupe2 =  HashSet::new;

    }
}
class Person {
    private String name;
    private int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public int getAge() {
        return age;
    }
    public void setAge(int age) {
        this.age = age;
    }
     
}