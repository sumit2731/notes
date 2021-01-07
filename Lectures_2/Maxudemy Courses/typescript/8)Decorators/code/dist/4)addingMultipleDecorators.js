"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger4(logString) {
    console.log("Decorator Factory called");
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
function WithTemplate4(template, hookId) {
    console.log("WithTemplate Factories");
    return function (constructor) {
        console.log("Rendering template");
        const hookEl = document.getElementById(hookId);
        //here we are  creating object of class in which we are using this decorator
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector("h1").textContent = p.name;
        }
    };
}
/**
 * @Multiple Decorators are executed in bottom up hierarchy.
 *  Decorator factories are executed in top bottom heirarchy
 */
let Person4 = class Person4 {
    constructor() {
        this.name = "Max";
        console.log("Creating person Object");
    }
};
Person4 = __decorate([
    Logger4('Logging'),
    WithTemplate4("<h1>This is paragraph</h1>", "app")
], Person4);
const pers4 = new Person4();
console.log(pers4);
//# sourceMappingURL=4)addingMultipleDecorators.js.map