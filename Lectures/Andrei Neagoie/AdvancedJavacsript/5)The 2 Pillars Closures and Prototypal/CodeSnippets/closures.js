//Snippet 1
//Closures
/* function parent() {
    var parent = 'From Parent'
    return function f2() {
        return parent;
    }
}

console.log(parent()()); */

//question- write a function that would allow you to do this-
/* var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27

solution - 
function createBase(a) {
    return function (b) {
        console.log(a + b);
    }
} */

//Snippet2
// closues also work even if some functions go to web api's

/* function callMeMaybe() {
    //const callMe = 'Hi! I am now here';
    setTimeout(function() {
        console.log(callMe);
    }, 4000);
    const callMe = 'Hi! I am now here';
}
callMeMaybe(); */

//Snippet 3- Benefits of closure
/* 
a)Memeory efficeincy with closure
*/

/* way 1- Bad way but we are loading array into memory, each time we call function, 
the it needs to be cleaned  because there is no refrence to it. lets s ay array is
loaded from database , so there is lot of work invloved
*/

/* function heavyDuty(index) {
    const bigArray = new Array(7000).fill('10');
    console.log('created');
    return bigArray[index];
}

heavyDuty(200);
heavyDuty(400); */

/*
 *Way 2- Here we solve the problem by keeping that array loaded into memory and without polluting
 *name space
 */

/* function heavyDuty() {
    const bigArray = new Array(7000).fill('10');
    return function getArray(index) {
        return bigArray[index];
    }
}
let get = heavyDuty();
console.log(get(300));
console.log(get(301)); */

//Benefit 2 - Encapsulation

/* 
 *Here outside world do not has access to launch function, this is encapsulation
 *Encapsulation is hiding  of information which is unnecessary to be seen by outside
 *world or manipulated. when we go to modules section we will see that classic modules patterns
 *like people used to use with immediately invoked fucntions used this pattern and we were
 *only able to use that because of closures
 */


/* const makeNuclearButton = () => {
    let timeWithoutDestruction = 0;
    const passTime = () => timeWithoutDestruction++;
    const totalPeaceTime = () => timeWithoutDestruction;
    const launch = () => {
        timeWithoutDestruction = -1;
        return '💥';
    }

    setInterval(passTime, 1000);
    return { totalPeaceTime }
}
const ww3 = makeNuclearButton();
ww3.totalPeaceTime(); */


//Snippet-4
/* 
 *use of closure, here we make sure that we initialize this variable only once
 */

/* let view;

function initialize() {
    let called = 0;
    return function() {
        if (called > 0) {
            return;
        } else {
            view = 'set';
            called++;
            console.log('view has been set');
        }
    }
} */

//Snippet -5

//Problem-
/* const array = [1, 2, 3, 4];
for (var i = 0; i < array.length; i++) {
    setTimeout(() => {
        console.log("I am at index " + i);
    }, 3000);
} */

//Solution 1

/* const array = [1, 2, 3, 4];
for (let i = 0; i < array.length; i++) {
    setTimeout(() => {
        console.log("I am at index " + i);
    }, 3000);
} */

// Solution 2
/* const array = [1, 2, 3, 4];
for (var i = 0; i < array.length; i++) {
    function f1() {
        let j = i;
        setTimeout(() => {
            console.log("I am at index " + j);
        }, 3000);

    }
    f1();
} */

// Solution 3
/* const array = [1, 2, 3, 4];
for (var i = 0; i < array.length; i++) {
    function f1(i) {
        setTimeout(() => {
            console.log("I am at index " + i);
        }, 3000);
    }
    f1(i);
} */

//soltion 4
// here we using immediately invoked functions

/* const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
    // pass in the variable i so that each function 
    // has access to the correct index
    setTimeout(function(i_local) {
        return function() {
            console.log('The index of this number is: ' + i_local);
        }
    }(i), 3000);
} */



//Snippet 6
/* 
Closure don’t remember the value of the variable it only points to the variable or
 stores the reference of the variable and hence, returns the current value.
*/

/* function outer() {
    var arr = [];
    var i;
    for (i = 0; i < 4; i++) {
        // storing anonymus function 
        arr[i] = function() { return i; }
    }

    // returning the array. 
    return arr;
}

var get_arr = outer();
console.log(get_arr[0]());
console.log(get_arr[1]()); */