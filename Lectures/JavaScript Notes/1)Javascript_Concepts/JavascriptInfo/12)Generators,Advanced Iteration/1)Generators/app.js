/* 
* Generator Function
*/
function* generateSequence() {
  //{done: false, value:1 }
  yield 1;
  yield 2;
  //{done: true, value:3 }
  return 3;
}

/* 
Calling generator function returns generator object which is iterator object
*/
let iterator = generateSequence();
let flag= true;

//Getting values from iterator

//way 1
while(flag) {
  let nextVal = iterator.next();
  flag = !nextVal.done;
  console.log(nextVal.value);
  //console.log(nextVal.done);
}

//way2
for(let val of iterator) {
  console.log(val);
}

//way3
let arr1 = [...iterator];
console.log(arr1);
/* ***************************************************************************************************** */

/* 
* Generator composition
*/

function* generateSequence(start,end) {
  for(let i = start ; i<=end; i++) yield i;
}

/* 
The yield* directive delegates the execution to another generator. This term means that yield* gen iterates over the generator gen and 
transparently forwards its yields outside. As if the values were yielded by the outer generator.

A generator composition is a natural way to insert a flow of one generator into another. It doesn’t use extra memory to store 
intermediate results.
*/
function* generatePasswordCode() {
  yield* generateSequence(1,9);
  yield* generateSequence(10,19);
  yield* generateSequence(20,29);
}

/* 
Above is same as this -

function* generateAlphaNum() {

  // yield* generateSequence(48, 57);
  for (let i = 48; i <= 57; i++) yield i;

  // yield* generateSequence(65, 90);
  for (let i = 65; i <= 90; i++) yield i;

  // yield* generateSequence(97, 122);
  for (let i = 97; i <= 122; i++) yield i;

}


*/



let arr = [...generatePasswordCode()];
console.log(arr);

/* *********************************************************** */

/* 
Passing values trough yield
*/


function* gen() {
  // Pass a question to the outer code and wait for an answer
  let result = yield "2 + 2 = ?"; // (*)

  console.log(result);
}

let generator = gen();

let question = generator.next().value; // <-- yield returns the value
console.log(question);

generator.next(4);