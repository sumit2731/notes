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
var Department10 = /** @class */ (function () {
    function Department10(id, name) {
        this.id = id;
        this.name = name;
        //   private employees: string[] = [];
        this.employees = [];
    }
    Department10.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department10.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department10;
}());
var ITDepartment10 = /** @class */ (function (_super) {
    __extends(ITDepartment10, _super);
    function ITDepartment10(id, admins) {
        var _this = _super.call(this, id, "IT") || this;
        _this.admins = admins;
        return _this;
    }
    ITDepartment10.prototype.describe = function () {
        console.log("IT Department - ID: " + this.id);
    };
    return ITDepartment10;
}(Department10));
/*
What is private constructor and what is its use?
There is pattern in OOP, which is called sigleton Pattern.Singleton
pattern is about ensuring that you will always only have exactly one instance
of a certain class. this can be useful where you somehow cannot use static
methods or properties or you dnt  want to. but at the same time you want to
ensure that you cnt create multiple onjects based on class but we have only object
of a class.
To ensure this and to avoid that we manually call new AccountingDepartment multiple times
So we can turn constructor into private.
*/
var AccountingDepartment10 = /** @class */ (function (_super) {
    __extends(AccountingDepartment10, _super);
    /*
    this make sthis consructor private, this ensures that we cannot call new on this constructor.
    this connstructor is only accessible from inside a class. question is how can we use this constructor
    form inside the class without creating objects? w ecan do that be sttaic methods
    */
    function AccountingDepartment10(id, reports) {
        var _this = _super.call(this, id, "Accounting") || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    Object.defineProperty(AccountingDepartment10.prototype, "mostRecentreport", {
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
    This static method uses private constructor to return instance of class.
    it checks whether we have instnace of class or not. if not then it returns new instnace
    otherwise it returns old one.
  
    */
    AccountingDepartment10.getInstance = function () {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment10("D2", []);
        return this.instance;
    };
    AccountingDepartment10.prototype.describe = function () {
        console.log("Accounting Department - ID: " + this.id);
    };
    AccountingDepartment10.prototype.addReport = function (text) {
        this.reports.push(text);
        this.lastReport = text;
    };
    AccountingDepartment10.prototype.printReports = function () {
        console.log(this.reports);
    };
    AccountingDepartment10.prototype.addEmployee = function (name) {
        if (name === "Max") {
            return;
        }
        this.employees.push(name);
    };
    return AccountingDepartment10;
}(Department10));
/*
we cannot access private constructor outisde of class
*/
// const accounting10 = new AccountingDepartment10("D2", []);
/*
This is how we use private constructor to get instance of class
*/
var accounting10 = AccountingDepartment10.getInstance();
/*
Here we get same instnace of AccountingDepartment10 .so we can implement the
singleton pattern easily using ts , thanks to private constructot. we dnt use
singleton pattren that often
*/
var accounting102 = AccountingDepartment10.getInstance();
accounting10.describe();
//# sourceMappingURL=10)singletonAndPrivateConstructor.js.map