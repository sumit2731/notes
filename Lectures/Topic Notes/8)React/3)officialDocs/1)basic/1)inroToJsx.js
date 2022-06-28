/**
 * This funny tag syntax is neither a string nor HTML.It is called JSX, and it is a syntax extension to JavaScript.
 * JSX may remind you of a template language, but it comes with the full power of JavaScript.
 * JSX produces React “elements”.
 */

const element = <h1>Hello, world!</h1>;

/**
 * Expressions in JSX
 */

const name = "Josh Perez";
const element2 = <h1>Hello, {name}</h1>;
ReactDOM.render(element, document.getElementById("root"));

/**
 * We split JSX over multiple lines for readability. While it isn’t required, when doing this, we also recommend
 * wrapping it in parentheses to avoid the pitfalls of automatic semicolon insertion.
 */

const element3 = <h1>Hello, {formatName(user)}!</h1>;

/**
 * After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects.
    This means that you can use JSX inside of if statements and for loops, assign it to variables, accept it as 
    arguments, and return it from functions:
 */

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

/**
 * Specifying attributes in JSX
 * 
 * Warning:
    Since JSX is closer to JavaScript than to HTML, React DOM uses camelCase property naming convention instead of HTML
     attribute names.For example, class becomes className in JSX, and tabindex becomes tabIndex.
 */

const element4 = <a href="https://www.reactjs.org"> link </a>;
const element5 = <img src={user.avatarUrl}></img>;

/**
 * JSX Prevents Injection Attacks It is safe to embed user input in JSX:
 */

const title = response.potentiallyMaliciousInput;
// This is safe:
const element6 = <h1>{title}</h1>;

/**
 * JSX Represents Objects
Babel compiles JSX down to React.createElement() calls.

 */

const element7 = <h1 className="greeting">Hello, world!</h1>;

/**
 * above expression is converted to this -
 */

const element8 = React.createElement(
  "h1",
  { className: "greeting" },
  "Hello, world!"
);

/**
 * React.createElement() performs a few checks to help you write bug-free code but essentially it creates an object
 *  like this:
 */

// Note: this structure is simplified
const element9 = {
  type: "h1",
  props: {
    className: "greeting",
    children: "Hello, world!",
  },
};

/**
 * These objects are called “React elements”. You can think of them as descriptions of what you want to see on the
 * screen. React reads these objects and uses them to construct the DOM and keep it up to date.
 */
