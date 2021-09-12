/* 
Code Block 1- Nested Destructuring
*/

let options = {
    size: {
      width: 100,
      height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
};

//Note that there are no variables for size and items, as we take their content instead.
let {
    size: {width, height},
    items:[item1, item2],
    extra,
    title = "Menu" // not present in the object (default value is used)
} = options;


/* 
Code block 2 - smart function parameters
*/

let options = {
    title: "My menu",
    items: ["Item1", "Item2"]
};

function showMenu({
    title = "Untitled",
    width: w = 100,  // width goes to w
    height: h = 200, // height goes to h
    items: [item1, item2] // items first element goes to item1, second to item2
}) {

console.log( `${title} ${w} ${h}` ); // My Menu 100 200
console.log( item1 ); // Item1
console.log( item2 ); // Item2
}

showMenu(options);
/* 
Please note that such destructuring assumes that showMenu() does have an argument. If we want all values by default, then we 
should specify an empty object:


*/

showMenu({}); // ok, all values are default

showMenu(); // this would give an error

/* 
We can fix this by making {} the default value for the whole object of parameters:
*/
function showMenu({ title = "Menu", width = 100, height = 200 } = {}) {
    alert( `${title} ${width} ${height}` );
}
//In the code above, the whole arguments object is {} by default, so there’s always something to destructurize.
showMenu(); // Menu 100 200
