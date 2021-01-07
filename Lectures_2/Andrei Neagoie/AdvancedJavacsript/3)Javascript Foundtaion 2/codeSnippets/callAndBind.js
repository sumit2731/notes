//snippet1

/* 
use of call, apply
we are burrowing the fucntion from another object
this is called fucntion burrowing , here also see diffrence between call
and apply, they just differ how we pass other arguments to them, rest all is same
*/


/* const wizard = {
    name: 'Merlin',
    health: 50,
    heal(number1, number2) {
        return this.health += number1 + number2;
    }
};

const archer = {
    name: 'Robin Hood',
    health: 30
};

wizard.heal.call(archer, 50, 50);
wizard.heal.apply(archer,[50,50]);
console.group(archer.health); */


//Snippet 2

/* 
bind returns a new fucntion with certain context and params
*/

/* const wizard = {
    name: 'Merlin',
    health: 50,
    heal(number1, number2) {
        return this.health += number1 + number2;
    }
};

const archer = {
    name: 'Robin Hood',
    health: 30
};
const healArcher = wizard.heal.bind(archer, 100, 30);

console.log(archer.health);
healArcher();
console.log(archer.health); */

//Snippet3

/* 
Another use of apply is, some time a function accepts list of arguments but we have array, in that
we use aply to handle the situation
*/

/* const array = [1, 2, 3];
function getMaxNumber(arr) {
    return Math.max.apply(null, arr);
}
getMaxNumber(array); */

// Function Currying, we will learn more about it in our fucnional programming section
//Snippet 4

/* function multiply(a, b) {
    console.log(a);
    console.log(b);
    return a * b;
}
// we dnt really care what this points to here
let multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(10));

let multiplyByTen = multiply.bind(this, 10);
console.log(multiplyByTen(10)); */

//Snippet 5
//use of bind-
const character = {
    name: 'Simon',
    getCharacter() {
        return this.name;
    }
};
const giveMeTheCharacterNOW = character.getCharacter;
// solution - const giveMeTheCharacterNOW = character.getCharacter.bind(character);

//How Would you fix this?
console.log('?', giveMeTheCharacterNOW()); //this should return 'Simon' bud doesn't