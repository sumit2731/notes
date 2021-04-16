let test1 = require('./test1.js');
let person = {
    name: 'sumeet'
};
let name = test1.throwName();
console.log(name);
person.age = 27;
person.name = 'sood';
debugger;
person.name = 'archana';
console.log(person);