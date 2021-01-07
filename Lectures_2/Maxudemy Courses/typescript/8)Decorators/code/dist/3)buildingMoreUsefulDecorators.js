"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger3(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
function WithTemplate(template, hookId) {
    /*
    Sometimes we get error if we do not use argument of function(depends upon configs of tsconfig)
    so to remove that error, instead of passing constructor as arguent we use _. this is to basicaly
    signal to typescript that I know I will get this argument, but I dnt need it.

    now we want to create object of that class isnide our decorator, so we can use constructor
    function. for that we need to chnage the type of constructor from Function to any
    */
    //return function(constructor: Function) {
    //return function(_: Function) {
    return function (constructor) {
        const hookEl = document.getElementById(hookId);
        //here we are  creating object of class in which we are using this decorator
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1').textContent = p.name;
        }
    };
}
/*
here we pass a argument to  DecoratorFctory
*/
let Person3 = class Person3 {
    constructor() {
        this.name = "Max";
        console.log("Creating person Object");
    }
};
Person3 = __decorate([
    WithTemplate('<h1>This is paragraph</h1>', 'app')
], Person3);
const pers3 = new Person3();
console.log(pers3);
//# sourceMappingURL=3)buildingMoreUsefulDecorators.js.map