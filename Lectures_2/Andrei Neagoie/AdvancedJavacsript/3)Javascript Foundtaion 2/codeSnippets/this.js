//snippet 1

/* function importantPerson() {
    console.log(this.name);
}
const name = "Global Name";

let obj1 = {
    name: "Obj1 Name",
    importantPerson: importantPerson
}

let obj2 = {
    name: "Obj2 Name",
    importantPerson: importantPerson
}

importantPerson();
obj1.importantPerson();
obj2.importantPerson(); */


// Snippet 2

/* const a = function() {
    console.log(this);
    const b = function() {
        console.log(this);
        const c = {
            hi: function() {
                console.log(this);
            }
        }
        c.hi();
    }
    b();
}

a(); */

/* output-
window
window
c */


//Snippet 3

/* 
This is not lexically scope it does not matter where it is written, what matters is how
fucntion was called.so value of this depedns on that. here this is inside obj object but it does not point to obj. 
Value of this depends upon how we call that function.In same function this can point to diffrent things, depending 
upon how that functon was called. everything in java is lexically scoped but this keyword is dynamically scoped.
lets see this by example
*/

/* const obj = {
    name: 'Billy',
    sing() {
        console.log(this); // obj
        // var anotherFunc = function() {
        //     console.log(this); // global object
        // }
        // anotherFunc();
        var anotherFunc = () => {
            console.log(this); // global object
        }
        anotherFunc();
    }
};
obj.sing(); */

/* output-
obj
global object */


/* Common problem in js is that we want this to point to something else(lets say we wnat to point it to our object here)
 but it points to global object, this is because of dynamic scope nature of this(you saw problem in last code snippet).
 there are no of solutions to this problem, lets see them all -
  
a) use arrow functions, in arrow function "this" is lexicallys scoped let see code snippet 6
 */
//Snippet 4

/* 
 Arrow fucntions are lexically bound, it means arrow fucntion has lexical this behaviour unlike normal function.
 here obj sorrunds this, hence this in arrow function points to obj
 In js it is common problem that this points to global object while wwant it to point to something else
 so arrow fucntion is one solution, second solution is to use call, bind and apply
 */

/* const obj = {
    name: 'Billy',
    sing() {
        console.log(this);
        var anotherFunc = () => {
            console.log(this);
        }
        anotherFunc();
    }
};
obj.sing(); */

/* output -
obj
obj */

/* 
b)Using call,apply or bind
*/
//Snippet 5

/* const obj = {
    name: 'Billy',
    sing() {
        console.log(this);
        var anotherFunc = function() {
                console.log(this);
            }
            // we are outside inner function, so this points to obj here
        return anotherFunc.bind(this);
    }
};
obj.sing()(); */

/* 
c)Storing value of this in some variable then using that stored value
inside the inner function
*/

//Snippet 8

/* const obj = {
    name: 'Billy',
    sing() {
        console.log(this);
        var that = this;
        var anotherFunc = () => {
            console.log(that);
        }
        anotherFunc();
    }
};
obj.sing(); */

/* output-
obj
obj */

//you can see that all these are ways are like bandage to fix this idea of dynamically
//scoped this keyword, which ruins our idea of lexically scoping

//Snippet 9

/* var b = {
    name: 'Jay',
    say() {
        console.log(this);
    }
};

var c = {
    name: 'Jay',
    say() {
        return function() {
            console.log(this);
        }
    }
};

var d = {
    name: 'Jay',
    say() {
        return () => {
            console.log(this);
        }
    }
};

b.say();
c.say()();
d.say()(); */

// output-
// b
// global object
// b