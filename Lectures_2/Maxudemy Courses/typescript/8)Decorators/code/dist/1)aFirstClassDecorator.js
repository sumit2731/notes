"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @Descorator in the end is just a function, a function you apply to something
 * for example to a class in a certain way
 */
/**
 * It is convetion to name decorator function starting from
 * capital letter. we will apply this function as decorator
 * decorator function receives some arguments, how many arguments
 * it receives, depends on where you use dcorator.
 *
 * If we attach decorator to class, then it receives one argument,that's the
 * target of this decorator so as to say, which is our constructor function.
 *
 * so we can say we get function as argument. so type is Function.
 * the argument is constructor function of the class to which I add the decorator
 *
 */
function Logger(constructor) {
    console.log("logging.....");
    console.log(constructor);
}
/*
we Add decorator by '@' symbol. decorator are executed when your class
is defined, not instantiated. for same reson we see outputs of decorator
function before our object outpts. even if you do not have any objects
of class, decorator will be exected whenever js finds your class defination,
your constructor defination
*/
let Person = class Person {
    constructor() {
        this.name = 'Max';
        console.log("Creating person Object");
    }
};
Person = __decorate([
    Logger
], Person);
const pers = new Person();
console.log(pers);
//# sourceMappingURL=1)aFirstClassDecorator.js.map