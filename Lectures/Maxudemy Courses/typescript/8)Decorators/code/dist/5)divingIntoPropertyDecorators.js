"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
Arguments to decorator fucntion depends upon where that
decorator function is added. if we add decorator to property
of class, then we get 2 arguments.

First Argument is target of proeprty and for instance property, it will be the
prototype of the object created. for static proeprty, target wil be constructor
function. so here we give first argument type of any, becuase we dnt know its exact
structure.

second srgument is name of property, it could be string or symbol, becaue we dnt know what we
use as property identifiers
*/
function Log(target, propertyName) {
    console.log("Property Decorator");
    console.log(target);
    console.log(propertyName);
}
class Product {
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error("Invalid Price - Should be Positive");
        }
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
//# sourceMappingURL=5)divingIntoPropertyDecorators.js.map