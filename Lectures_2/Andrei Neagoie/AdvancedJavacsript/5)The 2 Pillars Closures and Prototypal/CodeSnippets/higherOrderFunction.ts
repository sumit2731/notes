//snippet1
//Advantages of higher order functions

//Problem- here we have 2 separate functions for different roles

/* const giveAccessTo = (name) => 'Acess Granted to ' + name;

function letUserLogin(user) {
    let array = [];
    for (let i = 0; i < 1000000; i++) {
        array.push(i)
    }
    return giveAccessTo(user);
}

function letAdminLogin(admin) {
    let array = [];
    for (let i = 0; i < 5000000; i++) {
        array.push(i)
    }
    return giveAccessTo(admin);
}

letUserLogin('Eva');
letAdminLogin('sumeet'); */

//Solution with with higher order fucntion-

/* const giveAccessTo = (name) => 'Acess Granted to ' + name;

function authenticate(verify, person) {
    let array = [];
    for (let i = 0; i < verify; i++) {
        array.push(i)
    }
    return giveAccessTo(person.name);
}

function sing(verify,person) {
    return 'la la la my name is ' + person.name;
}

function letPerson(person, fn) {
    if (person.level === 'admin') {
         return fn(500000, person);
    } else if (person.level == 'user') {
         fn(100000, person);
    }
}

letPerson({ level: 'user', name: 'Tim' }, authenticate);
letPerson({ level: 'user', name: 'Jim' }, sing); */

//Snippet3

/* const multiplyBy = function (num1) {
    return function (num2) {
        return num1 * num2;
    }
}

const multiplyByTwo = multiplyBy(2);
console.log(multiplyByTwo(10)); */