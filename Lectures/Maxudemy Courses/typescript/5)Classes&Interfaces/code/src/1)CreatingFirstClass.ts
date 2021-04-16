/* 
Clases are syntactical sugar for constructor Functions in js
Function in Objects are called methods
*/
class Department1 {
  name: string;
  
  getName() {
    return this.name;
  }
  /* 
    *Constructor is reserved keyword undrstood by modern js and ts
    It is function tied to this class (and tied to any object based on this class)
    which is executed when object is being created. It allows us to do some initialization work
    for object which we are building
    */
  constructor(n: string) {
    this.name = n;
  }
}

const accounting1 = new Department1("Accounting");
console.log(accounting1);

/*
Now compile ths file into js using tsc. compile into those es6 as well as es5.
you can do this by changing target of tsconifg.ts. notice syntax of compiler
js in both versions. sowe can say that classes are syntactic sugar for constructor functions
*/

/**
 * @Extra_Notes
 * you can see here obj1 has type of Department1 but it stores the object
 * which is defined using literal notation.It is because both contains same set of proeprties.
 * 
 * If obj1 has any extra or less properties than Department1, then we will get error.
 */

let obj1: Department1 = {
  name: 'Sumeet',
  getName() {
    return this.name;
  }
};
