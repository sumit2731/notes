interface Lengthy {
    length: number;
}

/* we have one genric type in this function and parameter is of that type 
That's typical for generic types. If you have a generic function then your parameter
will be of that type, it doesnt have to be, but often that is how you work with generic
functions as you will see.

Here we have placed constaint on generic type T, because we are accessing, length property on
first argument. so we need to make sure that it is present. so we use extends constraint.

otherwise we will get error - "length property does not exist on type T".

if we do not specify return type, then type infered by ts is-  (T | string)[]
*/
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got No value";
  if (element.length > 0) {
    descriptionText = `Got ${element.length} elements.`;
  }
  return [element, descriptionText];
}

/* 
We can also do this without generics by below code, but we just want to understand generics. 
here if we dot specify return type then return type infered by ts is [Lengthy]. it is because
string can also be represented as Lengthy
*/

function countAndDescribe2(element: Lengthy):[Lengthy, string] {
  let descriptionText = "Got No value";
  // if (element.length > 0) {
  //   descriptionText = `Got ${element.length} elements.`;
  // }
  //return [element, descriptionText];
  return [element, descriptionText];
}



/* 
Here we pass argument and we do not get error because ts knows these have
length property, so it satisfies the constraint
*/

console.log(countAndDescribe([1,2]));
console.log(countAndDescribe("sumeet"));

// herew e get error becaus enumber does not have length property
//console.log(countAndDescribe(10));