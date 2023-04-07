/**
 * Function naming
 * 
 * Here b has nothing to do. b is not defined. and function cannot refered.
 */

let a = function b() {}


/**
 * Diffrent ways of calling function
 */

let obj = {
    name: 'sumeet',
    getName() {
        console.log(this.name);
        return this.name
    }
}

(obj.getName)();
(3,obj.name)(); // here value of this will not point to obj
(true ? obj.getName : obj.name)() // here also value of this will not point to this