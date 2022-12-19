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

//implement function curry


/**
 * My Solution
 */

function curry(fn) {
    let allParams = [];
    return function outer(...params) {
        if(allParams.length >= fn.params) return fn(...allParams);
        else {
            allParams = allParams.push(params);
            return outer;
        }
    }
}

/**
 * Limitation of "My Solution", If you called function on wromg syntax, rest calls with fails -
 * let newTwoNumberSum = curry(twoNumberSum);
 * newTwoNumberSum(1);
 * 
 */