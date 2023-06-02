/**
sum(1)(); // 1
sum(1)(2)(); // 3
sum(1)(2)(-3)(); // 0

things missed in first solution -
    a)missed 0 case, 0 is also a falsy value

 */

function sum(number) {
    let totalSum = number;
    function innerFuntion(num) {
        if ((num != 0) && !num) return totalSum;
        else {
            totalSum += num;
            return innerFuntion;
        }
    }
    return innerFuntion;
}

/* 
Above solution does not address these cases -

we want reusuability i.e partially applied functions

const addTwo = sum(2);
console.log(addTwo(3)());
console.log(addTwo(4)());
console.log(addTwo(3)(4)());

what we want is partial applied functions can be reused x number of times.
below solution address this point. but here also until an unless one complete execution is completed result of diffrent 
    executions interfere with each other
*/



function sum(initialNum) {
    let totalSum = initialNum;
    function innerFuntion(num) {
        if (!num && (num != 0)) {
            let tempSum = totalSum;
            totalSum = initialNum;
            return tempSum;
        }
        else {
            totalSum += num;
            return innerFuntion;
        }
    }
    return innerFuntion;
}
const addTwo = sum(2);
console.log(addTwo(3)());
console.log(addTwo(4)());
console.log(addTwo(3)(4)());


/**
 * Course Silution - Handles all use cases
 */

function sum(numberA) {
    return function innerFunction(numberB) {
        if(numberB === undefined) return numberA;
        else return sum(numberA + numberB)
    }
}

// const addTwo = sum(2);
// console.log(addTwo(3)());
// console.log(addTwo(4)());
// console.log(addTwo(3)(4)());
