/**
 * @MySolution is better, look at it
 */

Promise.myRace = function (promiseArray) {
  return new Promise((resolve, reject) => {
    for (let promise of promiseArray) {
      promise.then(
        (val) => resolve(val),
        (err) => reject(err)
      );
    }
  });
};

/**
 * @Course Solution
 */

Promise.myRace = function (promiseArray) {
  return new Promise((resolve, reject) => {
    promiseArray.forEach((promise) => {
      promise.then(resolve).catch(reject);
    });
  });
};

Promise.myAny = function (promiseArray) {
  return new Promise((resolve, reject) => {
    let failedPromiseCount = 0;
    for (let promise of promiseArray) {
      promise
        .then((val) => resolve(val))
        .catch((err) => {
          failedPromiseCount++;
          if (failedPromiseCount == promiseArray.length)
            reject("all promises rejected");
        });
    }
  });
};

Promise.myAll = function (promiseArray) {
  return new Promise((resolve, reject) => {
    const resultArray = [];
    let resolvedPromiseCount = 0;
    for (let i = 0; i < promiseArray.length; i++) {
      promiseArray[i]
        .then((val) => {
          resultArray[i] = val;
          resolvedPromiseCount++;
          if (resolvedPromiseCount == promiseArray.length) resolve(resultArray);
        })
        .catch((err) => reject(err));
    }
  });
};

/**
 * Solution from start
 */

Promise.myAllSettled = function (promiseArray) {
  return new Promise((resolve, reject) => {
    const resultArray = [];
    let fulfilledCount = 0;
    for (let i = 0; i < promiseArray.length; i++) {
      promiseArray[i]
        .then((value) => (resultArray[i] = { status: "fulfilled", value }))
        .catch((error) => (resultArray[i] = { status: "rejected", error }))
        .finally(() => {
          fulfilledCount++;
          if (fulfilledCount == promiseArray.length) resolve(resultArray);
        });
    }
  });
};

/**
 * Solution using promise.all
 */
Promise.myAllSettled = function (promiseArray) {
  let newPromiseArray = promiseArray.map((promise) =>
    promise.then((value) => ({ status: "fulfilled", value }))
  );
  //modifying the existing promise does not work
  // for(let promise of promiseArray) {
  //     promise = promise.then(
  //         value => ({status: 'fulfilled', value}),
  //         error => ({status: 'rejected', error})
  //     )
  // }
  return Promise.all(newPromiseArray);
};
