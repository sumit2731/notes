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
var Department5 = /** @class */ (function () {
    function Department5(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    Department5.prototype.describe = function () {
        console.log("Department " + this.id + ": " + this.name);
    };
    Department5.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department5.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department5;
}());
/*
Here ITDepartment inherits from Department5
We can only inherits from 1 class you cannot inherit from multuple classes
we we have not defined constructor and member variables of ITDepartment class(It is empty)
Still I can do this -
    new ITDepartment("D1", "Accounting")

This is because when we inherits from another class, child class automatically gets
everything that parent class has(inlcuding its constructor). so as long as child class
do not ha sits own cosntructor parent class constructor is automatically called with
argument that w epass to csntructor to child class.
*/
var ITDepartment5 = /** @class */ (function (_super) {
    __extends(ITDepartment5, _super);
    /*
    But what if our child class implements its own constructor? then from child class constructor
    we have to manually call constructor of parent class using super keyword.super takes arguments
    of parent class constructor.
    
    here you can see our child class constructor takes only one argument, but while calling super,
    we have haardcoded second argument. so parent class constructor get 2 arguments.
    */
    function ITDepartment5(id, admins) {
        var _this = 
        /*
        In chld class you have to call super first thing in your child class before you do anything with 'this' keyword.
        so we want to initiaize some properties(these can paret or child class properties), we have to do this after
        calling super.
        */
        _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        return _this;
    }
    return ITDepartment5;
}(Department5));
var it5 = new ITDepartment5("D2", ['Sumeet']);
it5.addEmployee("Max");
it5.addEmployee("Manu");
console.log(it5);
var AccountingDepartment5 = /** @class */ (function (_super) {
    __extends(AccountingDepartment5, _super);
    function AccountingDepartment5(id, reports) {
        var _this = _super.call(this, id, 'Accounting') || this;
        _this.reports = reports;
        return _this;
    }
    AccountingDepartment5.prototype.addReport = function (text) {
        this.reports.push(text);
    };
    AccountingDepartment5.prototype.printReports = function () {
        console.log(this.reports);
    };
    return AccountingDepartment5;
}(Department5));
var accounting5 = new AccountingDepartment5("D2", []);
accounting5.addReport("Something went wrong.....");
accounting5.printReports();
//# sourceMappingURL=5)Inheritance.js.map