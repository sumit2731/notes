class Department6 {
  //   private employees: string[] = [];
  protected employees: string[] = [];

  constructor(public readonly id: string, public name: string) {}

  describe(this: Department6) {
    console.log(`Department ${this.id}: ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }

  parentMethod(): string {
    return "parent";
  }
}

class ITDepartment6 extends Department6 {
  admins: string[];

  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
  
  ItDepartmentMethod() {
    console.log("Method from IT Department");
  }
}

const it6 = new ITDepartment6("D2", ["Sumeet"]);
it6.addEmployee("Max");
it6.addEmployee("Manu");
console.log(it6);

class AccountingDepartment6 extends Department6 {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
  /* 
  *This method also exists in parent class, here we are overriding it,
  but problem is that here we want to access employees, but it is private member,
  so it cannot accessed outisde the Parent class(where it is declared as private)
  so private members ae not accessible even in child classes. 
  
  If we want to grant access of a memebr variable to child class and still ensure that it
  cannot be chnaged from outside of class, we can switch to protected.

  Protected is like private but unlike private, it is not just availble in Department Class
  but also in all child classes.

  this was about overing functions, what if we want to override member variables?
  we cannot change the acces modifier and type that is declared in Parent class.
  we can just assign them values.
  */
  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  /* 
  Here we cannot change the type of method while overide. here it gives us type mismtah error.
  here rules for fucntion types that we have discussed in previous lectures apply.
  */
  /* parentMethod(name: string): string {
    return '1';
  } */
}

const accounting6 = new AccountingDepartment6("D2", []);
accounting6.addEmployee("Max");
accounting6.printEmployeeInformation();

let d1: Department6;
/* 
Type of d1 is Department6 but still it can store instance of ITDepartment6,
this is because ITDepartment6 inherites from d1. so all variables and methods 
that are avalible on Department6 will be avalible on instance of ITDepartment6,
hence this asisgnment is valid
*/
d1 = new ITDepartment6("D1",['Sumeet Sood']);
d1.describe();
/*
This method exists on ITDepartment6 and d1 store instance of ITDepartment6
but we cannot call this method on d1 because this method does not exist on 
Department6 class, so we cannot call it on d1,althrough d1 actually store instance of
ITDepartment.
*/
//d1.ItDepartmentMethod();
