/**
 * You can use any javascript expression in Expression Slots. but you cannot use javascript statements.
 *
 * because - This works because all function arguments must be expressions. Expressions produce a
 *  value, and that value will be passed into the function. Statements don't produce a value, and
 *  so they can't be used as function arguments.
 *
 *
 * JS Primer(Statement vs Expressions)-
 * https://courses.joshwcomeau.com/joy-of-react/10-javascript-primer/02-statements-vs-expressions
 */

const shoppingList = ["apple", "banana", "carrot"];

// This code...
const element = <div>Items left to purchase: {shoppingList.length}</div>;

// ...is equivalent to this code:
const compiledElement = React.createElement(
  "div",
  {},
  "Items left to purchase: ",
  shoppingList.length
);

/**
 * @Commmnets in jSX
 *
 * Use expression slots, and use multiline comments
 * 
 * We specifically need to use the multi-line comment syntax
 *instead of the single-line syntax (//). This is because the single-line syntax comments everything
 out, including the closing } for the expression slot!
 */

const element2 = <div>{/* Some comment! */}</div>;

/**
 * @Attribute expression slots
 */

const uniqueId = "content-wrapper";

const element3 = <main id={uniqueId}>Hello World</main>;

//here how it compiles
const element4 = React.createElement(
  "main",
  {
    id: uniqueId,
  },
  "Hello World"
);

//For comparison, here's what it looks like without an expression slot, when the value for id is fixed:

const element5 = <main id="content-wrapper">Hello World</main>;

const compiledElement2 = React.createElement(
  "main",
  {
    id: "content-wrapper",
  },
  "Hello World"
);
