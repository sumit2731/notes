/**
 * @FunctionOverLoading
 * function overloading, or method overloading, is the ability to create multiple methods 
 *  with the same name and a different number of parameters or types.
 * function implementation must be compatible with all the overloaded signatures. 
 * It should always be the last in the list, and take the any type or a union type as 
 * the type of its parameters.
 */


type Combinable6 = string | number;

/**
 @Example1
 */
function add6(a: number, b: number): number;
function add6(a: string, b: string): string;
function add6(a: string, b: number): string;
function add6(a: number, b: string): string;
function add6(a: Combinable6, b: Combinable6) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

/** 
Here we get intellisense because of function overloading.
because of function overloading we kow that return type will
be string if we pass strig parameters. so we get intellisense.

if we do not get use function oveloads, then ts knows that return type is always 
union type. we cannot call functions that are avalible on strings on reurn value,
because ts will complain that such functions are not avaible on union type, even though
we know that we will get string.

so @FunctionOverloading allows us to accurately model the possible parameter and return type combinations.

we will also get help if number of parameters varies. 
@google function overoading in ts and read firt 3 links and 4th link
*/

let str6 = add6('sumeet', 'sood');
console.log(str6.indexOf('s'));


/**
 * @Example2
 * Here we do not need second argument if frst argument is string.To solve it we have made
 * second argument optional, but now user can pass first argument  as string then skip second
 * argument. this is not what we want. Here function overload can help us. here we make sure 
 * that single arguent is allowed only if it is number.
 * 
 * Also note that we have to same second argument optional in function defination, we do not make it optional
 * then we cannot define function declaration that accepts singlle argument. we will get error that-
 *  "This overload signature is not compatible with its implementation signature"
 */
function f6(a:string, b: string): string
function f6(a:number): number;
function f6(a: Combinable6 , b?: string): Combinable6 {
    if (typeof a === 'string') {
        return a+b;
    }
    return 2*a;
}

/* we get error here becuse of fucntion overload, we know that single argument needs to
be of type number, otherwise we need to pass 2 2 arguments */
//let abc = f6('d')