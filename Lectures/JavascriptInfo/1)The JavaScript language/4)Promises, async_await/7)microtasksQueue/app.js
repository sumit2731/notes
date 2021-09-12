let promise = Promise.resolve();

promise.then(() => console.log("promise done!"));

alert("code finished"); // this alert shows first

/* If order matters */

Promise.resolve()
  .then(() => alert("promise done!"))
  .then(() => console.log("code finished"));