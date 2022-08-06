/* 
then and catch always returns a promise.that promise is resolved with value returned by callbacks passed to them.
if callback returns a promise, then promise returned is resolved when returned promise is resolved



*/


//https://medium.com/frontend-canteen/10-code-challenges-to-master-promise-then-and-promise-catch-3da2bdea1d97

/**
 * Challenge 3
 *
 * In promise chaining resolved promise gets across catch block and travels to then blocks after catch.
 * even if do not return anything form a promise, next promise in chain gets undefined
 */

Promise.resolve(1)
  .then((res) => {
    console.log(res);
    return 2;
  })
  .catch((err) => {
    return 3;
  })
  .then((res) => {
    console.log(res);
  })
  .then((res) => {
    console.log(res);
  });

/**
 * 1
 * 2
 * undefined
 */

/**
 * challenge4
 * 
 *  promise2 = promise1.then(onFulfilled, onRejected);
 * If either onFulfilled or onRejected returns a value x, run the Promise Resolution Procedure [[Resolve]](promise2, x).
 * If either onFulfilled or onRejected throws an exception e, promise2 must be rejected with e as the reason.
 * 
 * If onFulfilled is not a function and promise1 is fulfilled, promise2 must be fulfilled with the same value as promise1
 * If onRejected is not a function and promise1 is rejected, promise2 must be rejected with the same reason as promise1.
 * 
 * https://promisesaplus.com/#point-40
 */

Promise.reject(1)
  .then((res) => {
    console.log(res);
    return 2;
  })
  .catch((err) => {
    return 3;
  })
  .then((res) => {
    console.log(res);
  })
  .then((res) => {
    console.log(res);
  });

/**
 * 3
 * undefined
 */

/**
 * A Promises will be resolved and rejected only once. But on Promise you can execute any number of callbacks.
 * all then blocks will be resolved with same value
 */

const promise = new Promise((resolve, reject) => {
  resolve(1);
});

promise.then((res) => {
  console.log("first then: ", res);
  return 2;
});

promise.then((res) => {
  console.log("second then: ", res);
  return 3;
});

promise.then((res) => {
  console.log("third then: ", res);
});

/**
 * first then: 1
 * second then: 1
 * tird then: 1
 */

/**
 * Challenge 6 - retuning the error object does not cause error
 */

Promise.resolve()
  .then(() => {
    return new Error("error!!!");
  })
  .then((res) => {
    console.log("then: ", res);
  })
  .catch((err) => {
    console.log("catch: ", err);
  });

/**
 * Challenge 7
 * The value returned by .then or .catch cannot be the promise itself, otherwise, it will cause an infinite loop.
 */

const promise11 = Promise.resolve().then(() => {
  return promise11;
});

promise11.catch(console.err);

//anothr ex -

let p1 = new Promise((resolve, reject) => {
  resolve(1);
});

let p2 = p1.then((val) => p2);

/**
 * Challenge 8
 *  If argument to then or catch is not function then it is ignored
 */

Promise.resolve(1)
  .then(2)
  .then(Promise.resolve(3))
  .then(console.log);


/**
 * https://promisesaplus.com/#the-promise-resolution-procedure
 * If value to which a promise resolved is again a promise, then it then block we do not receive promise, we receive 
 *  resolved value of that promise, here we checked this at 2 levels but this can go to any level
 */
 let p11 = new Promise((resolve,reject) => setTimeout(()=> resolve(1),5000));

 p11.then(val => console.log("p1 resolved"));
 
 let p21 = new Promise((resolve,reject) => setTimeout(()=> resolve(p11),5000));
 p21.then(val => console.log("p2 resolved"));
 
 let p3 = Promise.resolve(p21)
 
 p3.then(val => console.log(val));

 /**
  * Diffrence between resolved and fullfilled
  */

  //https://masteringjs.io/tutorials/fundamentals/promise-resolve