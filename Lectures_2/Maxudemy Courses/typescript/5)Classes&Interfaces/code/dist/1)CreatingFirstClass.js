"use strict";
/*
Clases are syntactical sugar for constructor Functions in js
Function in Objects are called methods
*/
var Department1 = /** @class */ (function () {
    /*
      *Constructor is reserved keyword undrstood by modern js and ts
      It is function tied to this class (and tied to any object based on this class)
      which is executed when object is being created. It allows us to do some initialization work
      for object which we are building
      */
    function Department1(n) {
        this.name = n;
    }
    return Department1;
}());
var accounting1 = new Department1("Accounting");
console.log(accounting1);
/*
Now compile ths file into js using tsc. compile into those es6 as well as es5.
you can do this by changing target of tsconifg.ts. notice syntax of compiler
js in both versions. sowe can say that classes are syntactic sugar for constructor functions
*/
//# sourceMappingURL=1)CreatingFirstClass.js.map