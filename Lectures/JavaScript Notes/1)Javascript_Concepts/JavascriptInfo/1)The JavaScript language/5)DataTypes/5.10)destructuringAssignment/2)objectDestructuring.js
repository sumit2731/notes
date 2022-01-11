/* 
Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, 
    as sometimes that’s more convenient.

    The destructuring assignment also works with objects.The basic syntax is:

    let {prop : varName = default, ...rest} = object 
*/

// name of variables and properties are same, order does not matter
let {height, width, title} = { title: "Menu", height: 200, width: 100 }

/* 
We should have an existing object at the right side, that we want to split into variables. The left side contains an 
    object-like “pattern” for corresponding properties. In the simplest case, that’s a list of variable names in {...}.
    The pattern on the left side may be more complex and specify the mapping between properties and variables.
*/

//here variable h,w and t are created. there no variables with name height, width and title
let {height:h, width: w, title: t} = { title: "Menu", height: 200, width: 100 };



/* 
Default values for missing properties can provided by using '='

*/

let {height, width = 100, title} = { title: "Menu", height: 200 }
let {height, width:w = 100, title} = { title: "Menu", height: 200 }

/* 
Just like with arrays or function parameters, default values can be any expressions or even function calls. They will 
    be evaluated if the value is not provided.

*/


/* 
If we have a complex object with many properties, we can extract only what we need:

*/

let options = {
    title: "Menu",
    width: 100,
    height: 200
  };
  
  // only extract title as a variable
  let { title } = options;

/* 
Rest pattern

We can use the rest pattern, just like we did with arrays. It’s not supported by some older browsers (IE, use Babel 
    to polyfill it), but works in modern ones.
*/

let options = {
    title: "Menu",
    height: 200,
    width: 100
  };
  
// title = property named title
// rest = object with the rest of properties
let {title, ...rest} = options; // rest is object with left proeprties


/* 
Gotcha if there’s no let

This won’t work:
    let title, width, height;

    // error in this line
    {title, width, height} = {title: "Menu", width: 200, height: 100};

The problem is that JavaScript treats {...} in the main code flow (not inside another expression) as a code block.

So here JavaScript assumes that we have a code block, that’s why there’s an error. We want destructuring instead.

To show JavaScript that it’s not a code block, we can wrap the expression in parentheses (...):

*/

let title, width, height;

// okay now
({title, width, height} = {title: "Menu", width: 200, height: 100});


/* 
Nested destructuring -

 If an object or an array contain other nested objects and arrays, we can use more complex left-side patterns to 
    extract deeper portions.
*/

let options = {
    size: {
      width: 100,
      height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
  };
  
  // destructuring assignment split in multiple lines for clarity

/* 
  Finally, we have width, height, item1, item2 and title from the default value.

  Note that there are no variables for size and items, as we take their content instead.
  
*/
  let {
    size: { // put size here
      width,
      height
    },
    items: [item1, item2], // assign items here
    title = "Menu" // not present in the object (default value is used)
  } = options;


let {
    size : {width}
} = options;

/* 
Smart function parameters

*/

//bad way - 

function showMenu(title = "Untitled", width = 200, height = 100, items = []) {
    // ...
}

showMenu("My Menu", undefined, undefined, ["Item1", "Item2"]);

/* 
//smart way -
 we can also use nesting tructuring
*/



function showMenu2({title = "Untitled", width = 200, height = 100, items = []}) {
    // ...
}

/* 
Advantages -
    here order is not important
    we dnt need to pass properties for which we want to use default parameters
*/

showMenu2({title: "My Menu", items: ["Item1", "Item2"]});

/* 
Please note that such destructuring assumes that showMenu() does have an argument. If we want all values by default, 
    then we should specify an empty object:

        showMenu({}); // ok, all values are default

        showMenu(); // this would give an error

    We can fix this by making {} the default value for the whole object of parameters:
*/

showMenu2({title: "My Menu", items: ["Item1", "Item2"]}= {});

/* ******************************************************************************************************************** */

/* 
Extra form Javascript.info

*/

/* 
Combing array and Object destructuring
*/

let people = [
  {id: 1, name: 'name1'},
  {id: 2, name: 'name2'},
  {id: 3, name: 'name3'}
];

let [,{name: name2}] = people;
let [,,{name:name3}] = people;

/* 
Dynamic Object keys
*/

let fruits = {
  fruit1: 'Apple',
  fruit2: 'Banana'
}

let fruit = 'fruit1';

let {[fruit]: favFruit} = fruits; // favFruit = "Apple"