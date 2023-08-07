/* 
Sometimes it's helpful to ensure a function runs only once during the lifecycle of the website, e.g. for setting up logging, 
initializing an environment, etc.

Implement a function that accepts a callback and restricts its invocation to at most once. Subsequent calls of the function 
will return the result of the first invocation of the callback function. The callback function is invoked with the this binding
and arguments of the created function.

Ex -

let i = 1;

function incrementBy(value) {
  i += value;
  return i;
}

const incrementByOnce = once(incrementBy);
incrementByOnce(2); // i is now 3; The function returns 3.
incrementByOnce(3); // i is still 3; The function returns the result of the first invocation, which is 3.
i = 4;
incrementByOnce(2); // i is still 4 as it is not modified. The function returns the result of the first invocation, which is 3.

*/

//my first solution

function once(func) {
    let map = new Map();
    return function (...args) {
        if (!map.get(func)) {
            map.set(func, func.call(this,...args));
        }
        return map.get(func)
    }
}

/* 
Course solution - you used map. map can be used if you want to store result argument wise

*/

function once(func) {
    let ranOnce = false;
    let value;
  
    return function (...args) {
      if (!ranOnce) {
        value = func.apply(this, args);
        ranOnce = true;
      }
  
      return value;
    };
  }

/*
.call is added to handle this usecase

function multiPly (val) {
    return this.multiplier * val;
}

const multiplyOnce = once(multiPly);

const obj = { multiplier: 5, mul: multiplyOnce}

console.log(obj.mul(6));
console.log(obj.mul(7)); */