"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const registeredValidators = {};
function Required(target, propertyName) {
    console.log(target);
    console.log(target.constructor);
    console.log(target.constructor.name);
    console.log(registeredValidators[target.constructor.name]);
    if (registeredValidators[target.constructor.name]) {
        if (registeredValidators[target.constructor.name][propertyName]) {
            registeredValidators[target.constructor.name][propertyName].push('required');
        }
        else
            registeredValidators[target.constructor.name][propertyName] = ['required'];
    }
    else
        registeredValidators[target.constructor.name] = { [propertyName]: ['required'] };
}
function PositiveNumber(target, propertyName) {
    if (registeredValidators[target.constructor.name]) {
        if (registeredValidators[target.constructor.name][propertyName]) {
            registeredValidators[target.constructor.name][propertyName].push('positiveNumber');
        }
        else
            registeredValidators[target.constructor.name][propertyName] = ['positiveNumber'];
    }
    else
        registeredValidators[target.constructor.name] = { [propertyName]: ['positiveNumber'] };
}
function validate(obj) {
    const objValidateConfig = registeredValidators[obj.constructor.name];
    if (!objValidateConfig)
        return true;
    let isValid = true;
    for (let prop of Object.keys(objValidateConfig)) {
        for (let validator of objValidateConfig[prop]) {
            switch (validator) {
                case 'required':
                    isValid = isValid && !!obj[prop];
                case 'positiveNumber':
                    isValid = isValid && !!(obj[prop] > 0);
            }
        }
    }
    return isValid;
}
class Course {
    constructor(t, p) {
        this.title = t;
        this.price = p;
    }
}
__decorate([
    Required
], Course.prototype, "title", void 0);
__decorate([
    PositiveNumber
], Course.prototype, "price", void 0);
const courseForm = document.querySelector('form');
courseForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const price = +document.getElementById("price").value;
    const createdCourse = new Course(title, price);
    console.log(createdCourse);
    if (!validate(createdCourse)) {
        alert("Invalid Input Please try again");
    }
});
console.log(registeredValidators);
//# sourceMappingURL=9)validationWithDecorators.js.map