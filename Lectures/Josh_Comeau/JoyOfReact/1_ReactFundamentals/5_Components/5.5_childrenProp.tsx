/**
 * children prop can be passed in special way, i.e by mentioning it in between cutly braces
 */

const element = <div>Hello World {"something"}</div>;

console.log(element);

//prints
let consoleOutut = {
  type: "div",
  key: null,
  ref: null,
  props: {
    children: ["Hello World ", "something"],
  },
  _owner: null,
  _store: {},
};

//these 2 are equivalent

// This element:
const element2 = <div children="Hello world!" />;

// …is equivalent to this one:
const element3 = <div>Hello world!</div>;

//if you supply children prop in both ways

const element4 = <div children="As an attribute">Between the brackets</div>;

//converted to

const element5 = React.createElement(
  "div",
  {
    children: "As an attribute",
  },
  "Between the brackets"
);

//in final output, children passed between opening and closing tags are given high priority
