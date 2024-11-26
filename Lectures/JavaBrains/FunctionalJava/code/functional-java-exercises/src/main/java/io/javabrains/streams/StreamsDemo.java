package io.javabrains.streams;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.List;
import java.util.Random;
import java.util.stream.IntStream;
import java.util.stream.Stream;

public class StreamsDemo {

        public static void main(String[] args) throws IOException {
                // creating steram from collecton
                List<String> names = List.of("Peter", "Anna", "Mike", "Xenia");
                /**
                 * here we create stream i.e assembly line
                 */
                Stream<String> stream = names.stream();
                /**
                 * Stream has methods in which you can set operators, you can say I have
                 * assembly
                 * line, i want certain things, to do operation on each element of stream
                 * 
                 * easiest way to do operation on every element of string is by calling forEach
                 * method. It takes consumer as argument
                 * Passing a lambda to forEach is equivalent of adding a worker to assembly
                 * line.
                 * when you created the stream, run time sets up the assembly line and tells ,
                 * tell me what you need to do with stream.place all the workers before first
                 * element comes.
                 * between these 2 lines is your oppsotunity to place all the workers in
                 * assembly line.we added one worker, forEach is special type of worker which
                 * triggers the assembly line(terminal operation).worker is added and then
                 * elements starts coming.
                 */
                stream.forEach(System.out::println);

                // creating stream from array
                int[] numbers = { 1, 2, 3, 4, 5 };
                Arrays.stream(numbers).forEach(System.out::println);

                // creating stream on the fly
                Stream.of(1, 2, 3, 4, 5).forEach(System.out::println);
                // Using Built in API, that return Streams - creating astrea from lines of files
                Stream<String> lines = Files.lines(Paths.get("files.txt"));
                lines.forEach(System.out::println);
                /**
                 * Stream.generate() takes supplier as argument,It is going to invoke the
                 * supplier get the value and then create stream from it.often these kind of
                 * stream are infinite so we need to limit it, here we say limit the stream to
                 * 10 elemnts
                 * 
                 * Here we use new in nextDouble refrence because this method existing on
                 * instance of
                 * Random class.
                 */
                Stream.generate(new Random()::nextDouble)
                                .limit(10)
                                .forEach(System.out::println);

                /**
                 * first arg is seed, second is unary operator.
                 * for first element , it calls Unary operator with seed value, result is first
                 * element of stream
                 * for second element, it calls Unary operator with first element of stream and
                 * so on
                 */
                Stream.iterate(0, x -> x + 2)
                                .limit(10)
                                .forEach(System.out::println);

                /**
                 * Converting stream to list- toList method
                 * list has out of box implmenetation.there is not toMap, toSet
                 * 
                 * there is alternative way to do same, we will have allok at it
                 */

                List<Integer> uptoHundered = Stream.iterate(0, x -> x + 1)
                                .limit(10)
                                .toList();
                System.out.println(uptoHundered);

        }
}
