class Department7 {
  //   private employees: string[] = [];
  protected employees: string[] = [];

  constructor(public readonly id: string, public name: string) {}

  describe(this: Department7) {
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

class ITDepartment7 extends Department7 {
  admins: string[];

  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

const it7 = new ITDepartment7("D2", ["Sumeet"]);
it7.addEmployee("Max");
it7.addEmployee("Manu");
console.log(it7);

class AccountingDepartment7 extends Department7 {
  /* 
  This is a private member, it is not accessible outiside the class with '.'
  now we can add getter to still make it accessible.A getter is basically 
  a property where you execute a function or method when you retrieve a value.
  and that allows you as developer to add more complex logic there.

  Getters&Setters are also supported in vanilla js. check this link-
  https://javascript.info/property-accessors
  */
  private lastReport: string;

  /* 
  This is how we create getter, get keyword, then any name, typically
  cloasely related to the property you are trying to control access to.
  It is defined like method so you we add paraenthesis and {}. inside {}
  you have to return something.

  now it is returning our private member, but as this variable(mostRecentreport) is public, 
  so we can access private member outside of class.
  */
  get mostRecentreport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No Report Found");
  }

  /* 
  Here we set the setter, we use set keyword. then any name of your choice
  typically a name related to your the property which should be set. then we pass 
  the argument which user would have passed in here.
  inside it we can execute any logic where we just call addReport method. 
  
  This function is called when user do this-

  object.mostRecentreport = somevalue

  */
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

const accounting7 = new AccountingDepartment7("D2", []);
/* 
*Here we are setting value through setter
*/
accounting7.mostRecentreport = 'year End Report';
/* 
mostRecentreport is a getter
*so we access mostRecentreport as property, without parenthesis
behind the scene our method is executed
*/
console.log(accounting7.mostRecentreport);

