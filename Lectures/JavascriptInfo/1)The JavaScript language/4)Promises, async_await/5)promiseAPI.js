/* 
Here are 6 static methods in the Promise class-
    
    Promise.all - accepts an iterable (in most cases an array) of promises. But if any of those objects is not a 
            promise, it’s passed to the resulting array “as is” If any of the promises is rejected, the promise 
            returned by Promise.all immediately rejects with that error.

    Promise.allSettled - This is a recent addition to the language. Old browsers may need polyfills.
        Promise.allSettled just waits for all promises to settle, regardless of the result. The resulting 
        array has:

            {status:"fulfilled", value:result} for successful responses,
            {status:"rejected", reason:error} for errors.

    Promise.race - waits only for the first settled promise and gets its result (or error).
        let promise = Promise.race(iterable);

    Promise.any - Promise.race, but waits only for the first fulfilled promise and gets its result. If all of the
     given promises are rejected, then the returned promise is rejected with AggregateError – a special error 
     object that stores all promise errors in its errors property.


    Promise.resolve(value) creates a resolved promise with the result value.
        Same as:
            let promise = new Promise(resolve => resolve(value));


    Promise.reject(error) creates a rejected promise with error.
        Same as:
            let promise = new Promise((resolve, reject) => reject(error));
*/