package io.javabrains.functionaljava;

import java.util.ArrayList;
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
         * Method refrence is not better than above syntx, its just matter of prefrence
         */
        Supplier<Double> random2 = Math::random;

        Function<Person, String> getName = (p) -> p.getName();
        /*
         * We can use refrences on our own classes also
         * 
         * Here we are refrencing the getName meythod on Perso class, since labda takes
         * instnace of Person class as argument it is obvious that this method needs to
         * call over that instnace.It is not sttaic for sure.If it would have been
         * sttaic then questions would have been what needs to be passed to it.here it
         * is very obvious.
         * 
         * Since it is taking instance of Person class t calls functions on that
         */
        Function<Person, String> getName2 = Person::getName;

        Person p1 = new Person("Foo", 25);
        Person p2 = new Person("Foo", 25);

        /**
         * NotCoveredInCourse
         * 
         * This is example form Chat GPT, here we are using method
         * refrence on instnace of string, not on parameter
         */
        String str = "Hello, World!";
        Supplier<String> methodRef = str::toUpperCase; // Using method reference

        BiPredicate<Person, Person> isEqual = (per1, per2) -> per1.equals(per2);
        /**
         * here you can mention Object::equlas also. It does;nt matter what you mention
         * because it is going to run that on instnace of Person class
         */
        BiPredicate<Person, Person> isEqual2 = Person::equals;

        /**
         * lambda expression that accepts a list abd returns the length of list
         */
        Function<List<String>, Integer> getCount = list -> list.size();
        /**
         * ArrayList implements List interface, so on right handside you can use
         * List or ArrayList
         */
        Function<ArrayList<String>, Integer> getCount2 = List::size;

        /*
         * A lambda that receives a list and dedupes it (removes duplicates)
         * We do this by creating HashSet from List.
         * 
         * here we are using constructor. we can also replace it with method refrence.
         * here method is constructor.
         * 
         * Turns out that constructor is also treated as a method, special method
         * afterall. name of mehod is new.
         * Functional refrence can be used for constructor also, if all you are doing is
         * passing input argument to constructor and returning the result
         */

        Function<List<String>, Collection<String>> deDupe = list -> new HashSet<>(list);
        /**
         * Syntax for using consttructor in method refrences
         */
        Function<List<String>, Collection<String>> deDupe2 = HashSet::new;

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