/* 
Question - what happens when promise is passed to promise.resolve
it reurns the promise passed instead of creating new one
*/

// in case of primitive values
const p = Promise.resolve('hello');
// true
console.log(p instanceof Promise);
// true, p is returned as is it as it is promise
Promise.resolve(p) === p; 
