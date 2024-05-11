const p1 = new MyPromise((resolve, reject) => {});
console.log(p1.state == STATE.PENDING);

const p2 = new MyPromise((resolve, reject) => resolve(10));

console.log(p2.state == STATE.FULFILLED);
console.log(p2.value == 10);

const p3 = new MyPromise((resolve, reject) => reject(10));

console.log(p3.state == STATE.REJECTED);
console.log(p3.value == 10);

const p4 = new MyPromise((resolve, reject) => {
  throw "new Error";
});

console.log(p4.state == STATE.REJECTED);
console.log(p4.value == "new Error");

(async () => {
  let resolvedVal;

  const p5 = new MyPromise((resolve, reject) => {
    resolve(10);
  }).then((val) => {
    resolvedVal = val;
  });

  await new Promise(setImmediate);

  console.log(resolvedVal == 10);
})();

/**
 * @IMp
 */

// (async () => {
//   let rejectededVal;

//   const p6 = new MyPromise((resolve, reject) => {
//     resolve(10);
//   }).then((val) => {
//     rejectededVal = val;
//   });

//   await new Promise(setImmediate);

//   console.log(rejectededVal == 10);
// })();

/**
 * @IMp
 */

// (async () => {
//   let resolvedVal;

//   const p7 = new MyPromise((resolve, reject) => {
//     resolve(10);
//   }).then((val) => {
//     resolvedVal = val;
//   });
//   console.log(resolvedVal == undefined);

//   await new Promise(setImmediate);

//   console.log(resolvedVal == 10);
// })();

/**
 * @IMp
 * This handles case how catch is directly called, skipping all then.
 *
 * because callbacks to then are optional, if not provided they still returns promise, but state is of orignal promise
 */

// (async () => {
//   let resolvedVal;
//   let rejectedVal;

//   const p8 = new MyPromise((resolve, reject) => {
//     reject(10);
//   })
//     .then((val) => {
//       resolvedVal = val;
//     })
//     .catch((val) => {
//       rejectedVal = val;
//     });

//   await new Promise(setImmediate);
//   console.log(resolvedVal == undefined);
//   console.log(rejectedVal == 10);
// })();

/**
 * Catch is called asynchrnously
 */

// (async () => {
//   let rejectedVal;

//   const p9 = new MyPromise((resolve, reject) => {
//     reject(10);
//   }).catch((val) => {
//     rejectedVal = val;
//   });

//   console.log(rejectedVal == undefined);
//   await new Promise(setImmediate);
//   console.log(rejectedVal == 10);
// })();

//can be chained

/* (async () => {
  let resolvedVals = [];

  const p10 = new MyPromise((resolve, reject) => {
    resolve(10);
  })
    .then((val) => {
      resolvedVals.push(val);
      return 15;
    })
    .then((val) => {
      resolvedVals.push(val);
      return 20;
    })
    .then((val) => {
      resolvedVals.push(20);
    });
  await new Promise(setImmediate);
  console.log(resolvedVals[0] == 10);
  console.log(resolvedVals[1] == 15);
  console.log(resolvedVals[2] == 20);
})(); */

/**
 * Then and catches can be chained togather
 */

/* (async () => {
  let resolvedVals = [];
  let rejectedVals = [];

  const p11 = new MyPromise((resolve, reject) => {
    resolve(10);
  })
    .then((val) => {
      resolvedVals.push(val);
      return 15;
    })
    .then((val) => {
      resolvedVals.push(val);
      throw 20;
    })
    .catch((val) => {
      rejectedVals.push(val);
      return 25;
    })
    .then(
      (val) => {
        resolvedVals.push(val);
      },
      (val) => {
        rejectedVals.push(val);
      }
    );
  await new Promise(setImmediate);
  console.log(resolvedVals[0] == 10);
  console.log(resolvedVals[1] == 15);
  console.log(rejectedVals[0] == 20);
  console.log(resolvedVals[2] == 25);
})(); */

/**
 * Throwing an error in then callback rejects the promise
 */

/* (async () => {
  let rejectedVal;

  const p12 = new MyPromise((resolve, reject) => {
    resolve(10);
  })
    .then((val) => {
      throw val * 2;
    })
    .catch((val) => {
      rejectedVal = val;
    });

  await new Promise(setImmediate);

  console.log(rejectedVal == 20);
})(); */

/**
 * Throwing an error in catch callback rejects the promise
 */
/* (async () => {
  let rejectedVal;

  const p13 = new MyPromise((resolve, reject) => {
    reject(10);
  })
    .catch((val) => {
      throw val * 2;
    })
    .catch((val) => {
      rejectedVal = val;
    });

  await new Promise(setImmediate);

  console.log(rejectedVal == 20);
})(); */
/**
 * Then without callbacks passes through
 */
/* (async () => {
  let resolvedVal;

  const p14 = new MyPromise((resolve, reject) => {
    resolve(10);
  })
    .then()
    .then((val) => {
      val = val;
    });

  await new Promise(setImmediate);

  console.log(rejectedVal == 20);
})(); */

/**
 * Then can be called multiple times on same promise
 */

/* (async () => {
  let resolvedVals = [];

  const p15 = new MyPromise((resolve, reject) => {
    resolve(10);
  });

  p15.then((val) => {
    resolvedVals.push(val);
  });
  p15.then((val) => {
    resolvedVals.push(val * 2);
  });

  await new Promise(setImmediate);

  console.log(resolvedVals[0] == 10);
  console.log(resolvedVals[1] == 20);
})(); */

/**
 * @IMp
 * Catch without callbacks can be passed through
 */

(async () => {
  let rejectedVal;

  const p16 = new Promise((resolve, reject) => {
    reject(10);
  })
    .catch()
    .then((val) => {
      rejectedVal = val;
    });

  await new Promise(setImmediate);

  console.log(rejectedVal == 10);
  console.log(rejectedVal);
})();

/**
 * Chained callbacks are not returned until previous one return
 */

(async () => {
  let resolve;
  let resolvedVal;

  const p17 = new Promise((res, rej) => {
    resolve = res;
  }).then((val) => {
    resolvedVal = val;
  });

  await new Promise(setImmediate);

  console.log(resolvedVal == undefined);
  resolve(5);
  await new Promise(setImmediate);
  console.log(rejectedVal == 5);
})();
