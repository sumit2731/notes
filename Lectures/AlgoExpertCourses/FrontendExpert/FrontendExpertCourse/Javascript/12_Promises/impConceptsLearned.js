/**
 *1)queueMicrotask adds a task to microtask queue

 2)callbacks to then and catch are optional.
  If then does not have a rejected callback, promise is still passed as rejected into next handler
  Same way if catch is not having a handler, promise is passed as unhandled to next handler
 */

/**
 * 3) -
 */
(async () => {
  let rejectedVal;

  const p16 = new Promise((resolve, reject) => {
    reject(10);
  })
    /**
     * Since callback to catch was not provided, promise returned by catch will also be rejected
     * so contriol goes to next catch.
     *
     * if we do not provide next catch then we get error as promise error is unhandled
     */
    .catch()

    .then((val) => {
      rejectedVal = val;
    })
    .catch((val) => {
      console.log("this will not be executed");
    });

  await new Promise(setImmediate);

  console.log(rejectedVal == 10);
  console.log(rejectedVal);
})();
