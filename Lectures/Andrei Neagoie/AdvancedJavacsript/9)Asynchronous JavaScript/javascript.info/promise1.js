// producing code, consuming code, subscription list
// executor function has producing code


//The function passed to new Promise is called the executor.
//When new Promise is created, it runs executor automatically.
//It contains the producing code(like making api call, setTimeout, reading a file), that should eventually produce a result.
//Its arguments resolve and reject are functions are pre - defined by the JavaScript engine.So we don’t need to create them.
//We should only call one of them when ready.resolve/reject expect only one argument (or none) and will ignore additional arguments.
//Our code is only inside the body of executor
let promise = new Promise(function(resolve, reject) {
    // When the executor obtains the result, be it soon or late – doesn’t matter, it should call one of these callbacks:
    //resolve(value) — if the job finished successfully, with result value.
    //reject(error) — if an error occurred, error is the error object.
    setTimeout(() => resolve("done"), 1000);
    //So to summarize: the executor runs automatically, it should do a job and then call either resolve or reject.
});


//promise chaining

new Promise(function(resolve, reject) {

    setTimeout(() => resolve(1), 1000); // (*)

}).then(function(result) { // (**)

    alert(result); // 1
    return result * 2;

}).then(function(result) { // (***)

    alert(result); // 2
    return result * 2;

}).then(function(result) {

    alert(result); // 4
    return result * 2;

});