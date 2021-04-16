"use strict";
/*
Here we ant to put consraits on generics, we are not bothered about exact structure of object , you are providing
for T and U. but we want is both parameters should be any kind of objects.

you can aso use your own types
*/
function merge23(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj23 = merge23({ name: "Max" }, { age: 30 });
console.log(mergedObj21.age);
//# sourceMappingURL=3)workingWithConstraints.js.map