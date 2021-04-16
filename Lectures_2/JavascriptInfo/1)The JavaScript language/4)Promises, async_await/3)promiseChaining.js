/* 
On Javascript.info, see the concept of Thenables
*/

/* 
The whole thing works, because a call to promise.then returns a promise, so that we can call the next .
then on it.When a handler returns a value, it becomes the result of that promise, so the next .then is 
called with it.
*/

new Promise((resolve,reject) => {
    
    setTimeout(() => resolve(1), 5000);

}).then((val) => {
    
    console.log(val);
    return 2*val;

}).then(val => {
    
    console.log(val);
    return 2*val;

}).then(val => {
    
    console.log(val);
});


/* 
A handler, used in .then(handler) may create and return a promise.In that case further handlers wait until it
settles, and then get its result. Returning promises allows us to build chains of asynchronous actions.
*/

new Promise((resolve, reject) => {
    
    setTimeout(() => resolve(1), 5000);

}).then(val => {
    
    console.log(val);
    return new Promise((resolve, reject) => setTimeout(() => resolve(2*val), 5000));

}).then(val => {
    
    console.log(val);
    return new Promise((resolve, reject) => setTimeout(() => resolve(2* val), 5000));

}).then(val => {

    console.log(val);
});

/* 
Loading Multiple Scripts one after another
*/

function loadScript(src) {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Script load error for ${src}`));
    document.head.append(script);
  });

}

loadScript("script1.js")
    .then(script => loadScript("script2.js"))
    .then(script => loadScript("script3.js"))
    .then(call => {
        //there can be many riddles
    })


/* 
As a good practice, an asynchronous action should always return a promise. That makes it possible to plan 
actions after it; even if we don’t plan to extend the chain now, we may need it later.

*/