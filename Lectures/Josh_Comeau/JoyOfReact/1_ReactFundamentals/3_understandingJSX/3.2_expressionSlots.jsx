/**
 * You can use any javascript expression in Expression Slots. but you cannot use javascript statements.
 * Javscript in slot is forwarded untouched to React.createElement
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

/**
 * here expression slots are moved as it to React.CreateElement
 */
const compiledElement = React.createElement(
  "div",
  {},
  "Items left to purchase: ",
  shoppingList.length
);
/**
 * this is wrong as we are using expressions in jsx.
 * function arguments should be expressions
 */

const element2 = (
  <div>
    Items left to purchase {if(shoppingList.length < 5) "Almost Done!"}
  </div>
)

/**
 * @Commmnets in jSX
 *
 * Use expression slots, and use multiline comments
 * 
 * We specifically need to use the multi-line comment syntax
 *instead of the single-line syntax (//). This is because the single-line syntax comments everything
 out, including the closing } for the expression slot!
 */

const element3 = (
  <div>
    {/* Some comment! */}
  </div>
)

/**
 * @Attribute expression slots
 */

const uniqueId = "content-wrapper";

const element4 = <main id={uniqueId}>Hello World</main>;

//here how it compiles
const element5 = React.createElement(
  "main",
  {
    id: uniqueId,
  },
  "Hello World"
);

//For comparison, here's what it looks like without an expression slot, when the value for id is fixed:

const element6 = <main id="content-wrapper">Hello World</main>;

const compiledElement2 = React.createElement(
  "main",
  {
    id: "content-wrapper",
  },
  "Hello World"
);

/**
 * Note that when we compile the code, it doesn't actually get evaluated.
 * When JSX gets compiled to JS, we copy over everything between the { and }.
 * We don't call any functions or run any of the logic. That happens later,
 * when the processed JavaScript runs in the browser.
 */

/**
 * @TypeCoercion - At run-time, React will automatically convert types as needed when supplying attributes in
 *  expression slots.
 */

// This works:
<input required="true" />

// And so does this!
<input required={true} />

/**
 * Boolean ttaributes
 * In HTML, it's possible to set attributes to true by specifying only the key, like this:
 * This same pattern has been implemented in JSX; these two elements are equivalent:
 * 
 *  <input required />
    <input required={true} />

    Honestly, though, I don't recommend doing this. I prefer to spell it out, and write required={true}.
    In fact, there was even some talk about deprecating the “attribute-only” syntax in JSX, to remove this
    ambiguity. In the end, the team decided to keep it for now, but it wouldn't surprise me if this was
    removed in the future.

    And so, to keep things as simple and future-proof as possible, I choose to write the full thing out,
    required={true}.
 */
