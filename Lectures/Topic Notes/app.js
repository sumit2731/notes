// copy toString method into a variable for convenience
let objectToString = Object.prototype.toString;

// what type is this?
let arr = [];

console.log( objectToString.call(arr) ); // [object Array]
console.log( objectToString.call(new Number(1)) ); // [object Array]
console.log( objectToString.call(null) ); // [object Array]