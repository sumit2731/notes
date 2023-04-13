/* 
Sync function always returns a promise - 
*/

async function fn() {
  return 'hello';
}

// hello
fn().then(console.log)


/* 
Here’s an alternate representation without using async.
A slightly more accurate way to say the same thing — The body of an async function is always wrapped in a new Promise.
If the return value is primitive, async functions return a promise-wrapped version of the value. However, when the return 
value is a promise object, its resolution is returned in a new promise.
*/

function fn() {
  return Promise.resolve('hello');
}


fn().then(console.log);



/* 
Code Block 1 - Async function alays returns a promise.The await expression causes async function execution to pause until a 
  Promise is settled (that is, fulfilled or rejected), and to resume execution of the async function after fulfillment. 
  When resumed, the value of the await expression is that of the fulfilled Promise.If the value of the expression following 
  the await operator is not a Promise, it's converted to a resolved Promise.

An await splits execution flow, allowing the caller of the async function to resume execution. After the await defers the 
continuation of the async function, execution of subsequent statements ensues. If this await is the last expression executed by 
its function, execution continues by returning to the function's caller a pending Promise for completion of the await's function
and resuming execution of that caller.

This pending promise returned by async functuon is resolved when execution of async function is completed.this promise resolves to 
the value returned by async function. this concept is used in question 2.
*/

async function f1() {
  let val = await Promise.resolve(1);
  return val;
}

function f2() {
  //p1 is pending promise
  let p1 = f1();
  console.log(p1);
  p1.then(val => console.log("Promise returned by f1 resolved with = " +val));
  console.log("Inside f2")
}
f2();

/* 
Code Block 2- 

If promise evaluated by await is rejected or error is thrown inside async function, then rest of function is not executed and promise
  returned by function is rejected.
if we are handling the rejection of promise returned by f1, then it is fine. otherwise we get a warning on console.
if we explicitly want promise returned by asyn function to fail, then throw error used in question no2 of blog
*/


async function f1() {
  let resut = 5;
  //result = await Promise.resolve(50);
  result = await Promise.reject("Rejected");
  // If promise is rejected and is not handled then  this line is not executed
  console.log("Inside f1");
  
  return result;
}

//f1().then(value => console.log(value));
//f1().then(value => console.log(value),error => console.log("Inside Reject Block",error));
//console.log("Promise Executed");


/* 
Block 2 - Here promise evaluated by await is rejected and we are not handling rejection of promise returned by f4, so we will get
  warning on console. but since we are using try catch block inside async function, no error is thrown on console. here when promise 
  rejects control directly jumps to catch block.

  If the Promise is rejected, the rejected value is thrown.here e is value rejected by promise
*/
async function f4() {
  try {
    let result;
    //result = await Promise.resolve(1);
    result = await Promise.reject("rejected");
    console.log(result);
  }
  catch(e) {
    console.log("Inside catch block");
    return 1;
  }
}

//f4().then(val => console.log(val));

/* 
Handling rejected promises in aync fucntion without try-ctahc block
*/
var response = await promisedFunction().catch((err) => { console.error(err); });
// response will be undefined if the promise is rejected

/* Block 3
Here in f2 promise is rejected so rest ilnes are not evaluated and proimse returned by function is rejected.\
In f3 also promise evaluated by await is rejected so rest of lines are not executed and promise returned by f3
also rejects

*/

async function f2() {
  let resut = 5;
  //result = await Promise.resolve(50);
  result = await Promise.reject("Rejected");
  // If promise is rejected and is not handled then  this line is not executed
  console.log("Inside f2");
  
  return result;
}

async function f3() {
  let result2 = await f2();
  console.log("Inside f3");
  return result2;
}

//f3().then(value => console.log(value),error => console.log("Inside Reject Block",error));
//console.log("Promise Executed");



/* 
Question - returning await means we are returning a pending promise
  
*/

async function getData() {
  return await Promise.resolve('I made it!');
  //return await 7;
}

const data = getData();
console.log(data);