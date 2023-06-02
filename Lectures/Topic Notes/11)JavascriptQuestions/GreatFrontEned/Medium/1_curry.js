/**
 * First IMplementation-
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
        const curried = curry(function (val) {
            return this.multiplier * val;
        });

        const obj = { multiplier: 5, mul: curried };
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
 * Course solution - DSimilar to mine
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