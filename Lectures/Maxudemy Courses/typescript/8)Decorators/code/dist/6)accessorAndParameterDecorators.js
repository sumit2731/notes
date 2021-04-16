"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Log6(target, propertyName) {
    console.log("Property Decorator");
    console.log(target);
    console.log(propertyName);
}
/**
 * @AccessDecorators
beisde proeprties you can also add Decorators to accessor(getter or setter)
this type of decorator receives 3 arguments.
first argument is same as proeprty decorator. then we have name of memebr we
are dealing with(name of accessor we are dealing with), at last we have proeprtDescriptor.

*/
function Log66(target, name, descriptor) {
    console.log('Accessor Decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
/**
 * @MethodDecorators are same as Accessdecorators but they are applied to either setter or getter method
 * so arguents that method decorator receives is same as accessor decorator.diffrence is proeprties avalaible
 * on descriptor. In case of method decorator descriptor contains value and writable but in case of accessor
 * decorator we have getter and setter instead of value and writable. configurable and enumerable are present
 * on both
 */
function Log666(target, name, descriptor) {
    console.log("Method Decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
/**
 * @ParameterDecorators
 * first 2 arguments are same as Method Decorator. third one is position of argument in
 * method signature(start from 0). second argument is name of function where argument is used, not name
 * of argument
 */
function Log6666(target, name, position) {
    console.log("Parameter Decorator");
    console.log(target);
    console.log(name);
    console.log(position);
}
class Product6 {
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
    Log6
], Product6.prototype, "title", void 0);
__decorate([
    Log66
], Product6.prototype, "price", null);
__decorate([
    Log666,
    __param(0, Log6666)
], Product6.prototype, "getPriceWithTax", null);
/**
 * @DecoratorsLink
 * https://www.logicbig.com/tutorials/misc/typescript.html - Go to this Link and navigate to decorators, there
 *  you will see all types of decorators
 */ 
//# sourceMappingURL=6)accessorAndParameterDecorators.js.map