//Access Modifiers
class Department3 {
  //name: string;
  /* 
  Private memebrs can be accessed only from inside the class
  we can make variables as well as methods as private. private is modifier
  we also have a public modifier, which is defualt if we do not specify anything.
  javascript do not have public and private, only in very modern versions, such
  a thing exist.In past all properties were public
  */
  private employees: string[] = [];
  /**
  @Desc Constrcutpr Parameters 
  If we add acess modifier(public, private, protected) in front of parameter of constructor.
  it will create proeprties same name and type in class and assign corronsponding
  value(that we pass to constructor) to that property.

  Here we do not have any access modifeir in front of lastName, so we do not have
  classmemeber named lastName. and we do not anything inside construtor with this 
  parameter, so it is unused


  lets see alterntive way of creating name property
  */
  constructor(private id: string , public name: string, lastName: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department3) {
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

const accounting3 = new Department3("D1","Accounting","unused");
console.log(accounting3);

accounting3.addEmployee('Max');
accounting3.addEmployee('Manu');

/* 
To prevemt this thing we have made employees as private
*/
// accounting.employees[2] = 'Anna';

accounting3.describe();
accounting3.printEmployeeInformation();


