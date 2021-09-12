// Optional Chaining - ?.

/* 
1)Condiitonally accessing proprties. if no such properties exists then it return undefined
 try to access name only if adventurer.dog has some valid value
*/

const adventurer = {
  name: 'Alice',
  cat: {
    name: 'Dinah'
  }
};


const dogName = adventurer.dog?.name;


/**
2)using expression to access properties.When using optional chaining with expressions, if the left operand is null or undefined, the 
  expression will not be evaluated.
*/

let nestedProp = obj?.['prop' + 'Name'];


let potentiallyNullObj = null;
let x = 0;
let prop = potentiallyNullObj?.[x++];

console.log(x); // 0 as x was not incremented

/* 
3)Conditionally calling a function if it exists on object. if no such property is present then it returns undefined.
 
If there is a property with such a name and which is not a function, using ?. will still raise a TypeError exception 
 (someInterface.customMethod is not a function).

 If someInterface itself is null or undefined, a TypeError exception will still be raised (someInterface is null). If you expect
  that someInterface itself may be null or undefined, you have to use ?. at this position as well: someInterface?.customMethod?.()
*/
let result = someInterface.customMethod?.();


/**
 * 3)check if function exist before calling it in function
 */

function f1(a) {
    a?.();
}

f1();


/* 
4)Optional chaining not valid on the left-hand side of an assignment
*/
let object = {};
object?.property = 1;


/* 
5)accessing array elements using conditional operator
*/
let arrayItem = arr?.[42];