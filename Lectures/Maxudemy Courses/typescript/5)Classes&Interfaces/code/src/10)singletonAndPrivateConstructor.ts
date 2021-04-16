abstract class Department10 {
  //   private employees: string[] = [];
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {}


  abstract describe(this: Department10): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment10 extends Department10 {
  admins: string[];

  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe() {
    console.log("IT Department - ID: " + this.id);
  }
}

/* 
What is private constructor and what is its use ?
There is a pattern in OOP, which is called sigleton Pattern. Singleton
pattern is about ensuring that you will always only have exactly one instance
of a certain class. this can be useful where you somehow cannot use static
methods or properties or you dnt  want to. but at the same time you want to 
ensure that you cnt create multiple onjects based on class but we have only object
of a class.
To ensure this and to avoid that we manually call new AccountingDepartment multiple times
So we can turn constructor into private.
*/
class AccountingDepartment10 extends Department10 {
  private lastReport: string;
  /* 
  This static variable is used to keep track of whether instnace of this class is used or not
  */
  private static instance: AccountingDepartment10;
  
  
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
  /* 
  this makes this consructor private, this ensures that we cannot call new on this constructor.
  this connstructor is only accessible from inside a class. question is how can we use this constructor
  form inside the class without creating objects? we can do that be sttaic methods
  */
  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }
  /* 
  This static method uses private constructor to return instance of class.
  it checks whether we have instnace of class or not. if not then it returns new instnace
  otherwise it returns old one.

  */
  static getInstance() {
    if(this.instance) {
        return this.instance
    }
    this.instance = new AccountingDepartment10("D2", []);
    return this.instance;
  }

  describe() {
    console.log("Accounting Department - ID: " + this.id);
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
/* 
we cannot access private constructor outisde of class
*/
// const accounting10 = new AccountingDepartment10("D2", []);
/* 
This is how we use private constructor to get instance of class
*/
const accounting10 = AccountingDepartment10.getInstance();
/* 
Here we get same instnace of AccountingDepartment10 .so we can implement the
singleton pattern easily using ts , thanks to private constructot. we dnt use 
singleton pattren that often
*/
const accounting102 = AccountingDepartment10.getInstance();
accounting10.describe();