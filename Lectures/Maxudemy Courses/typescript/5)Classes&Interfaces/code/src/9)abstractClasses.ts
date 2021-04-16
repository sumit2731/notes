/* 
This class is abstract because it has atleast one abstrcat method.
Abstract classes cannot instantiate themself. it is because we do not
have defination of abstract method in abstract class. so abstract classes
are only there so that other classes can inherited them, provide defination
of abstract methods following the structure you laid out in base class.

even if we do not have abstract methods in abstract class, still we cannot
instamctiate abstract class
*/
abstract class Department9 {
  //   private employees: string[] = [];
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {}
  /* 
  We can override this method in child class, but sometimes we do not give
  option to override a method.instead you want to force developers working
  with certain class or extending a certain class to implmente a certain method
  or to override a certain method. when would you wnat to do that? when you
  want to make sure that certain method is avalible on all classes based on
  some base class(here it Department9). but you also know at same time that exact
  implementation will depend on specfic version.

  you can force child classe to override a method by using abstract keyword.
  but if you make a method abstract you have to make whole class as abstract.
  so lets make Department9 classs abstract.
  Also abstract method cannot have implememtation so we have to remove {} and
  give return type.

  Now we have to implement this method in any class that inherits this class. we can also
  have abstract properties. In that case we dnt have to provide concrete value
  in base class but instead inherited class has to do that.

  As we are inheriting this class, so adding this as argument to describe method means,
  this will refer to Department instance or instance somehow based on Department
  including inherited clases that might be inbetween. 
  */

 /*  abstract describe(this: Department9) {
    console.log(`Department ${this.id}: ${this.name}`);
  } */

  abstract describe(this: Department9): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment9 extends Department9 {
  admins: string[];

  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
  /* 
  We have to implement describe because it is absctract method of parent
  class(DEpartment)
  */
  describe() {
      console.log('IT Department - ID: ' + this.id);
  }
}

// const it9 = new ITDepartment9("D2", ["Sumeet"]);
// it9.addEmployee("Max");
// it9.addEmployee("Manu");
// console.log(it9);

class AccountingDepartment9 extends Department9 {
  
  private lastReport: string;
  get mostRecentreport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No Report Found");
  }

  set mostRecentreport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value");
    }
    this.addReport(value);
  }
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  /* 
  Here we override the describe method defined in Abstract Department9 class
  */
  describe() {
    console.log('Accounting Department - ID: ' + this.id);
  }
  
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }
}


const accounting9 = new AccountingDepartment9("D2", []);
/* 
Here over overidden method is called
*/
accounting9.describe();