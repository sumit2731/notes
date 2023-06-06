//--------------------------Ex 1------------------------------------

/**
 * Promise 3 sometimes fails sometimes passes, but in cases it fails we handle the error and revive the promise
 */

Promise.all([
  new Promise((resolve) => setTimeout(() => resolve(1), 3000)), // 1
  new Promise((resolve) => setTimeout(() => resolve(2), 2000)), // 2
  new Promise((resolve, reject) =>
    setTimeout(() => (Math.random() > 0.5 ? resolve(3) : reject(3)), 1000)
  ).catch((val) => val), // 3
]).then((val) => console.log(val));


/* 
PolyFill of Promise.all. edges cases taken care -
  1)Non promise value can also be passed to Promise.all
  2)On error of single promise, whole promise gets rejected with error.

  if we want to make this suitable for any iterable, then get rid of map function

*/

if(true) {
  Promise.all = function (promiseArray) {
      return new Promise((resolve, reject) => {
          let promiseResults = Array(promiseArray.length), resolvedPromiseCount = 0;
          promiseArray = promiseArray.map((promise,promiseIndex) => Promise.resolve(promise)
          .then(val => {
              promiseResults[promiseIndex] = val;
              resolvedPromiseCount++;
              if(resolvedPromiseCount == promiseArray.length) resolve(promiseResults);
          })
          .catch(err => reject(err))
          );
      })

  }
}

/* 
Polyfill implementation of Promise.allSettled. here concept used is mapping of promise, explained in promise chaining notes,
code block 1.2

This is course solution
*/

if (!Promise.allSettled) {
    const rejectHandler = reason => ({ status: 'rejected', reason });
  
    const resolveHandler = value => ({ status: 'fulfilled', value });
  
    Promise.allSettled = function (promises) {
      //Promise.resolve(p) to handle cases when non promises values are passed to Promise.allSEttled
      const convertedPromises = promises.map((p) =>
        Promise.resolve(p).then(resolveHandler, rejectHandler)
      );
      return Promise.all(convertedPromises);
    };
  }


/**
 * @MySolution for polyfill of Promise.allSettled
 */

if (true) {
  Promise.allSettled = function (promiseArray) {
      let promiseResults = Array(promiseArray.length), settledPromiseCount = 0;
      return new Promise((resolve, reject) => {
          promiseArray = promiseArray.map((promise, promiseIndex) => Promise.resolve(promise)
              .then(value => promiseResults[promiseIndex] = { status: "fulfilled", value })
              .catch(reason => promiseResults[promiseIndex] = { status: "rejected", reason})
              .finally(() => {
                  settledPromiseCount++;
                  if (settledPromiseCount === promiseArray.length) resolve(promiseResults)
              })
          )
      })
  }
}


//polyFill for race

Promise.race = function(promiseArray) {
  return new Promise((resolve, reject) => {
      for(let promise of promiseArray) promise.then(val => resolve(val)).catch(err => reject(err))
  })
}

/* 
Testing of PolyFills

*/

function promiseCreator(val, ms) {
  return new Promise((resolve, reject) => setTimeout(() => resolve(val), ms))
}

let promiseArray = Array.from({ length: 5 }, (val, index) => promiseCreator(index, index * 10));
promiseArray.push(Promise.reject("Rejected"));



Promise.all(promiseArray)
    .then(resultArray => console.log(resultArray))
    .catch(err => console.log(err))

Promise.allSettled(promiseArray)
    .then(resultArray => console.log(resultArray))
    .catch(err => console.log(err))




