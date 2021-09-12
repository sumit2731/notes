let john = { name: "John" };
let carl = { name: "John" };

let weakMap = new WeakMap();
weakMap.set(john, "...");
weakMap.set(carl, "...");

//john = null;
console.log(weakMap.size);