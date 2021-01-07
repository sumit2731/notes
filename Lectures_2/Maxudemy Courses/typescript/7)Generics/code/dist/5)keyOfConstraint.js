"use strict";
/*
Here we get errors if dnt define type of obj and key.
error is that they have implicit type we can fix that error by changing tsconfig.json. lets say we
dnt want to do that.

then we assign types to obj and key, thne we get error that key may not exis on obj.
to solve this we can use generics
*/
/* function extractAndConvert(obj: object, key: string) {
    return obj[key];
} */
/*
Here we used keyOf constraints on generic
*/
function extractAndConvert(obj, key) {
    return obj[key];
}
class Emp {
    constructor(name) {
        this.name = name;
    }
}
let e1 = new Emp('Sumeet');
console.log(e1);
console.log({ name: 'Sumeet' });
//console.log(extractAndConvert(e1, 'name'));
//# sourceMappingURL=5)keyOfConstraint.js.map