/**
 * @Desc Function Return Type
 * We can define return types of functions
 * but if we do not define return type then typescript infers
 * return type, like it does for variables. so type scrript is
 * smart enough to infer retrun type depending upon what
 * function returns
 */

 function add(number1: number, number2: number) {
     /*       
     here return type changes to string and typescript is able to infer it correctly
     return number1.toString() + number2.toString(); 
     */
     
     /* 
     here return type would be void. but if a variable stores return value of this function,
     it will store undefined
     */
     
     //return; 
     
     return number1 + number2;
 }

 /* No need to give return type explicitly, it is good idea to let typescript infer it.
    give return type only if you have strong reason to do so.
    function that do not return anything has return type of void.but if-
    let a = add(1,2);
    if add does not return anything then a will get value of undefined
    so we can say that if function do not retrn anything then it returns undefined
    but we cannot give undefined as return type of such function. If we want to define 
    undefine as return type,then function should return undefine expliciltly
 */
  function add2(number1: number, number2: number):number {
    return number1 + number2;
  }

  /**
   * @Desc Function Type
   * We can also assign types to functions. why this is required?
   * In below code type of a2 is any. we store function in it then call it.it works fine
   * later we store 4 in a2, ts cannot complain as type of a2 is any. but we get runtime error
   * when we try to call function a2, because it has number 4 not function. here ts cannot
   * warn us about run time error.
   * so in below code we get runtime error, typescript is unable to help us
   * here
   */
  function print1(a: number) {
      console.log("Function called");
      return 2*a;
  }
  let a2;
  a2 = print1;
  a2();
  a2 = 4;
  a2();
  // we will get run time error here, a2 store value 4, we cannot call it like a function
  //a2();

 /* 
 *Solution 1
 *Assign type function to variable, like-
 */
let a3: Function;
/* a3 = 4; this is not possibe now
   but now we can assign any function to a3
*/


/* 
*Solution 2
*Use Function Types
*It means this function accept 1 argument of type number and
*returns number. so now to a4 we can assign any function as value,
*which fulfiles this criteria
*/
let a4: (b: number) => number;




/**
 * @FunctionTypes_And_Callbacks
 * We can define type for callbacks also. then we will get error,
 * we do not pass callback of required type to function. Here we specify our fucntion expects a 
 * callback. this callback takes one argument which is of type number and returns nothing.
 * note, that callback that we passed to f1 retruns something. but typescript does not worry about return,
 * because we are not using it in f1 as we are expecting callback to return nothing. so if our callback return
 * something it does'nt hurt. so it means ,we are not forcing function not to return anything,
 * we are just informing that any value that you return will not be used in orignal function
 * so,(b:number) => number is assignable to type (b:number) => void
 * but vice-versa is not true. lets try it.
 */

 function f1(a: number, b:number,cb:(b:number) => void) {
   let result = a+b;
   cb(result);
 }
 
 function f2(a) {
   console.log(a);
 }
 // here if we define our function here while we call f1, then we know that first argument will be number
 // so we will get all intellisese, without defining the type of argument here, because we defined type of
 // arguments of callback when we defined f1
 f1(4,3,(a) => {
   console.log(a);
   return a;
 });

 /* 
 Lets try to assign, type (b:number) => void to type (b:number) => number.
 It gives us error. so we cannot do this. because here we use return value of
 callback in f3 and if callback does not result anything then it a problem
 for us.
 */

/*   function f3(a: number, cb: (b: number) => number) {
    let a2 = cb(a);
    console.log(a2);
  }
  function f4(b: number) {
    console.log(2 * b);
  }
  f3(4, f4); */

 /* 
 *If in defination we says our function expects n arguments and we pass arguments less than
 n then its ok, it is because in callback we will not use extra parameters.
 this workd fine-
 */

  function f10(a: number, b: number, cb: (c:number, d: number) => void) {
    cb(a,b);
  }
  function f20() {
    console.log("Function called123");
  }
  f10(4, 3, f20);

/* 
If definations says function expect n arguments and our function takes more than n number of arguments,
then we get error.this makes sense because inside f11 we are passing only 2 parameters to cb, which as per defination
of cb.

but if we dnt provide third argument to f21, then it will have value of undefined, and number + undefined = NaN
*But here we get error. this makes sense because, in orignal function f11 we are passing 2 parameters
it's upto us whther we want to use them in callback or no. in first case we decide not to use them, so its ok.
but in second case we are passing expecting third parameters in our callback and we may use it, 
but in f11 we are not passing it.so it will lead to error.
*/

/* function f11(a: number, b: number, cb: (c: number, d: number) => void) {
  cb(a, b);
}
function f21(a: number,b: number,c:number) {
  console.log(a+b+c);
}
f11(4, 3, f21); */


/**
 * @Extra_Notes_about_function_Syntax
 * There is some other syntax also to define function types.this is-
 */

 let validation3: {(flag: number): boolean};
 
 validation3 = (flag: number)=> {
   console.log(flag);
   return true;
 }

// -----------------------------------------------

//3 Ways to define function type type

type t1 = (a: number, b:number) => number;

type t2 ={(a: number,b: number): boolean}
interface t3 {
  (a: number, b:number) : number;
}