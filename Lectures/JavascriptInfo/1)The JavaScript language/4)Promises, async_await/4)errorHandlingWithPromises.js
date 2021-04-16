/* 
Promise chains are great at error handling. When a promise rejects, the control jumps to the closest rejection
 handler. That’s very convenient in practice.

 Implicit try…catch in executor function as well as all then chains
*/


let p1 = new Promise(function(resolve, reject) {
   resolve(1);
});

p1.then(val => {
    throw Error("Custome Error")
   })
   .catch(error => console.log("Promised Rejected " + error));


/* 
.catch at the end of the chain is similar to try..catch. We may have as many .then handlers as we want, and then
    use a single .catch at the end to handle errors in all of them.

In a regular try..catch we can analyze the error and maybe rethrow it if it can’t be handled. The same thing is 
    possible for promises.If we throw inside .catch, then the control goes to the next closest error handler. 
    And if we handle the error and finish normally, then it continues to the next closest successful .then 
    handler.
*/