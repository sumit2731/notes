"use strict";
var Department4 = /** @class */ (function () {
    function Department4(id, name) {
        this.id = id;
        this.name = name;
        //private readonly id: string
        /*
        *Kind of related to what you just learned about acess modifiers is another modifier, that's
        readONLy. let's say we have some fields which should not just be private or public, they also
        should'nt change after thier initialization.
      
        if you see generated js code, you will see there we have no public, no private, no readonly.
        so acessModifiers are in ts only.also in genrated js code you can see that all functions are added
        to prototype of function employees
        */
        this.employees = [];
    }
    Department4.prototype.describe = function () {
        console.log("Department " + this.id + ": " + this.name);
    };
    Department4.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department4.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department4;
}());
var accounting4 = new Department4("D1", "Accounting");
console.log(accounting4);
accounting4.addEmployee("Max");
accounting4.addEmployee("Manu");
accounting4.describe();
accounting4.printEmployeeInformation();
//# sourceMappingURL=4)readOnlyProperties.js.map