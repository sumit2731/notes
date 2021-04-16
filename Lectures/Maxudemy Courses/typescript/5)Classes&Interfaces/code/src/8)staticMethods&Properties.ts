class Department8 {
  /* 
  Here we declared static member variable
  */
  static fiscalYear = 2020;
  protected employees: string[] = [];

  constructor(public readonly id: string, public name: string) {
    /* 
    This is how we can access static properties inside class
    */
    console.log(Department8.fiscalYear);
  }

  /* 
  Static methods and properties also exists in ES6 and above.It allows you
    to add methods and properties to classes which are not accessed on an 
    instance of the class, but that you can access directly on class. this is
    often used for utility functions that you want to group or map to a class,
    logicaly or global constants which you lso want to store ina class. EX is-
      1)in vanila js we do - Math.PI to access value of PI, in similar we can call
      so me fucntion on Math.
    so class(Math) acts more like a namespace as a grouping mechanism, that is a common
    usecase for static methods and properties.

  One importat thing is that, inside static members you cannot static members, it is because this
  inside sttic method will refer to Class not to instance of class as static method are caled on class,
  so general rule of 'this' applies.
  */
  static createEmployee(name: string) {
    /* 
    inside static method we can access static members by using this. it is because
    sttaic method are called by using className and therefore this inisde className refers to
    class nt to instance of class
    */
    console.log(this.fiscalYear);
    console.log(Department8.fiscalYear);
    return { name: name };
  }

  describe(this: Department8) {
    console.log(`Department ${this.id}: ${this.name}`);
    console.log(Department8.fiscalYear);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}


/* 
Here we are using our static method and proeprty
*/
const employee8 = Department8.createEmployee("Max");
console.log(Department8.fiscalYear);
console.log(Department8.createEmployee("Sumeet"));

let emp9 = new Department8('1',"New Department");
emp9.describe();