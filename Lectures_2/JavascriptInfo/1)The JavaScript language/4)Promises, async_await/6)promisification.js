/* 
“Promisification” is a long word for a simple transformation. It’s the conversion of a function that accepts a 
callback into a function that returns a promise.
*/

function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));

  document.head.append(script);
}

// usage:
// loadScript('path/script.js', (err, script) => {...})

//Let’s promisify it.

function loadScriptPromise(script) {
    return new Promise((resolve, reject) => {
        loadScript(script,(errpr,script) => {
            if(error) reject("Failed To load Script");
            else resolve(script);
        })
    });
}

// usage:
// loadScriptPromise('path/script.js').then(...)

/* 
In practice we may need to promisify more than one function, so it makes sense to use a helper.

We’ll call it promisify(f): it accepts a to-promisify function f and returns a wrapper function.
*/

/* 
My Implementattion
*/
function promisify(fn) {
    
    function f1(...args) {
        return new Promise((resolve, reject) => {
            fn(...args, (error, result)=> {
                if(error) reject(err);
                else resolve(result);
            })
        });
    }
    return f1;
}
/* 
implementation on website - 
*/

function promisify(f) {
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

Useage of promisify - 
*/
function callbackBased(a, b,c, callback) {
    setTimeout(() => {
        console.log(a);
        console.log(b);
        console.log(c);
        callback(null, a);
    }, 1000)
}

callbackBased(1,2,3, (error, succss) => {
    if(error) console.log("Error Occured")
    else console.log("Sucess " +succss);
});

let promiseBased = promisify(callbackBased);
promiseBased(1,2,3).then(succss => console.log("Sucess " +succss), (error) => console.log("Error Occured"))


/* 
Promisification is a great approach, especially when you use async/await (see the next chapter), but not a total
 replacement for callbacks.Remember, a promise may have only one result, but a callback may technically be called
 many times.So promisification is only meant for functions that call the callback once. Further calls will be 
 ignored.
*/

