const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/TodoApp");



// const getDataPromise = (num) => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         typeof num === 'number' ? resolve(num * 2) : reject('Number Must be provided')
//     }, 2000);
// })
// getDataPromise('yu')
//     .then(
//         data => {
//             return getDataPromise("56");
//         },
//         err => console.log("error at first level")
//     )
//     .then(data => {
//         return getDataPromise(data);
//     })
//     .then(data => {
//         console.log(data);
//     }).catch(error => console.log("Catch block is executed"));