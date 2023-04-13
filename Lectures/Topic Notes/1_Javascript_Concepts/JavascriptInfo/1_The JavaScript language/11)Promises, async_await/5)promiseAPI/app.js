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
Polyfill implementation of Promise.allSettled. here concept used is mapping of promise, explained in promise chaining notes,
code block 1.2
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





