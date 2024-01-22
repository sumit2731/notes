// 1. Import dependencies
import React from "react";
import { createRoot } from "react-dom/client";

// 2. Create a React element
const element = React.createElement("p", { id: "hello" }, "Hello World!");

// 3. Render the application
const container = document.querySelector("#root");
const root = createRoot(container);
root.render(element);

/**
 * createReactElement
 * 
 * React.createElement is a function that accepts 3 or more arguments:
    The type of the element to create.
    The properties we want this element to have.
    The element's contents. We can omit this if the element should be empty.
 */

const element2 = React.createElement("p", { id: "hello" }, "Hello World!");

/**
 * This function returns a “React element”. React elements are plain old JavaScript objects.
 *
 *  The final two properties, _owner and _store, are meant to be used internally by React, and
 * can be safely ignored by us. *
 */

const element3 = {
  type: "p",
  key: null,
  ref: null,
  props: {
    id: "hello",
    children: "Hello World!",
  },
  _owner: null,
  _store: { validated: false },
};
