//------------------------------------------Block 1------------------------------------------------
let p1 = function f1(val) {
    return new Promise((resolve, reject) => {
        setTimeout(() =>resolve(2*val), 2000)
    });
}

// Example1 - handler return a value that gets wrapped up in a promise
p1(1).then(val => val) //2
     .then(val => 3 * val)//6
     .then(val => 4* val) //24
     .then(val => console.log(val));

//Example2- handler is returning promise itself
p1(1).then(val => p1(val)) //4
     .then(val => p1(val)) //8
     .then(val => p1(val)) //16
     .then(val => p1(val))// 32
     .then(val => console.log(val))

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

loadScript('src1').then(script1 => {
    loadScript('src2').then(script2 => {
        loadScript('src3').then(script3 => {
            loadScript('src4').then(script4 => console.log(script1,script2,script3,script4))
        });
    });
})


//--------------------------Block 3 ----------------------------------------------------------------
/* 
Sometimes it’s ok to write .then directly, because the nested function has access to the outer scope. In the example above the
 most nested callback has access to all variables num1,num2,num3. But that’s an exception rather than a rule.
*/


function p1(num1) {
    return new Promise((resolve,reject) => {
        setTimeout(() =>resolve(2*num1),1000)
    });
}

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