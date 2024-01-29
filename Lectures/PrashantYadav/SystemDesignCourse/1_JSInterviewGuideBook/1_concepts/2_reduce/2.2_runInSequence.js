/**
 * Run in Pipe
 *
 * Let’s say we have an array of functions and a value, the value has to be passed through these functions
 * in a pipe. Like the initial value has to be passed to the first function and then the returned value
 * from the first function has to be passed to the next function and so on.
 */
// functions
const upperCase = (str) => {
  return str.toUpperCase();
};
const reverse = (str) => {
  return str.split("").reverse().join("");
};
const append = (str) => {
  return "Hello " + str;
};
// array of functions to be piped
const arr = [upperCase, reverse, append];
// initial value
const initialValue = "learnersbucket";

const finalValue = arr.reduce((previousValue, currentElement) => {
  // pass the value through each function
  // currentElement is the function from the array
  const newValue = currentElement(previousValue);
  // return the value received from the function
  return newValue;
}, initialValue);
console.log(finalValue);

//Similarly, if we want to run a promise in a sequence we can do the same with this.

// helper function to create a promise
// that resolves after a certain time
const asyncTask = function (time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Completing ${time}`), 100 * time);
  });
};
// create an array of task
const promises = [
  asyncTask(3),
  asyncTask(1),
  asyncTask(7),
  asyncTask(2),
  asyncTask(5),
];
// main function to run promise in series
const asyncSeriesExecuter = function (promises) {
  promises.reduce((acc, curr) => {
    // return when previous promise is resolved
    return acc.then(() => {
      // run the current promise
      return curr.then((val) => {
        console.log(val);
      });
    });
  }, Promise.resolve());
};
asyncSeriesExecuter(promises);

/**
 * Explanation- This produces this code
 */

Promise.resolve()
  .then(() => {
    return p1.then((val) => console.log(val));
  })
  .then(() => {
    p2.then((val) => console.log(val));
  })
  .then(() => {
    p3.then((val) => console.log(val));
  });
