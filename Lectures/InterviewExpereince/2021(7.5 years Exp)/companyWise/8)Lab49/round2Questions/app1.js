
function add (a,b) {
    return a + b;
}

function multiply(a,b) {
    return a *b;
}

let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]

flatten(arr, add) // [12,15,18]

flatten(arr, multiply) // [28,80,162]

/* 
define flatten function
*/

function flatten(arr,reducer) {
    
}