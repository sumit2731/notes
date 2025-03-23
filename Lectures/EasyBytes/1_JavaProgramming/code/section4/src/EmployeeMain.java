public class EmployeeMain {
    public static void main(String[] args) {

       Employee employee = new Employee("John", "Doe", (byte) 25, 'M');
       Employee employee2 = new Employee("John", "Doe", (byte) 25, 'M');
       Employee employee3 = new Employee();
       System.out.println(employee.getAge());
        System.out.println(employee2.getGender());
    }
}
