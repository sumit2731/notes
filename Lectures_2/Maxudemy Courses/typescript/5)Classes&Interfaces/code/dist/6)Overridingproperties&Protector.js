"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department6 = /** @class */ (function () {
    function Department6(id, name) {
        this.id = id;
        this.name = name;
        //   private employees: string[] = [];
        this.employees = [];
    }
    Department6.prototype.describe = function () {
        console.log("Department " + this.id + ": " + this.name);
    };
    Department6.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department6.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    Department6.prototype.parentMethod = function () {
        return "parent";
    };
    return Department6;
}());
var ITDepartment6 = /** @class */ (function (_super) {
    __extends(ITDepartment6, _super);
    function ITDepartment6(id, admins) {
        var _this = _super.call(this, id, "IT") || this;
        _this.admins = admins;
        return _this;
    }
    ITDepartment6.prototype.ItDepartmentMethod = function () {
        console.log("Method from IT Department");
    };
    return ITDepartment6;
}(Department6));
var it6 = new ITDepartment6("D2", ["Sumeet"]);
it6.addEmployee("Max");
it6.addEmployee("Manu");
console.log(it6);
var AccountingDepartment6 = /** @class */ (function (_super) {
    __extends(AccountingDepartment6, _super);
    function AccountingDepartment6(id, reports) {
        var _this = _super.call(this, id, "Accounting") || this;
        _this.reports = reports;
        return _this;
    }
    AccountingDepartment6.prototype.addReport = function (text) {
        this.reports.push(text);
    };
    AccountingDepartment6.prototype.printReports = function () {
        console.log(this.reports);
    };
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
    AccountingDepartment6.prototype.addEmployee = function (name) {
        if (name === "Max") {
            return;
        }
        this.employees.push(name);
    };
    return AccountingDepartment6;
}(Department6));
var accounting6 = new AccountingDepartment6("D2", []);
accounting6.addEmployee("Max");
accounting6.printEmployeeInformation();
var d1;
/*
Type of d1 is Department6 but still it can store instance of ITDepartment6,
this is because ITDepartment6 inherites from d1. so all variables and methods
that are avalible on Department6 will be avalible on instance of ITDepartment6,
hence this asisgnment is valid
*/
d1 = new ITDepartment6("D1", ['Sumeet Sood']);
d1.describe();
/*
This method exists on ITDepartment6 and d1 store instance of ITDepartment6
but we cannot call this method on d1 because type
This method does not exist on Department6 class, so we cannot call it on d1,
althrough
*/
//d1.ItDepartmentMethod();
//# sourceMappingURL=6)Overridingproperties&Protector.js.map