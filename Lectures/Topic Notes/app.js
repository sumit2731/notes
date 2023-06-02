let name1 = new String("Sumeet");

let name2 = String("Sumeet")

let name3 = Object("Sumeet")

console.log(name1); //[String: 'Sumeet']
console.log(typeof name1); //object
console.log(name1 instanceof String); // true

console.log(name2); // Sumeet
console.log(typeof name2); //string
console.log(name2 instanceof String); //false

console.log(name3); //[String: 'Sumeet']
console.log(typeof name3); //object
console.log(name3 instanceof String); //true