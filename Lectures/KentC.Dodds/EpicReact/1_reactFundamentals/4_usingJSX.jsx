/**
 * 
 * JSX lets you write HTML-like markup inside a JavaScript file.
 * Each React component is a JavaScript function that may contain some markup that React renders into the browser. React components 
 * use a syntax extension called JSX to represent that markup.
 * 
 * 
 * React Components are useaully Created with special syntax called JSX, which is fairly simple HTML-like syntax sugar on top of the raw 
 * React APIs.
 * 
 * Docs - https://react.dev/learn/writing-markup-with-jsx
 * 
 * Kent said in lecture -
 * "One thing that I would strongly advise is the better that you're able to take a look at JSX and convert it into createElement calls
 *   in your head, the better you'll be able to read and use JSX effectively"
 *
 * Here instead of creating react elements with React.createElement we used jsx.IF we directly use JSX in js we get the error because
 * js engine
 * This jsx is transpiled to RAW React API code only, in prod apps it is done at compile time.In Exercise there is online tool that
 * converts JSX in RAW react API.
 *
 * In Exercise we loaded babel scripts in our html, then we wrote some script in script tag, using type attribute
 * we signaled to brpwser that it should not processed this script. on loading babel transpiled this script and inserted
 * transpiled script in head tag. result is same as last exercise but now know what is happening.
 *
 */

/**
 * Inserting js in JSX -
 *  docs - https://react.dev/learn/javascript-in-jsx-with-curly-braces#where-to-use-curly-braces
 *
 * You can only put js expression inside jsx,you cannot insert js statements inside jsx
 *
 * expression - something that evaluates into a value
 * statement -  some logic
 *
 * later we saw how bable converts these js expression in jsx to React API's.
 */

const className = 'container';
const elementContent = 'Hello World';

const element = 
  <div className={className}>
    {elementContent}
  </div>;

//after conversion by babel

var element_1 = /*#__PURE__*/React.createElement("div", {
  className: className
}, elementContent);

//note if we use children prop then in jsx also we get the children prop i.e third argument is not there



/**
 * Spread syntax in jSX - very similar to object spread syntax
 */

//Normals props conversion -


const reactElement1 =       
  <div name= {'abc'}  id="123">
  </div>;

var reactElement1_1 = /*#__PURE__*/React.createElement("div", {
  name: 'abc',
  id: "123"
});




const props = {
  className: "container",
  children: "Hello World",
};
const reactElement2 = <div {...props}></div>;
// by babel compilter it is converted to

const reactElement2_2 = React.createElement("div", props);

const reactElement3 = <div name="abc" {...props}></div>;

//babel compiler converts this to

var reactElement3_1 = React.createElement(
  "div",_extends(
    {
      name: "abc",
    },
    props
  )
);

//extends is same as Object.assign

const reactElement4 = <div name="abc" {...props} id="123" ></div>;

var reactElement4_1 = React.createElement(
  "div",_extends(
    {
      name: "abc",
    },
    props,
    {
      id: "123"
    }
  )
);

//as you can see that ordering of props do matter here, latter props override initial ones




/**
 * Extra reading in Docs - 
 */

/**
 * Rules Of JSX
 * 
 * a)Return a single root element
 * b)Close all the tags
 * c)camelCase all most of the things (read more in docs to understand -why this is done and why we use className instead of class)
 *    For historical reasons, aria-* and data-* attributes are written as in HTML with dashes.
 */

/**
 * Use JSX Converter
 */


/**
 * Use js in jsx -
 * 
 * where to use curly braces
 *  a)As text directly inside a JSX tag
 *     <h1>{name}'s To Do List</h1> works, but <{tag}>Gregorio Y. Zara's To Do List</{tag}> will not.
 *  b)As attributes immediately following the = sign: src={avatar}
 */


/* 
Differences In Attributes
  1)class attribute is className
  2)for attribute is htmlfor
  3)style attribute instead of accepting style string, now accepts object.
  4)
Always use html to jsx converter while in doubt
*/


/**
 * CamelCasing
 * 
 * instead of using '-' we use camel casing.for all attributes as well css properties.
 * For historical reasons, aria-* and data-* attributes are written as in HTML with dashes.
 */

/**
 * html to jsx converter
 */


/**
 * Using props -
 * 
 * 
 * 
 * Props spread syntax -
 * Some components forward all of their props to their children, like how this Profile does with Avatar. Because they don’t use any of
 *  their props directly, it can make sense to use a more concise “spread” syntax:
 * 
 *  Use spread syntax with restraint. If you’re using it in every other component, something is wrong. Often, it indicates that you 
 * should split your components and pass children as JSX. see example here -
 *    https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children
 * 
 * default props
 *  You can specify a default value like size = 100, which is used for missing and undefined props.
 * 
 * children prop
 *  You can think of a component with a children prop as having a “hole” that can be “filled in” by its parent components with arbitrary
 *  JSX. You will often use the children prop for visual wrappers: panels, grids, etc.
 * 
 * How props change over time
 *  props are immutable—a term from computer science meaning “unchangeable”. When a component needs to change its props (for example, in
 *  response to a user interaction or new data), it will have to “ask” its parent component to pass it different props—a new object! Its
 *  old props will then be cast aside, and eventually the JavaScript engine will reclaim the memory taken by them.
 * 
 *  Don’t try to “change props”. When you need to respond to the user input (like changing the selected color), you will need to 
 *  “set state”, which you can learn about in State: A Component’s Memory.
 */


/**
 * Old Docs of Advanced JSX
 * 
 *   https://legacy.reactjs.org/docs/jsx-in-depth.html
 * 
 *  a)Using Dot Notation for JSX Type
 *       return <MyComponents.DatePicker color="blue" />;
 * 
 *  b)Choosing the Type at Runtime
 *    https://legacy.reactjs.org/docs/jsx-in-depth.html#choosing-the-type-at-runtime
 * 
 *  c)passing function as children
 * 
 *  d)false, null, undefined, and true are valid children. They simply don’t render
 *    need to be careful when using falsy values as some flasy values like 0 are printed by react.
      To fix this, make sure that the expression before && is always boolean:
 */