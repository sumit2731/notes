/**
 * @Desc Union- Helps us to accept more than one type. we use pipe operator
 * to specify union types.
 * here id can take values of both types i.e string and number
 */

 let id: (number| string) = 1;
 id = '10';

 function print20(a: number| string, b: number| string) {
    let result;
    /* 
    We cannot do this now. we can perform + opertaion on number and string in js(thorigh type coercion
     we get concatenated string as a result).
    but here ts will only see that we are trying to add 2 variables which can be of different types
    and throws error.so have to use typecheck if
    */
    //result = a + b;
    
    /* 
    Typescript actually recogonises this type check condition in if, so we can perform add operaton inside
    if block. note that ts will not give you error if your operand types are-
    inside if condition if we chnage type of a to number and b to undefined, then we will get error
    1+ undefined in js gives Nan.but if types are number and boolean or number and null(0), number and 
    string or number and object, we wnt get any errors 
    because we can add number and all other mentiined types in js though  type coercion 
     1+undefined = nan
     1+null(0) = 1
     1+true(1) = 2
     1+false(0) = 1
     1 + {} = 1[object Object]"
     1 + '1'= 11
    */
    if (typeof a === 'number' && typeof b === 'object') {
        result = a + b;
    } else if (typeof a === "string" && typeof b === "string") {
        result = a+b;
    }
    console.log(result);
 }
 print20(1,2);
 print20("1","2");


 /**
  * @Desc Literal Types
  * instead of specifying the type of value we specify what exact value that variable should hold
  * using union types we can say variable be can one of these values
  * like here our function accepts not all strings, just 2 string values
  */

  function literalTypes(a: 'value1' | 2) {
    console.log(a);
    /* 
    *Inside if check if can access all string methods on 'a' because ts identifies that if typecheck
    and it knows that type of a is string
    */
    if(typeof a == 'string' ) {
        console.log(a.length)
    }
  }
  // here type infered by ts is of literal not of number, it is because we
  //  are using const
  const a11 = 10;

/* 
Where can this be useful? In Below function we
expect ony 2 values for opertaions. and here we can use literals 
*/

function numberOperation(a , b,operation: 'add' | 'minus') {
    if (operation == 'add') {
        return a+b;
    } else if(operation == 'minus') {
        return a-b;
    }
}
numberOperation(1,2,'add');
numberOperation(10,5,'minus');
/* 
Here we get error by IDE
*/
//numberOperation(10, 5, "multiply");


/**
 * @Desc Type Aliases \ Custom Types
 * When working with unions, it is cumbersome to manually type all types
 * so we can create a new type which stores this union type, this can be
 * done with "Type Aliases". We can mix any type here including literals
 */

type combinable = string | number;

let a1: combinable = 1;
a1 = '1';

/* Type aliases can be used to "create" your own types. You're not limited
to storing union types though - you can also provide an alias to a 
(possibly complex) object type. */

type User = { name: string; age: number };
const u1: User = { name: 'Max', age: 30 };



type Product = {title: string; price: number;};
// const p1: Product = { title: 'A Book', price: 12.99, isListed: true }