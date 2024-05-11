/**
 * My solution is better - handles these cases
 *
 * a)passed into is not array
 * b)induival elements of array are not promises
 */

Promise.myRace = (promises = []) => {
  return new Promise((res, rej) => {
    const promiseArray = [...promises];
    for (let i = 0; i < promiseArray.length; i++) {
      promiseArray[i] = Promise.resolve(promiseArray[i]);
      promiseArray[i].then((val) => res(val)).catch((err) => rej(err));
    }
  });
};

Promise.myAny = (promises = []) => {
  return new Promise((res, rej) => {
    const promiseArray = [...promises];
    let rejectedPromiseCount = 0;
    for (let i = 0; i < promiseArray.length; i++) {
      promiseArray[i] = Promise.resolve(promiseArray[i]);
      promiseArray[i]
        .then((val) => res(val))
        .catch((err) => {
          rejectedPromiseCount++;
          if (rejectedPromiseCount == promiseArray.length)
            rej("all promises rejected");
        });
    }
  });
};

Promise.myAll = (promises = []) => {
  return new Promise((res, rej) => {
    let promiseArray = [...promises],
      resolvedValues = new Array(promiseArray.length),
      resolvedValueCount = 0;
    for (let i = 0; i < promiseArray.length; i++) {
      promiseArray[i] = Promise.resolve(promiseArray[i]);
      promiseArray[i]
        .then((val) => {
          resolvedValues[i] = val;
          resolvedValueCount++;
          if (resolvedValueCount == promiseArray.length) res(resolvedValues);
        })
        .catch((err) => {
          rej(err);
        });
    }
  });
};

Promise.myAllSettled = (promises = []) => {
  return new Promise((res, rej) => {
    let settledPromiseCount = 0;
    const promiseArray = [...promises],
      resolvedValues = new Array(promiseArray.length);
    for (let i = 0; i < promiseArray.length; i++) {
      promiseArray[i] = Promise.resolve(promiseArray[i]);
      promiseArray[i]
        .then((value) => {
          resolvedValues[i] = {
            status: "fulfilled",
            value,
          };
        })
        .catch((error) => {
          resolvedValues[i] = {
            status: "rejected",
            error,
          };
        })
        .finally(() => {
          settledPromiseCount++;
          if (settledPromiseCount === promiseArray.length) res(resolvedValues);
        });
    }
  });
};

Promise.myAllSettled([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3),
]).then((val) => console.log(val));
