/**
 * jsx is converted into javascript, done as part of a build step, using a tool like Babel.
 *  The JSX we write gets converted into React.createElement. By the time our code is running
 * in the user's browser, all of the JSX has been zapped out, and we're left with a JS file
 * full of nested React.createElement calls.
 */

/**
 * React Import is not required
 * With React 17, the React team introduced a new “JSX transformer”, used by Babel and other compilers.
 */

const element = <p id="hello">Hello World!</p>;

//Using the modern JSX transformer, it will get compiled to:

import { jsx as _jsx } from "react/jsx-runtime";

const element2 = _jsx("p", { id: "hello" }, "Hello World!");

/**
 * _jsx is a fancy optimized version of React.createElement. It includes some shortcuts when we use certain
 * React features like Fragments or Portals. Otherwise, it does the exact same thing as React.createElement:
 * it creates a React element.
 */
