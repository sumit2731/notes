//Function Statement or Function Decalation
function a () {}

// Function Expression

var a = function() {

}

// Main difference between statement and declataion is hoisting

/* 
Anonymous Functions - functions without name
*/
//syntax error - Function Statement requires the name
function() {}
/* 
so what is use of anonymous functions. these are used where functions are used as a values. It means we can assign them to a variable

*/

var c = function() {}

//named function expression


var d = function f1() {} // function caannot be called using f1 name. but inside the function we can refer to f1


//parameters vs arguments - params are defined when we define function. argumnets are passed when we call function


/* 
First Class Functions - Functions are first class citizens

Functions are treated as first class citizens.They can be used as values. They can be stored in variables, passed as argumnets into 
    functions, function can return another function. so ability to use functions as values is called first class functions.
*/