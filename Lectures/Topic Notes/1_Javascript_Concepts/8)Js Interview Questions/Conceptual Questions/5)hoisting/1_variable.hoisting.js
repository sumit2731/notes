/**
 * Variable hoisting
 */

// ---------- Conditional declaration ----------------------------------
 console.log(name); //undefined
 if(false) {
     var name = abc;
 }

//------Hoisting with  let-----------------------------------------------
 //with let - https://blog.bitsrc.io/hoisting-in-modern-javascript-let-const-and-var-b290405adfda

/**
 *  All declarations (function, var, let, const and class) are hoisted in JavaScript, while the var declarations are initialized 
 *   with undefined, but let and const declarations remain uninitialized.They will only get initialized when their lexical 
 *   binding (assignment) is evaluated during runtime by the JavaScript engine. This means you can’t access the variable before
 *   the engine evaluates its value at the place it was declared in the source code. This is what we call “Temporal Dead Zone”,
 *   A time span between variable creation and its initialization where they can’t be accessed.
 */

console.log(a); //error- a is not defined
let a = 3;


/**
 * If the JavaScript engine still can’t find the value of let or const variables at the line where they were declared, it 
 * will assign them the value of undefined or return an error (in case of const).
 */

let a1;
console.log(a1); // outputs undefined
a1 = 5;

/**
 * as foo is decklared inside function it is hoisted, so outisde value is not used. beause of variable is in temporal dead zone
 * we  get error
 */

let foo = 10

function func2() {
    console.log(foo) //Error
    let foo = 1
}
func2 ()