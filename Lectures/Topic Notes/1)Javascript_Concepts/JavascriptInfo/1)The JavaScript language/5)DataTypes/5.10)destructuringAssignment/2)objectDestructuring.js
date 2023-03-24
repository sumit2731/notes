/* 
Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, 
    as sometimes that’s more convenient.

    The destructuring assignment also works with objects.The basic syntax is:

    let {prop : varName = default, ...rest} = object 
*/

// name of variables and properties are same, order does not matter
let {height1, width1, title1} = { title: "Menu", height: 200, width1: 100 }

/* 
We should have an existing object at the right side, that we want to split into variables. The left side contains an 
    object-like “pattern” for corresponding properties. In the simplest case, that’s a list of variable names in {...}.
    The pattern on the left side may be more complex and specify the mapping between properties and variables.
*/

//here variable h,w and t are created. there no variables with name height, width and title
let {height:h2, width: w2, title: t2} = { title: "Menu", height: 200, width: 100 };



/* 
Default values for missing properties can provided by using '='

Just like with arrays or function parameters, default values can be any expressions or even function calls. They will 
    be evaluated if the value is not provided.

*/

let {height3, width3 = 100, title3} = { title: "Menu", height2: 200 }
let {height4, width:w4 = 100, title4} = { title: "Menu", height3: 200 }

/**
 * We also can combine both the colon and equality:
 */
let options5 = {
  title: "Menu"
};

let {width: w5 = 100, height: h5 = 200, title5} = options5;


/* 
If we have a complex object with many properties, we can extract only what we need:
*/

let options6 = {
    title: "Menu",
    width: 100,
    height: 200
  };
  
  // only extract title as a variable
  let { title6} = options6;

/* 
Rest pattern

We can use the rest pattern, just like we did with arrays. It’s not supported by some older browsers (IE, use Babel 
    to polyfill it), but works in modern ones.
*/

let options7 = {
    title: "Menu",
    height: 200,
    width: 100
  };
  
// title = property named title
// rest = object with the rest of properties
let {title7, ...rest7} = options7; // rest is object with left proeprties


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

let title8, width8, height8;

// okay now
({title8, width8, height8} = {title: "Menu", width: 200, height: 100});


/* 
Nested destructuring -

 If an object or an array contain other nested objects and arrays, we can use more complex left-side patterns to 
    extract deeper portions.
*/

let options9 = {
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
      width9,
      height9
    },
    items: [item91, item92], // assign items here
    title = "Menu" // not present in the object (default value is used)
  } = options9;


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

        showMenu(); // this would give an error - TypeError: Cannot destructure property `title` of 'undefined' or 'null'.

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