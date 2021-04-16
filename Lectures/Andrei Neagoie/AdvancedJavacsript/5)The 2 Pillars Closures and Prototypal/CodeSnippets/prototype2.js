//Snippet1
/* 
 *Here we have added a new function which can be used on all date objects
 *note here we cannot use arraow functions because in arrow function value
 *of this is defined lexically, so this will point to global object instead
 *of pointing to date object using which we called our getLastYear function
 */

/* Date.prototype.getLastYear = function() {
    let year = this.getFullYear();
    return year - 1;
}
let date1 = new Date();
console.log(date1.getLastYear()); */

//Snippet 2
/* 
 *Here we modify the built in method map of array
 */
/* Array.prototype.map = function() {
    let str = '';
    for (let ele of this) {
        str = str + ele + '@ ';
    }
    return str;
}
let arr = [1, 2, 3, 4, 5];
console.log(arr.map()); */

//Snippet 3

/* 
Here we create our own bind method by using call and apply
*/

Function.prototype.bind = function(whoIsCallingMe) {
    const self = this;
    return function() {
        return self.apply(whoIsCallingMe, arguments);
    };
}
let fun = function name() {
    console.log(this);
};
let fun2 = fun.bind2({ name: 'sumeet' });
fun2();