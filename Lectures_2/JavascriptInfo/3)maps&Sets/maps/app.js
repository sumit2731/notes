/* 
*Difference between Map and Object
*/

let obj = {};

let emp1 = {name: "Sumeet"}
let emp2 = {name: "Archana"};

obj[emp1] = "emp1";
obj[emp2] = "emp2";

//console.log(obj[emp1]); // prints emp2

let map = new Map();
map.set(emp1,"emp1");
map.set(emp2,"emp2");

//console.log(map.get(emp1)); // prints emp1

//-----------------------------------------------------------

//clone maps
let original = new Map([[1, "one"]]);

let clone = new Map(original);

console.log(clone.get(1)); // one
console.log(original === clone);

// merging maps

let first = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
])

let second = new Map([
  [1, 'uno'],
  [2, 'dos']
])

// Merge two maps. The last repeated key wins.
// Spread operator essentially converts a Map to an Array
let merged = new Map([...first, ...second])

console.log(merged.get(1)) // uno
console.log(merged.get(2)) // dos
console.log(merged.get(3)) // three

/* ---------------------------------------------------------------------------- */
//Maps can also be merged with arrays


// Merge maps with an array. The last repeated key wins.
let merged = new Map([...first, ...second, [1, 'eins']])

console.log(merged.get(1)) // eins
console.log(merged.get(2)) // dos
console.log(merged.get(3)) // three