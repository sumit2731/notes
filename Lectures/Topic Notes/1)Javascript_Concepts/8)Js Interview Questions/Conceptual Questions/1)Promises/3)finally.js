/* 
a)A finally handler has no arguments. In finally we don’t know whether the promise is successful or not. That’s all right, 
as our task is usually to perform “general” finalizing procedures.

Please take a look at the example above: as you can see, the finally handler has no arguments, and the promise outcome is handled by the next handler.

b)A finally handler “passes through” the result or error to the next suitable handler. 

*/


new Promise((resolve, reject) => {
    setTimeout(() => resolve("value"), 5000);
  })
    .finally(() => console.log("Promise ready")) // triggers first, but only when promise is fulfilled or rejected
    .then(result => console.log(result)); // <-- .then shows "value"