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
var Department7 = /** @class */ (function () {
    function Department7(id, name) {
        this.id = id;
        this.name = name;
        //   private employees: string[] = [];
        this.employees = [];
    }
    Department7.prototype.describe = function () {
        console.log("Department " + this.id + ": " + this.name);
    };
    Department7.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department7.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department7;
}());
var ITDepartment7 = /** @class */ (function (_super) {
    __extends(ITDepartment7, _super);
    function ITDepartment7(id, admins) {
        var _this = _super.call(this, id, "IT") || this;
        _this.admins = admins;
        return _this;
    }
    return ITDepartment7;
}(Department7));
var it7 = new ITDepartment7("D2", ["Sumeet"]);
it7.addEmployee("Max");
it7.addEmployee("Manu");
console.log(it7);
var AccountingDepartment7 = /** @class */ (function (_super) {
    __extends(AccountingDepartment7, _super);
    function AccountingDepartment7(id, reports) {
        var _this = _super.call(this, id, "Accounting") || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    Object.defineProperty(AccountingDepartment7.prototype, "mostRecentreport", {
        /*
        This is show we create getter, get keyword, then any name, typically
        cloasely related to the property you are trying to control access to.
        it is defined like method so you we add paraenthesis and {}. inside {}
        you have to return something.
      
        now it is returning our private member, but as this variable(mostRecentreport) is public,
        so we can access private member outside of class.
        */
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error("No Report Found");
        },
        /*
        Here we set the setter, we use set keyword. then any name of your choice
        typically a name related yo the property which should be set. then we pass the argument
        which user would have passed in here.
        inside it we can execute any logic where we just call addReport method
        */
        set: function (value) {
            if (!value) {
                throw new Error("Please pass in a valid value");
            }
            this.addReport(value);
        },
        enumerable: true,
        configurable: true
    });
    AccountingDepartment7.prototype.addReport = function (text) {
        this.reports.push(text);
        this.lastReport = text;
    };
    AccountingDepartment7.prototype.printReports = function () {
        console.log(this.reports);
    };
    AccountingDepartment7.prototype.addEmployee = function (name) {
        if (name === "Max") {
            return;
        }
        this.employees.push(name);
    };
    return AccountingDepartment7;
}(Department7));
var accounting7 = new AccountingDepartment7("D2", []);
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
//# sourceMappingURL=7)getters&Setters.js.map