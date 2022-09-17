//------------------------------------------Block 1------------------------------------------------
let p1 = function f1(val) {
    return new Promise((resolve, reject) => {
        setTimeout(() =>resolve(2*val), 2000)
    });
}

// Example1 - handler return a value that gets wrapped up in a promise
p1(1).then(val => val) //2
     .then(val => 3 * val)//2
     .then(val => 4* val) //6
     .then(val => console.log(val)); //24

//Example2- handler is returning promise itself - output are same as Example 1 just delay is added
p1(1).then(val => p1(val)) //4
     .then(val => p1(val)) //8
     .then(val => p1(val)) //16
     .then(val => p1(val))// 32
     .then(val => console.log(val))


//Trick to change value emitted by a promise i.e mapping------------------Block 1.2 ------------------------------------------------

//Promise that reolsve with value 5 in 5 seconds
let p1 = new Promise((resolve,reject) => setTimeout(() =>resolve(5) ,5000));

const rejectHandler = reason => ({ status: 'rejected', reason });
const resolveHandler = value => ({ status: 'fulfilled', value });

/* 
This promises p2 resolves at same time as p1 but value is converted.logic behind this-
    then returns a promise which resolves with a value returned by callbacks passed to then. so promise return by then only
    resolves when orignal promises i.e p1 is resolved
*/
let p2 = p1.then(resolveHandler, rejectHandler);
p2.then((val) => console.log(val));


//Use of promise chaining to load scripts in parallel ------------------------Block 2-------------------------------------------------------

function loadScript(src) {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.src = src;
        document.body.appendChild(script);
        script.onload = (script) => resolve(script);
    });
}

//using promise chaining structure remains flat
loadScript('src1')
    .then(script1 => loadScript('src2'))
    .then(script2 => loadScript('src3'))
    .then(script3 => loadScript('src4'))
    .then(script4 => console.log(script,script2,script3))

// without promise chaining it grows towards pyramid of doom

/* 
Sometimes it’s ok to write .then directly, because the nested function has access to the outer scope. In the example above the
 most nested callback has access to all variables num1,num2,num3. But that’s an exception rather than a rule.
*/

loadScript('src1').then(script1 => {
    loadScript('src2').then(script2 => {
        loadScript('src3').then(script3 => {
            loadScript('src4').then(script4 => console.log(script1,script2,script3,script4))
        });
    });
})


//--------------------------Block 3 ----------------------------------------------------------------



function p1(num1) {
    return new Promise((resolve,reject) => {
        setTimeout(() =>resolve(2*num1),1000)
    });
}

/* 
Sometimes it’s ok to write .then directly, because the nested function has access to the outer scope. In the example above the
 most nested callback has access to all variables num1,num2,num3. But that’s an exception rather than a rule.
*/

p1(1).then(num1 => { //2
    p1(num1).then(num2 => { //4
        p1(num2).then(num3 => { //8
            p1(num3).then(num4 => console.log(num1,num2,num3,num4)) //16
        });
    });
})

p1(1).then(num1 => p1(num1)) //2
     .then(num2 => p1(num2)) //4
     .then(num3 => p1(num3)) //8
     .then(num4 => console.log(num4)) //16