/* 
When a a promise(p2) resolves to pending promise(p1). then p2 will also not be resolved until p1 is resolved.
    result of p2 is same as p1.

*/

let p1Result = 100;

let p1 = new Promise((resolve,reject) => setTimeout(() => resolve(p1Result),10000));
let p2 = new Promise((resolve,reject) => resolve(p1)); // this will wait for p1 to get resolved and will use it's result.

p2.then(val => {
    console.log(`P2 Resolved with ${val}`) // p1Result
});
console.log(p2);
console.log(p1);


/* 
same can be extended to any level.
when a prmomise(p22) resolves to a promise(p1), actually it resolves to value of p1, not p1 itself

*/

let p22 = new Promise((resolve,reject) => setTimeout(() => resolve(p1),15000)); // even on calling resolve, this will wait until
//p1 is not resolved. but here p1 is already resolved, so it uses its value

let p3 = new Promise((resolve,reject) => resolve(p22)); // this will wait until p22 is resolved


p3.then(val => console.log(`P3 Resolved with ${val}`));
p22.then(val => console.log(`P22 Resolved with ${val}`));
p1.then(val => console.log(`P1 Resolved with ${val}`));
