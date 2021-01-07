const obj1 = {a: 1, b:2};
const obj2 = {c: 3, d:4};
const obj3 = Object.assign(obj1, obj2);
obj2.c = 30;
obj1.a = 10;
console.log(obj3);