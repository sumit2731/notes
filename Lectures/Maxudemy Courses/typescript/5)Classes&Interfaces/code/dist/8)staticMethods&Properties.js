"use strict";
var Department8 = /** @class */ (function () {
    function Department8(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
        /*
        This is how we can access static properties inside class
        */
        console.log(Department8.fiscalYear);
    }
    /*
    *Static methods and proeprties also exists in ES6 and above.It allows you
    to add methods and proeprties to classes which are not accessed on an
    instance of the class, but that you can access directly on class. this is
    often used for utility functions that you want to group or map to a class,
    logicaly or global constants which you lso want to store ina class. EX is-
      1)in vanila js we do - Math.PI to access value of PI, in similar we can call
      so me fucntion on Math.
    so class(Math) acts more like a namespace as a grouping mechanism, that is a common
    usecase for static methods and properties.
  
    One importat thing is that, when you add them in class, you cannot access them from non static parts,
    i.e we cannot access static members in non static methods of class or in constructor. It is
    because 'this'refers to instance created based on class and sttaic members are not avaliable on
    instnace of class because whole idea behind static properties and static methods is thatbthey are
    detached from instances.if you want to use satic property or method inside class, use class name
    instead of this.
    */
    Department8.createEmployee = function (name) {
        /*
        inside static method we can access static members by using this. it is because
        sttaic method are called by using className and therefore this inisde className refers to
        class nt to instance of class
        */
        console.log(this.fiscalYear);
        return { name: name };
    };
    Department8.prototype.describe = function () {
        console.log("Department " + this.id + ": " + this.name);
    };
    Department8.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department8.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    /*
    Here we declared static member variable
    */
    Department8.fiscalYear = 2020;
    return Department8;
}());
/*
Here we are using our static method and proeprty
*/
var employee8 = Department8.createEmployee("Max");
console.log(Department8.fiscalYear);
console.log(Department8.createEmployee("Sumeet"));
//# sourceMappingURL=8)staticMethods&Properties.js.map