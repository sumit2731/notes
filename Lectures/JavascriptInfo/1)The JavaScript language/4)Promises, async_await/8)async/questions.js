/* 
Question 1-
*/
function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
}
  
  
async function add1(x) {
    const a = await resolveAfter2Seconds(20);
    const b = await resolveAfter2Seconds(30);
    return x + a + b;
}

// add1(10).then(v => {
//     console.log("Add1");
//     console.log(v);
// });
  
  
async function add2(x) {
    const p_a = resolveAfter2Seconds(20);
    const p_b = resolveAfter2Seconds(30);
    let result = x + await p_a + await p_b;
    return result;
}

// add2(10).then(v => {
//     console.log("add 2");
//     console.log(v);
// });


/* 
Question 2 - go through await js mdn docs.
jere async function returns promise. that promise is resolved when whole async function is exected. value to which promise resolved 
    is returned is value returned by async function
*/
async function getData() {
    return await Promise.resolve('I made it!');
}

const data = getData();
console.log(data);


/* 
Question 3 - 
*/
const myPromise = () => Promise.resolve('I have resolved!');

function firstFunction() {
    myPromise().then(res => console.log(res));
    console.log('second');
}

async function secondFunction() {
    console.log(await myPromise());
    console.log('second');
}

firstFunction();
secondFunction();

console.log('second');
"i have resolved"
"i have resolved"
console.log('second')

