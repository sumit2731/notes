function threeNumberSum(a,b,c) {
    return a + b + c;
}


let newThreeNumberSum = curry(threeNumberSum);

console.log(newThreeNumberSum(1,2,3));
console.log(newThreeNumberSum(1)(2)(3));
console.log(newThreeNumberSum(1,2)(3));
console.log(newThreeNumberSum(1)(2,3));

//implement function curry


/**
 * My Solution - Solution is same even if you want to allow only - console.log(newThreeNumberSum(1)(2)(3)) or all combination
 */

function curry(fn) {
    let allParams = [];
    return function outer(...params) {
        allParams = allParams.concat(params);
        if(allParams.length >= fn.length) {
            let result = fn(...allParams);
            //this for subsequent function calls
            allParams = [];
            return result;
        }
        else return outer;
        
    }
}

/**
 * Limitation of "My Solution", If you called function on wromg syntax, rest calls with fails -
 * let newTwoNumberSum = curry(twoNumberSum);
 * newTwoNumberSum(1);
 * newTwoNumberSum(1)(2); // this call with fail,
 * 
 */

/**
 * Improved sulution - from javascript.info (currying section)
 */

function improvedCurry(fn) {
    return function wrapperFunction(...params) {
        if(fn.length === params.length) return fn(...params);
        else return function(...params2) {
            return wrapperFunction(...params.concat(params2));
        }
    }
}

let newThreeNumberSum2 = improvedCurry(threeNumberSum);

console.log(newThreeNumberSum2(1,2,3));
console.log(newThreeNumberSum2(1)(2)(3));
console.log(newThreeNumberSum2(1,2)(3));
console.log(newThreeNumberSum2(1)(2,3));

/**
 * here even if you call syntax wrong, next calls are not affected by it
 */

// console.log(newThreeNumberSum2(1,2));
// console.log(newThreeNumberSum2(1)(2,3));