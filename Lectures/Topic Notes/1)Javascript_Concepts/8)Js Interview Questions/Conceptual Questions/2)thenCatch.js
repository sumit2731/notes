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
 * when a failed promise is handled by catch. catch block returns the promise. which is caught by then blcks fater it
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

Promise.resolve(1).then(2).then(Promise.resolve(3)).then(console.log);
