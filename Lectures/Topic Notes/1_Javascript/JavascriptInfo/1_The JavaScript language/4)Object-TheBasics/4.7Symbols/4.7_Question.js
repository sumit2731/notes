//1 error cannot convert symbol to number

const arg1 = Symbol(1)
const arg2 = Symbol(2)

console.log(arg1 + arg2);


//2


const foo1 = new Symbol(1)
const foo2 = new Symbol(2)

console.log(foo1 == foo2);
