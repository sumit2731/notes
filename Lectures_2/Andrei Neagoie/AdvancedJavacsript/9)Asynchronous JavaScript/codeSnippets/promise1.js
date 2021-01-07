//Snippet 1
/* 
 *Here we can see that how we can create promise
 *to then we pass 2 callbacks first one is executed when promise is resolved,
 *second one is executed if promise is rejected
 *In  ex-2, we see how promise chianing works
 */

const promise = new Promise((resolve, reject) => {
    if (false) {
        resolve("Stuff worked");
    } else {
        reject("Error, it failed");
    }
});
// ex-1
promise.then(result => console.log(result), failure => console.log(failure));
//ex-2 promise chaining
promise
    .then(result => result + '!')
    .then(result2 => console.log(result2));
// now we can print promise and see that state is resolved and value is "Stuff worked"
// Promise {<resolved>: "Stuff worked"}, [[PromiseStatus]]: "resolved" [[PromiseValue]]: "Stuff worked"

//ex-3
//Here we used finally, finally is executed in both sucess and failure and it passes value to next
//method
const promise = new Promise((resolve, reject) => {
    if (false) {
        resolve("Stuff worked");
    } else {
        reject("Error, it failed");
    }
});

promise
    .finally(() => console.log("Got Result"))
    .then(value => console.log(value))
    .catch(value => console.log(value));
console.log(promise);

//Snippet2
/* 
 *It shows how promise chaining works in case of async
 *task
 */

/* const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve("Stuff worked");
    } else {
        reject("Error, it failed");
    }
});

promise
    .then(result => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(`${result}!`);
            }, 10000);
        });
    })
    .then(result2 => console.log(result2)); */

//Snippet 3

/* 
 *Catching Error in Promise chaining
 */

/* const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve("Stuff worked");
    } else {
        reject("Error, it failed");
    }
});

 
// here catch statement will get error at any stage, 
// whether it is in first then or in second then 

promise
    .then(result => {
        //throw Error;
        return result + '!';
    })
    .then(result2 => {
        throw Error;
        console.log(result2);
    })
    .catch(() => console.log("Error Occured"));


//  *Here you can see that catch is only executed when we get
//  *Error, if we get error in third promise, this will not be caught, so catch statement will run
//  *if anything before it fails
 
promise
    .then(result => {
        //throw Error;
        return result + '!';
    })
    .then(result2 => result2 + '!')
    .catch(() => console.log("Error Occured"))
    .then(result3 => {
        //throw Error;
        console.log(result3 + '!');
}); */

//Snippet 4

/* Promise.all
 *here if all promises are resolved then our final promise will be resolved , value of resolved promise is array
 *now we can handle promise rejection and Error generation(in any induival promise) in 2 ways- 1)to provide second 
 *callback in then 2)use catch
 */

/* const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "promise1 resolved");
    //throw Error;
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "promise2 resolved");
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "promise3 resolved");
    //setTimeout(reject, 1000, "promise3 resolved");
    //throw Error;
});

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1200, "promise4 rejected");
});

// here we are handling rejections as well as errors by second callback to then
Promise.all([promise1, promise2, promise3, promise4])
    .then(value => console.log(value), value => console.log("Got Error" + value));

// here we are handling rejections as well as errors by using catch block,
// if we execute this statement later, then we will get results instanly because promises have been resolved
Promise.all([promise1, promise2, promise3, promise4])
    .then(value => console.log(value))
    .catch(value => console.log(value)); */