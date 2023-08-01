function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
    let result = func.apply(this, args); 
      return result;
    }

    return function (...args2) {
      return curried.apply(this, [...args, ...args2]);
    };
  };
}

function addTwo(a, b) {
  return a + b;
}
const curriedAddTwo = curry(addTwo);
console.log(curriedAddTwo(3)(4)); // 7
console.log(curriedAddTwo(3, 4)); // 7

const alreadyAddedThree = curriedAddTwo(3);
console.log(alreadyAddedThree(4)); // 7

function multiplyThree(a, b, c) {
  return a * b * c;
}
const curriedMultiplyThree = curry(multiplyThree);
console.log(curriedMultiplyThree(4)(5)(6)); // 120
console.log(curriedMultiplyThree(4)(5, 6)); // 120
console.log(curriedMultiplyThree(4, 5)(6)); // 120
console.log(curriedMultiplyThree(4, 5, 6)); // 120

const containsFour = curriedMultiplyThree(4);
const containsFourMulFive = containsFour(5);
containsFourMulFive(6); // 120
