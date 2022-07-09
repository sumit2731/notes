/**
 * Elements are the smallest building blocks of React apps.One might confuse elements with a more widely known concept of
 * “components”. We will introduce components in the next section. Elements are what components are “made of”,
 *
 * Unlike browser DOM elements, React elements are plain objects, and are cheap to create. React DOM takes care of updating the
 * DOM to match the React elements.
 *
 * Rendering an Element into the DOM
 */

const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById("root"));

/**
 * Updating the Rendered Element
 *
 * React elements are immutable. Once you create an element, you can’t change its children or attributes. With our knowledge so far,
 * the only way to update the UI is to create a new element, and pass it to ReactDOM.render().
 */

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById("root"));
}

setInterval(tick, 1000);

/**
 * In practice, most React apps only call ReactDOM.render() once. In the next sections we will learn how such code gets
 * encapsulated into stateful components.
 */

/**
 * React Only Updates What’s Necessary
 *
 * https://17.reactjs.org/docs/rendering-elements.html#react-only-updates-whats-necessary
 */
