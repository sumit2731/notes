/* 
Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, 
    as sometimes that’s more convenient.
*/

/* 
Array Detsruting
*/

let arr = ["John", "Smith"]


/* 
 it's just shorter ay to write - 
    let firstName = arr[0];
    let surname = arr[1];

 orignal array is not modified
*/
let [firstName, surname] = arr;


/* 
Ignore elements using commas -
    In the code above, the second element of the array is skipped, the third one is assigned to title, and the rest 
    of the array items is also skipped (as there are no variables for them).
*/

let [one , ,three] = [1,2,3,4,5,6];


/* 
Works with any iterable on the right-side.

That works, because internally a destructuring assignment works by iterating over the right value. It’s kind of 
    syntax sugar for calling for..of over the value to the right of = and assigning the values.
*/

let [a, b, c] = "abc"; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);


/* 

Assign to anything at the left-side.
    we can use object proeprties on left hand side
    we ca also use already declared variables, but then we cannot use let
*/

let user = {};
[user.name, user.surname] = "John Smith".split(' ');

/* 
Useage in loops
*/

let user = {
    name: "John",
    age: 30
  };
  
  // loop over keys-and-values
for (let [key, value] of Object.entries(user)) {
    console.log(`${key}:${value}`); // name:John, then age:30
}

/* 
Swap variables trick

    Here we create a temporary array of two variables and immediately destructure it in swapped order.

    We can swap more than two variables this way.
*/

let guest = "Jane";
let admin = "Pete";

// Let's swap the values: make guest=Pete, admin=Jane
[guest, admin] = [admin, guest];



/* 

The rest ‘…’
    Usually, if the array is longer than the list at the left, the “extra” items are omitted.
    For example, here only two items are taken, and the rest is just ignored:
        let [name1, name2] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

    If we’d like also to gather all that follows – we can add one more parameter that gets “the rest” using three 
        dots "...":

*/

let [name1, name2, ...titles] = ["Julius", "Caesar", "Consul", "of the Roman Republic"]; // The value of titles is the array of the remaining array elements.



/* 
Default Values -

    If the array is shorter than the list of variables at the left, there’ll be no errors. Absent values are 
        considered undefined:

        let [firstName, surname] = [];

    so we cab provide default values
*/

let [name = "Guest", surname = "Anonymous"] = ["Julius"];

/* 
Default values can be more complex expressions or even function calls. They are evaluated only if the value is not 
    provided.
*/

// runs only prompt for surname
let [name = prompt('name?'), surname = prompt('surname?')] = ["Julius"];
