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
/*
This class is abstract because it has atleast one abstrcat method.
Abstract classes cannot instantiate themself. it is because we do not
have defination of abstract method in abstract class. so abstract classes
are only there so that other classes can inherited them, provide defination
of abstract methods follwoing the structure you laid out in base class.
*/
var Department9 = /** @class */ (function () {
    function Department9(id, name) {
        this.id = id;
        this.name = name;
        //   private employees: string[] = [];
        this.employees = [];
    }
    Department9.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department9.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department9;
}());
var ITDepartment9 = /** @class */ (function (_super) {
    __extends(ITDepartment9, _super);
    function ITDepartment9(id, admins) {
        var _this = _super.call(this, id, "IT") || this;
        _this.admins = admins;
        return _this;
    }
    /*
    We have to implement describe because it is absctract method of parent
    class(DEpartment)
    */
    ITDepartment9.prototype.describe = function () {
        console.log('IT Department - ID: ' + this.id);
    };
    return ITDepartment9;
}(Department9));
// const it9 = new ITDepartment9("D2", ["Sumeet"]);
// it9.addEmployee("Max");
// it9.addEmployee("Manu");
// console.log(it9);
var AccountingDepartment9 = /** @class */ (function (_super) {
    __extends(AccountingDepartment9, _super);
    function AccountingDepartment9(id, reports) {
        var _this = _super.call(this, id, "Accounting") || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    Object.defineProperty(AccountingDepartment9.prototype, "mostRecentreport", {
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error("No Report Found");
        },
        set: function (value) {
            if (!value) {
                throw new Error("Please pass in a valid value");
            }
            this.addReport(value);
        },
        enumerable: true,
        configurable: true
    });
    /*
    Here we override the describe method defined in Department class
    */
    AccountingDepartment9.prototype.describe = function () {
        console.log('Accounting Department - ID: ' + this.id);
    };
    AccountingDepartment9.prototype.addReport = function (text) {
        this.reports.push(text);
        this.lastReport = text;
    };
    AccountingDepartment9.prototype.printReports = function () {
        console.log(this.reports);
    };
    AccountingDepartment9.prototype.addEmployee = function (name) {
        if (name === "Max") {
            return;
        }
        this.employees.push(name);
    };
    return AccountingDepartment9;
}(Department9));
var accounting9 = new AccountingDepartment9("D2", []);
/*
Here over overidden method is called
*/
accounting9.describe();
//# sourceMappingURL=9)abstractClasses.js.map