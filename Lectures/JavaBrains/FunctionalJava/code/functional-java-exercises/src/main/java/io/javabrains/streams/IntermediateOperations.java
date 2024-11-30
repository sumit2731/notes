package io.javabrains.streams;

import java.util.stream.Stream;

public class IntermediateOperations {
        public static void main(String[] args) {
                Stream<Integer> numbers = Stream.of(1, 2, 3, 4, 5);
                /**
                 * here we are creatinh new stream
                 */
                Stream<Integer> limitedStream = numbers.limit(5);
                limitedStream.forEach(System.out::println);
                /**
                 * This kind of writing code is known as fluent API
                 * It allows us to chain different things and each chain is operating on
                 * result of thing. for Each is operating on result of limit, limit operatoes on
                 * result of Stream.of
                 */
                Stream.of(1, 2, 3, 4, 5)
                                .limit(2)
                                .forEach(System.out::println);
                /**
                 * 
                 * Just see each operator returns a differen stream, we can store it in variable
                 * from now onwards we are going to use the fluent API
                 */
                numbers = Stream.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
                Stream<Integer> evenStream = numbers.filter((x -> x % 2 == 0));
                Stream<Integer> first2Evens = evenStream.limit(2);
                first2Evens.forEach(System.out::println);

                /**
                 * here we can also print numbers in map but
                 * recommended practice is not to have a side effect in map
                 */
                Stream.of("apple", "banana", "cherry", "mangao")
                                .limit(2)
                                .map(String::toUpperCase)
                                .forEach(System.out::println);

                /**
                 * For side effects use peek
                 * It takes consumer and returns new Stream
                 */
                Stream.of("apple", "banana", "cherry", "mangao")
                                .peek(str -> System.out.println("Peek Result: " + str))
                                .filter(name -> name.length() < 6)
                                .map(String::toUpperCase)
                                .forEach(System.out::println);

                Stream.of(1, 2, 9, 6, 8, 4, 5, 7, 9, 6)
                                .distinct()
                                .sorted()
                                .forEach(System.out::println);

                Stream<Integer> oddNumbers = Stream.of(1, 3, 5, 7);
                Stream<Integer> evenNumbers = Stream.of(2, 4, 6, 8);
                Stream.concat(oddNumbers, evenNumbers)
                                .forEach(System.out::println);
        }

}
