public class Employee {

    String firstName;
    String lastName;
    byte age;
    char gender;
    public static final String EMPLOYER_NAME = "Google";

    public Employee() {
        this("john", "doe", (byte) 25, 'M');
     }
    public Employee(String firstname, String lastName, byte age, char gender ) {
        this.firstName = firstname;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }
    public byte getAge() {
     return age;
    }

    public char getGender() {
        return gender;
    }
}
