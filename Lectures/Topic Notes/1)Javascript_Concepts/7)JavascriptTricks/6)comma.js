/* 
Trick 1
Multiple line decalartion
*/

let x = 2, y= 3, z=3;

/* 
Trick 2, last value is returned in assignment
*/

let a= (1,2,3);

console.log(a); //3

let b , c;
b = ( a= c , 100);
console.log(b); // 100


let a1, d1, bar, foo = { a1: 1, b1: 2, c1: 3, d1: 4 };
bar = ({a1, d1} = foo, {a1, d1});

console.log(bar); // {a:1, d1: 4}
