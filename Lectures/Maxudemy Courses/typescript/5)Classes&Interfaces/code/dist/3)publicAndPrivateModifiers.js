"use strict";
/*
Clases are syntactical sugar for constructor Functions in js
Function in Objects are called methods
*/
var Department3 = /** @class */ (function () {
    /**
    @Desc Constrcutpr Parameters
    If we add acess modifier(public, private, protected) in front of parameter of constructor.
    it will create proeprties same name and type in class and assign corronsponding
    value(that we pass to constructor) to that property.
  3
    Here we do not have any access modifeir in front of lastName, so we do not have
    classmemeber named lastName. and we do not anything inside construtor with this
    parameter, so it is unused
  
  
    lets see alterntive way of creating name property
    */
    function Department3(id, name, lastName) {
        this.id = id;
        this.name = name;
        //name: string;
        /*
        Private memebrs can be accessed only from inside the class
        we can make variables as well as methods as private. private is modiefier
        we also a public modifier, which is defualt if we do not specify anything.
        javascript do not have public and private, only in very modern versions, such
        a thing exist.In past all properties were public
        */
        this.employees = [];
        // this.id = id;
        // this.name = n;
    }
    Department3.prototype.describe = function () {
        console.log("Department " + this.id + ": " + this.name);
    };
    Department3.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department3.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department3;
}());
var accounting3 = new Department3("D1", "Accounting", "unused");
console.log(accounting3);
accounting3.addEmployee('Max');
accounting3.addEmployee('Manu');
/*
To prevemt this thing we have made employees as private
*/
// accounting.employees[2] = 'Anna';
accounting3.describe();
accounting3.printEmployeeInformation();
//# sourceMappingURL=3)publicAndPrivateModifiers.js.map