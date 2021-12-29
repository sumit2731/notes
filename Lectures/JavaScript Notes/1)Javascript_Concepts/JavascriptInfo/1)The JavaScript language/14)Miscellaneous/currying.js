/* 
Currying is a transform that makes f(a,b,c) callable as f(a)(b)(c). JavaScript implementations usually both keep the function 
    callable normally and return the partial if the arguments count is not enough.Currying allows us to easily get partials. 
*/


/* 
Currying in code
*/
function sum(a, b) {
    return a + b;
}
function curry(fn) {
    return function(a) {
        return function(b) {
            return fn(a,b);
        }
    }
}

let newSum = curry(sum);
let addedNumbers = newSum(1)(2);

/* 
Advantages of curying - Gives us partials
*/

let addTen = newSum(10);
console.log(addTen(5));
console.log(addTen(6));


/* 
Coding problem 1 - A currying function that convertes any function into curried function

*/

function curry(fn) {
    let arg = [];
    function dummyFuncion(argument) {
        if(arg.length === fn.length) return fn(...arg);
        else {
            arg.push(argument);
            return dummyFuncion;
        }
    }
    return dummyFuncion;
}

function twoNumberSum(a,b) {
    return a + b;
}

function threeNumberSum(a,b,c) {
    return a + b + c;
}

let newTwoNumberSum = curry(twoNumberSum);
let newThreeNumberSum = curry(threeNumberSum);

console.log(newTwoNumberSum(1)(2)());
console.log(newThreeNumberSum(1)(2)(3)());


/* 
Coding Problem 2 -
    sum(1)()
    sum(1)(2)()
    sum(1)(2)(3)()

*/

function sum(number1) {

    function addition(number2) {
        if(number2) {
            number1 += number2;
            return addition;
        }
        else return number1;
    }
    return addition;
}

console.log(sum(1)());
console.log(sum(1)(2)());
console.log(sum(1)(2)(3)());