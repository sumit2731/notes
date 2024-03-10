/**
 * In html
 */

<button onclick="doSomething()">Click me!</button>;

/**
 * In js
 */

const button = document.querySelector(".btn");

function doSomething() {
  // Stuff here
}

button.addEventListener("click", doSomething);

/**
 * In jsx
 */

function App() {
  function doSomething() {
    // Stuff here
  }

  return <button onClick={doSomething}>Click me!</button>;
}

/**
 * why use react way
 * 
 * 
 * a)Automatic cleanup. Whenever we add an event listener, we're also supposed to remove it when 
 *  we're done, with removeEventListener. If we forget to do this, we'll introduce a memory leak?.
 *  React automatically removes listeners for us when we use “on X” handler functions.
  b)Improved performance. By giving React control over the event listeners, it can optimize things
    for us, like batching multiple event listeners together to reduce memory consumption.
  c)No DOM interaction. React likes for us to stay within its abstraction. We generally try and 
    avoid interacting with the DOM directly. In order to use addEventListener, we have to look up
    the element with querySelector. This is something we should avoid. The “happy path” in React
    involves letting React do the DOM manipulation for us.
 */

/**
 * CamelCasing -
 * InHtml - onclick, onfocus
 * onClick, onFocus, onTransitionEnd
 */

/**
 * Difference form html
 *
 * a)pass function refrence
 */
