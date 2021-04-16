// let map = new Map([[1, 'sumeet'],[2, 'sood']]);

// let set = new Set(map);

// for (let value of set) console.log(value);

let obj1 = {name: "sumeet"};
let map1 = new Map();
map1.set(obj1,"sumeet sood");

console.log(map1.get({name: "sumeet"}));
console.log(map1.get(obj1));
