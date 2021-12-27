function curry(fn) {
    let arg = [];
    function dummyFuncion(...argument) {
        if(arg.length === fn.length) {
            let arguments = [...arg];
            arg = [];
            return fn(...arguments);
        }
        else {
            arg = arg.concat(...argument);
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

//console.log(newTwoNumberSum(1)(2)());
console.log(newThreeNumberSum(1,2)(3)());
console.log(newThreeNumberSum(1)(2,3)());
console.log(newThreeNumberSum(1,2,3)());

/* 
advancedSum(1,2,3)
advancedSum(1)(2)(3)
*/