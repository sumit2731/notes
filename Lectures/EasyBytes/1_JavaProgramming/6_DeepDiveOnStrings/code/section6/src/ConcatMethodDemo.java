public class ConcatMethodDemo {

    public static void main(String[] args) {
        String hello = "Hello";
        hello = hello + " " + "World";
        System.out.println(hello);

        String hello1 = "Hello";
        hello1 = hello1.concat(" ").concat("World");
        System.out.println(hello1);
        /**
         * This has representation in heap memory
         */
        String emptyString = "";
        // this means this does not point to anything
        String nullString = null;
    }
}