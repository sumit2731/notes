//Snippet 1
/* 
 *Function is type of Object, althrough typeof keyword
 *returns function instead of object
 */
function a() {
    return 5;
}
a.hi = 'h1';

console.log(a.hi);
console.log(typeof a);


//Snippet 2
/* 
 *Call by value and call refrence
 *See Max's video to see answer
 */

/* let obj1 = {
    value: "a"
}
let obj2 = {
        value: "b"
    }

function change(obj1, obj2) {
    obj1 = obj2;
    obj2.value = "c";
    console.log(obj1);
    console.log(obj2);
}

change(obj1, obj2);

console.log(obj1);
console.log(obj2);
console.log(obj1.value); */