
/* 
Here we ant to put consraits on generics, we are not bothered about exact structure of object , you are providing
  for T and U. but we want is both parameters should be any kind of objects. object type means it should be a 
  non-primitive value.

you can aso use your own types(i.e classes) or primitive types like string, boolean,number etc
  you can also use union types
*/
function merge23<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj23 = merge23({ name: "Max" }, { age: 30 });
console.log(mergedObj21.age);


/**
 * Let's see how extends works with Union Type
 */
 type t3 = string | boolean;

 function f3<T extends t3>(value: T) {
   console.log(value);
 }

 f3('a');
 f3(true);

 let value2: string| number = 'abc';
 // we get error only when value2 holds number type
 f3(value2);

/**
 * Another example with Union type
 */
 
function f33<T extends ('name' | 'id')>(value:T) {
    console.log(value);
}
f33('name');
f33('id');

//Not possible

//f33('sumeet');
 
 
 
 //Question - what if we use porimitive - <T extends string>
