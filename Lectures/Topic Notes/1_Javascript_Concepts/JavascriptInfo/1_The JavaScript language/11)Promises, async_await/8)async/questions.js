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
    //this also yields same result
    //let result = x + await resolveAfter2Seconds(20) + await resolveAfter2Seconds(30);
}

add1(10).then(v => {
    console.log("Add1");
    console.log(v);
});
  
  
async function add2(x) {
    const p_a = resolveAfter2Seconds(20);
    const p_b = resolveAfter2Seconds(30);
    //this is fast at timer for both promises has started
    let result = x + await p_a + await p_b;
    //this will be slow, because only when first await is evaluated, then control goes to second await
    // let result = x + await resolveAfter2Seconds(20) + await resolveAfter2Seconds(30);
    return result;
}

add2(10).then(v => {
    console.log("add 2");
    console.log(v);
});


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
    console.log('first');
}

async function secondFunction() {
    console.log(await myPromise());
    console.log('second');
}

firstFunction();
secondFunction();





/* 
Question4 -
*/

async function check() {
    var pro = (x) => {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve(console.log("inside timeout"+x));
            },x);
        });
    }
    var arr = [1000,1001];
    console.log("before");
    arr.forEach(async i => {
        await pro(i);
        console.log("after await");
    });
    console.log("after");
}

check();
