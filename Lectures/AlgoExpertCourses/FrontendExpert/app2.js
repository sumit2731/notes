let promiseArray = [Promise.resolve(1),Promise.resolve(2),Promise.resolve(3)];
Promise.all(promiseArray).then(val => console.log(val))

for(let promise of promiseArray) promise = promise.then(val => 10*val)

Promise.all(promiseArray).then(val => console.log(val))
