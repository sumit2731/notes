"use strict";
/* we have one genric type in this function and parameter is of that type
That's typical for generic types. If you have a generic function then your parameter
will be of that type, it doesnt have to be, but often that is how you work with generic
functions as you will see
*/
function countAndDescribe(element) {
    let descriptionText = 'Got No value';
    if (element.length > 0) {
        descriptionText = `Got ${element.length} elements.`;
    }
    return [element, descriptionText];
}
/*
We can also do this without generics by below code, but we just want
to understand generics
*/
/* function countAndDescribe(element: Lengthy): [Lengthy, string] {
  let descriptionText = "Got No value";
  if (element.length > 0) {
    descriptionText = `Got ${element.length} elements.`;
  }
  return [element, descriptionText];
} */
console.log(countAndDescribe([1, 2]));
console.log(countAndDescribe("sumeet"));
//# sourceMappingURL=4)anotherGenericFunction.js.map