
//1
const [x,...{length}] = [1,2,3];
console.log(length);

/* 
The rest property of array destructuring assignment can be another array or object.
The inner destructuring destructures from the array created after collecting the rest elements.

const [x, ...{ length }] = [1, 2, 3];

is equivalent to

const [x] = [1, 2, 3]; // 1
const { length } = [2, 3]; // 2

*/

//2

const [a,b,...[c]] = [1,2,3,4]

console.log(c);


/* 
The rest property of array destructuring assignment can be another array or object.
The inner destructuring destructures from the array created after collecting the rest elements.

const [a, b, ...[c]] = [1, 2, 3, 4];

is equivalent to

const [a, b] = [1, 2, 3, 4]; // 1, 2
const [c] = [3, 4]; // 3
*/

//3

const arr3 = [];

const obj3 = {a3: 1, b3:2}

const {a3:arr3[0], b3: arr3[0]} = obj3;

/* 
This syntax is invalid because it is equivalent to:

const arr[0] = obj.a;
const arr[1] = obj.b;

Which definitely is not valid.

const { a: arr[0], b: arr[1] } = obj;
// SyntaxError: Identifier 'arr' has already been declared

*/


//4


[x] = new Set();

console.log(x)


/* 
The Set object lets you store unique values of any type.

The Set() constructor creates Set objects:

new Set(iterable)

If an iterable object is passed, all of its elements will be added to the new Set.
Strings are iterable by Unicode code points. Array destructuring can be applied to any iterable.

*/

