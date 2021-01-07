"use strict";
class Perso {
    constructor() {
        this.name = 'sumeet';
    }
}
function createInstance(constructor) {
    return new constructor();
}
function createInstance2(constructor) {
    return new constructor;
}
let person1 = createInstance2(Perso);
person1.name;
//# sourceMappingURL=app2.js.map