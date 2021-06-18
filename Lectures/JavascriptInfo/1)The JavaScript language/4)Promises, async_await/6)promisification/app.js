function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
  
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));
  
    document.head.append(script);
}
  
/* 
*******Promise based implementation of loadScript****************************************
*/

function loadScript2(src) {
    return new Promise((resolve, reject) => {
        loadScript(src, (error, result)=> {
            if(error) reject(error);
            else resolve(result);
        })   
    });
}

loadScript2(src).then(script => console.log("Loaded"))



/* 
*******Function that accepts callback *******************************
*/
function delay(delayTime, number, fn) {
    setTimeout(() => fn(null,number), delayTime)
}

/* 
*****************Useage of callback based function **************************************
*/
delay(5000,5,(error,number) => {
    if(error) throw new Error("Error Occured")
    else console.log("Number Paased is " +number);
});

/* 
****Promisification - Define promisify such that -
*/

let newDelay = promisify(delay);
newDelay(5000,5).then((number)=> console.log("Passed Number is "+number));


/* 
*******Function that converts callback based function to a promise based(My Implementation)****************************************
*/

function promisify(fn) {
    return function(...args) {
        return new Promise((resolve,reject) => {
            fn(...args,(error,result) => {
                if(error) reject(error);
                else resolve(result);
            })
        });
    }
}

/* 
*****Course Implementation ********************************
*/

function promisify2(f) {
    return function (...args) { // return a wrapper-function (*)
      return new Promise((resolve, reject) => {
        function callback(err, result) { // our custom callback for f (**)
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
  
        args.push(callback); // append our custom callback to the end of f arguments
  
        f.call(this, ...args); // call the original function
      });
    };
}

/* 
promisification is only meant for functions that call the callback once. Further calls will be ignored.
*/