class Department5 {

  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {}

  describe(this: Department5) {
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

/* 
Here ITDepartment inherits from Department5
We can only inherits from 1 class you cannot inherit from multuple classes
we we have not defined constructor and member variables of ITDepartment class(It is empty)
Still I can do this -
    new ITDepartment("D1", "Accounting")

This is because when we inherits from another class, child class automatically gets
everything that parent class has(inlcuding its constructor). so as long as child class
do not has it's own cosntructor parent class constructor is automatically called with
argument that we pass to constructor to child class.
*/
class ITDepartment5 extends Department5 {
  admins: string[];
  /* 
  But what if our child class implements its own constructor? then from child class constructor
  we have to manually call constructor of parent class using super keyword.super takes arguments
  of parent class constructor. 
  
  here you can see our child class constructor takes only one argument, but while calling super,
  we have haardcoded second argument. so parent class constructor get 2 arguments.
  */
  constructor(id: string, admins:string[]) {
    /* 
    In chld class you have to call super first thing in your child class before you do anything with 'this' keyword.
    so If we want to initiaize some properties(these can be paret or child class properties), we have to do this after 
    calling super.
    */
    super(id, 'IT');
    this.admins = admins;
  }
}

const it5 = new ITDepartment5("D2",['Sumeet']);
it5.addEmployee("Max");
it5.addEmployee("Manu");
console.log(it5);

class AccountingDepartment5 extends Department5 {
  constructor(id: string, private reports: string[]) {
    super(id,'Accounting');
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const accounting5 = new AccountingDepartment5("D2",[]);
accounting5.addReport("Something went wrong.....");
accounting5.printReports();

