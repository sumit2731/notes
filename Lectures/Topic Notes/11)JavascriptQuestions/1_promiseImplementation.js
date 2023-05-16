class MyPromise {
    state = 'pending';
    resolvedValue;
    resolveCallback = (value) => {
        this.resolvedValue = value;
        this.state = 'fulfilled';
    };
    rejectCallback =  () => {}
    
    constructor(cb) {
        cb(this.resolveCallback,this.rejectCallback);
    }
    
    then(sucessHandler, errorHandler) {
        this.resolveCallback = sucessHandler;
        this.rejectCallback = errorHandler;
    }
}

// const p1 = new Promise((resolve, reject) => {
//     //resolve("hello")
//     setTimeout(() => resolve("hello"), 1000)
// });

// p1.then(val => {
//     console.log("Inside then block");
//     console.log(val);
// });
const p1 = new Promise((resolve, reject) => {
    resolve("hello")
});

p1.then(val => {
    console.log("Inside then block");
    console.log(val);
});