class Department4 {
  //private readonly id: string
  /* 
  *Kind of related to what you just learned about access modifiers is another modifier, that's
  readONLy. let's say we have some fields which should not just be private or public, they also
  should'nt change after thier initialization.

  if you see generated js code, you will see there we have no public, no private, no readonly.
  so acessModifiers are in ts only.also in genrated js code you can see that all functions are added
  to prototype of function employees
  */
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {}

  describe(this: Department4) {
    console.log(`Department ${this.id}: ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting4 = new Department4("D1", "Accounting");
console.log(accounting4);

accounting4.addEmployee("Max");
accounting4.addEmployee("Manu");


accounting4.describe();
accounting4.printEmployeeInformation();
