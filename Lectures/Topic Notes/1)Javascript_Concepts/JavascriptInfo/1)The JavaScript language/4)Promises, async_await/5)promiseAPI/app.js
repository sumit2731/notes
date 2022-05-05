//--------------------------Ex 1------------------------------------

/* 
Polyfill implementation of Promise.allSettled. here concept used is mapping of promise, explained in promise chaining notes,
code block 1.2
*/

if (!Promise.allSettled) {
    const rejectHandler = reason => ({ status: 'rejected', reason });
  
    const resolveHandler = value => ({ status: 'fulfilled', value });
  
    Promise.allSettled = function (promises) {
      const convertedPromises = promises.map(p => Promise.resolve(p).then(resolveHandler, rejectHandler));
      return Promise.all(convertedPromises);
    };
  }





