/**
 * Problem is same as 1. but it can diffrer slughtly like this -
 * 
 *  console.log(newThreeNumberSum(1,2,3))    => console.log(newThreeNumberSum(1,2,3)())
    console.log(newThreeNumberSum(1)(2)(3)); => console.log(newThreeNumberSum(1)(2)(3)())
    console.log(newThreeNumberSum(1,2)(3));  => console.log(newThreeNumberSum(1,2)(3)())
    console.log(newThreeNumberSum(1)(2,3));  => console.log(newThreeNumberSum(1)(2,3)())
 */

function threeNumberSum(a,b,c) {
    return a + b + c;
}


let newThreeNumberSum = curry(threeNumberSum);

console.log(newThreeNumberSum(1,2,3)());
console.log(newThreeNumberSum(1)(2)(3)());
console.log(newThreeNumberSum(1,2)(3)());
console.log(newThreeNumberSum(1)(2,3)());

//define currying function


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
