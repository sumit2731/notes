//snippet 1
/* 
Even when we create array by a= [1,2,3], it is created by
calling Array fucntion in constructor mode. All functions
and properties of arrays are found on Array.prototype
*/

/* let a = [1, 2, 3];
console.log(a.__proto__ === Array.prototype);
console.log(Array.prototype); */

//Snippet 2
/* 
 *All fucntions are created by calling Function function
 *in constructor mode. so all common properties of functions
 *can be found on Function.prototype
 */

/*  function f1() {
    console.log('Hello');
}
console.log(f1.__proto__ === Function.prototype);
console.log(Function.prototype); */


//Snippet3
/* 
 *All obejcts are created by calling Object function in
 *constructor mode, all common properties of objects
 *can be found on Object.prototype
 */
/* let obj1 = {};
console.log(obj1.__proto__ === Object.prototype); */

//Snippet 4
/* 
 *We can see realtionship betwen prototype of
 */
/* console.log(Array.prototype.__proto__ == Object.prototype);
console.log(Function.prototype.__proto__ == Object.prototype); */


//Snippet 5
/*
 *Here we want to get only those properties which are property
 *on object itself, not on prototype
 */

/* let dragon = {
    name: 'Tanya',
    fire: true,
    fight() {
        return true;
    },
    sing() {
        if (this.fire) {
            return `I am ${this.name} breather of fire`;
        }
    }
};

let lizard = {
    name: 'Kiki',
    fight() {
        return 1;
    },
}
lizard.__proto__ = dragon;
console.log(lizard);// you will see only 2 proeprties which actually exists on lizards

console.log(dragon.isPrototypeOf(lizard));

for (let prop in lizard) {
    console.log(prop);
    if (lizard.hasOwnProperty(prop)) {
        console.log(prop);
    }
} */