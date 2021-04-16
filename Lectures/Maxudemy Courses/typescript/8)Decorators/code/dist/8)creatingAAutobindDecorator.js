"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function AutoBind(target, name, descriptor) {
    /**
     * @This was my solution. but in tutorial a better solution is shown. here we return a
     * property descriptor, so it will replace our old property descriptor. here this inside get will refer to object
     * using which are accessing this function
     */
    //descriptor.value = descriptor.value.bind(new target.constructor());
    const adjDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            return descriptor.value.bind(this);
        }
    };
    return adjDescriptor;
}
class Printer {
    constructor() {
        this.message = 'This works';
    }
    showMessage() {
        console.log(this);
        console.log(this.message);
    }
}
__decorate([
    AutoBind
], Printer.prototype, "showMessage", null);
const p = new Printer();
const button = document.querySelector('button');
p.message = 'This is new message';
button.addEventListener('click', p.showMessage);
//# sourceMappingURL=8)creatingAAutobindDecorator.js.map