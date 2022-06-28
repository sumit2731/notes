/**
 * https://betterprogramming.pub/10-javascript-promise-challenges-before-you-start-an-interview-c9af8d4144ec
 * question 9
 */

const timer1 = setTimeout(() => {
  console.log("timer1");

  const promise1 = Promise.resolve().then(() => {
    console.log("promise1");
  });
}, 0);

const timer2 = setTimeout(() => {
  console.log("timer2");
}, 0);
