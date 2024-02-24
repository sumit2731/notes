"use strict";

var curFib = 0;
/**
 * sending message to server
 */
// self.postMessage("Hello from web worker");

self.onmessage = onMessage;

// TODO

// **********************************

function onMessage(evt) {
  console.log(evt);
  console.log(`received in web worker: ${evt.data}`);
  getNextFib();
}

function getNextFib() {
  var fibNum = fib(curFib);
  self.postMessage({
    idx: curFib,
    fib: fibNum,
  });
  curFib++;
  /**
   *  since this is calling it immediately,we're basically gonna be in a tight loop where nothing can
   * interrupt it.If we wanted to yield to allow a message to come in, we could do a very simple sort
   * of a yield back to the event loop by saying start it up on the next event loop.
   */
  //getNextFib();
  setTimeout(getNextFib, 0);
}

function fib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}
