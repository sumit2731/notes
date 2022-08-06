/**
 * https://betterprogramming.pub/10-javascript-promise-challenges-before-you-start-an-interview-c9af8d4144ec
 * question 9
 */

/**
 * After exection of microqueue task, we check if there any task left in mcrotask queue, if yes we execute it.
 * If not only then we movee to macro queue
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
