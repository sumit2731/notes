/**
 * Currying is the technique of converting a function that takes multiple arguments into a sequence of functions that each takes a 
 * single argument.

    Implement the curry function which accepts a function as the only argument and returns a function that accepts single arguments
    and can be repeatedly called until at least the minimum number of arguments have been provided (determined by how many arguments
    the original function accepts). The initial function argument is then invoked with the provided arguments.
 */

/**
 * Example -
 * 
    function addTwo(a, b) {
        return a + b;
    }

    const curriedAddTwo = curry(addTwo);
    curriedAddTwo(3)(4); // 7

    const alreadyAddedThree = curriedAddTwo(3);
    alreadyAddedThree(4); // 7
    
    
    function multiplyThree(a, b, c) {
        return a * b * c;
    }

    const curriedMultiplyThree = curry(multiplyThree);
    curriedMultiplyThree(4)(5)(6); // 120

    const containsFour = curriedMultiplyThree(4);
    const containsFourMulFive = containsFour(5);
    containsFourMulFive(6); // 120
 */






/**
 * First Implementation-
 */

function curry(callbackFn) {
    let reqParamCount = callbackFn.length, paramsPassed = [];
    return function inner(...args) {
        if ((paramsPassed.length + args.length) == reqParamCount) {
            let tempPassedParams = [...paramsPassed];
            paramsPassed = [];
            return callbackFn.call(this, ...tempPassedParams, ...args);

        }
        else {
            paramsPassed = paramsPassed.concat(args);
            return inner;
        }
    }
}

/**
 * Failed cases in first implementation -
 * 
 * 1)here if in case of partial functions , state is shared amoung multiple implementation. if in one case we do not pass
 *  full params , it will interfere with second one
 * 
 *  const mulThree = (a, b, c) => a * b * c;

    const curried = curry(mulThree);

    console.log(curried()(4)()(3)()(2))//.toBe(24);
    console.log(curried()()()()(4)(2)(3))//.toBe(24);

    2)cannot access value of this
        const curriedMultiply = curry(function (val) {
            return this.multiplier * val;
        });

        const obj = { multiplier: 5, mul: curriedMultiply };
        expect(obj.mul()).toBeInstanceOf(Function);
        expect(obj.mul(7)).toBe(35);
 */

/**
 * Second Implementation
 * 
 * solved second problem of this
 * passes all test cases
 */

function curry2(callbackFn) {
    let reqParamCount = callbackFn.length, paramsPassed = [];
    return function inner(...args) {
        if ((paramsPassed.length + args.length) == reqParamCount) {
            let tempPassedParams = [...paramsPassed];
            paramsPassed = [];
            //this solved this case
            return callbackFn.call(this, ...tempPassedParams, ...args);

        }
        else {
            paramsPassed = paramsPassed.concat(args);
            return inner;
        }
    }
}

/**
 * My Solution using approach of sum in easier section
 */
function curry3(callbackFn) {
    return function outerFunction(...args1) {
        //this handling cases where function accepts single argument
        if (args1.length >= callbackFn.length) return callbackFn.call(this, ...args1);
        return function innerFunction(...args2) {
            if ((args1.length + args2.length >= callbackFn.length)) return callbackFn.call(this, ...args1, ...args2);
            else return outerFunction(...args1, ...args2);
        }

    }
}

/**
 * Course solution - Similar to mine
 */

export default function curr4y(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        }

        return function (...args2) {
            return curried.apply(this, [...args, ...args2]);
        };
    };
}