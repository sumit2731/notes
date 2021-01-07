"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger7(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
/**
 *What you return from decorator and what typescript is able to use depends upon
 typ of decorator you are working with. Ib class decorator you can return a constructor
 function which will replce the class to which you added the decorator.

 so here we can return new constructor function or we can simpley return a new class.

 Visit this link - https://www.typescriptlang.org/docs/handbook/generics.html#using-class-types-in-generics
 */
function WithTemplate7(template, hookId) {
    return function (orignalConstructor) {
        return class extends orignalConstructor {
            constructor(...args) {
                super();
                const hookEl = document.getElementById(hookId);
                //const p = new orignalConstructor();
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector("h1").textContent = "sumeet";
                }
            }
        };
    };
}
/*
here we pass a argument to  DecoratorFctory
*/
let Person7 = class Person7 {
    constructor() {
        this.name = "Max";
        this.id = 1;
        console.log("Creating person Object");
    }
    printName() {
        console.log("print Name");
    }
};
Person7 = __decorate([
    WithTemplate7("<h1>This is paragraph</h1>", "app")
], Person7);
const pers7 = new Person7();
console.log(pers7);
/**
 * @ThingToBeNoted here we need to specify that returned class has all properties which are avaible on class on which we apply decorator.
 * Question - https://www.udemy.com/course/understanding-typescript/learn/lecture/16935728#questions/10588830
 */
/**
 * @Here we encountered the concept of constructor funcion type in ts. so go throught these articles-
 * https://stackoverflow.com/questions/39614311/class-constructor-type-in-typescript
 * https://www.simonholywell.com/post/typescript-constructor-type.html
 *
 * Realted to this is  conectpts of @mixins. see this link-
 * https://mariusschulz.com/blog/mixin-classes-in-typescript
 */
/**
 * @For concept of generic defualt
 */
//# sourceMappingURL=7)returningAndChangingClassInDEcorator.js.map