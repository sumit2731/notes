/**
 * A Promise object serves as a link between the executor (the “producing code” or “singer”) and the consuming functions 
 * (the “fans”), which will receive the result or error. Consuming functions can be registered (subscribed) using methods 
 * .then, .catch and .finally.
 * 
 * The function passed to new Promise is called the executor. When new Promise is created, the executor runs automatically. 
 * It contains the producing code which should eventually produce the result.Its arguments resolve and reject are callbacks 
 * provided by JavaScript itself. Our code is only inside the executor.

When the executor obtains the result, be it soon or late, doesn’t matter, it should call one of these callbacks:
  resolve(value) — if the job finished successfully, with result value.
  reject(error) — if an error occurred, error is the error object.

The promise object returned by the new Promise constructor has these internal properties:

  state — initially "pending", then changes to either "fulfilled" when resolve is called or "rejected" when reject is called.
  result — initially undefined, then changes to value when resolve(value) called or error when reject(error) is called.
*/



let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000);
});

promise.then(function(result) {
  alert(result); // 1
  return result * 2;
});

promise.then(function(result) {
  alert(result); // 1
  return result * 2;
});

promise.then(function(result) {
  alert(result); // 1
  return result * 2;
});

/* 
In practice, an executor usually does something asynchronously and calls resolve/reject after some time, but it
  doesn’t have to. We also can call resolve or reject immediately, like this:
*/

let promise = new Promise(function(resolve, reject) {
  // not taking our time to do the job
  resolve(123); // immediately give the result: 123
});

/**
 * Promise API - then, catch, finally. see finally in blogs.
 * finaly-
 *  a)A finally handler has no arguments. In finally we don’t know whether the promise is successful or not. That’s all right, 
 *    as our task is usually to perform “general” finalizing procedures.
 *  b)A finally handler passes through results and errors to the next handler.
 */

 new Promise((resolve, reject) => {
  setTimeout(() => resolve("result"), 2000)
})
  .finally(() => alert("Promise ready"))
  .then(result => alert(result)); // <-- .then handles the result

/* 
Promised based solution of loadScript problem 
*/

function loadScript(src) {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Script load error for ${src}`));
    document.head.append(script);
  });

}

let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

promise.then(
  script => alert(`${script.src} is loaded!`),
  error => alert(`Error: ${error.message}`)
);

//Another Handler not possible with Callback
promise.then(script => alert('Another handler...'));
