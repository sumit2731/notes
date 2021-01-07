"use strict";
/*
Generics are ts only feature, it does not exist in js. It exists in some
other programming languages like c#

Array is default type which is built into ts and we worked a lot with it. Arrays are actually generics

here infered type is  string[]. you can actualy think of it as a 2 types being combined togather.

below are generics types that are built into ts
*/
let names = ['sumet', 'sood'];
/*
Here main type is Promise, but promise like an array kind of work togather with
other types, an array ysed other types because it store data in it, data of certain type and
promise works togather with other types because eventually it kind of returns some data of some type.
*/
const promise = new Promise((resolve, reject) => {
    resolve('1');
});
/*
because we used generic type, now ts knows that type of data is string
so we will get intellisense, and will get error if we try to access proeprties
that does not exist on string. so we get better type safety with generic types.
*/
promise.then((data) => console.log(data.charAt(0)));
/*
so you are really flexible regarding what you do with that generic type information
an array knows which data it stores , a promise knows which data it retunrs. If you buid your own
generic classes or functions you might do something totally different in there. but in the end generic types
help you ti get additional type information, if you have got a more complex class or more function that does
something with data that's coming ina way where it does'nt really care about data being of one particular
type but where you want to store the type infrmation of incoming data to get better ts support.
*/ 
//# sourceMappingURL=1)builtInGenerics.js.map