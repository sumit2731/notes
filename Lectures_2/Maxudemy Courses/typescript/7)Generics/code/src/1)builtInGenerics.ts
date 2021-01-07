/** @For this and next section refer videos
Generics are ts only feature, it does not exist in js. It exists in some
other programming languages like c#.lets look at some default generics tht exist in ts.

Array is default type which is built into ts and we worked a lot with it. Arrays are actually generics

here infered type is  string[]. you can actualy think of it as a 2 types being combined togather. like object 
can have diffrent proprties,where in every property you might be storing a different type.array is also a 
thing with different data in it, in case with strig in it.

so Array is generic type. Generic is something that is connected with other type and it is really flexible
reagrding what excat type other type. here Array is generic type and it is connected with string type.
it can also get connected with other types like , so it is really flexible.
*/

let names: Array<string> = ['sumet', 'sood'];
/* 
above is 100% sa me as  - string[]. we need this other type i.e string so that ts can gice us better type 
support. when wever we access any element of array, we will get sugestions for string functions.
*/

/* 
Here main type is Promise, but promise like an array kind of work togather with
other types, an array used other types because it store data in it, data of certain type and
promise works togather with other types because eventually it kind of returns some data of some type.
If we do npt specify any type, like this
    const promise = new Promise((resolve,reject) => {
    resolve('1');
    });

the by default it takes the type of Promise<unknown>
*/
const promise: Promise<string> = new Promise((resolve,reject) => {
    resolve('1');
});

/* 
because we used generic type, now ts knows that type of data is string
so we will get intellisense, and will get error if we try to access proeprties
that does not exist on string. so we get better type safety with generic types.
*/
promise.then((data) => console.log(data.charAt(0)));

/* 
so you are really flexible regarding what you do with that generic type information.
an array knows which data it stores , a promise knows which data it retunrs. If you buid your own
generic classes or functions you might do something totally different in there. 

Idea of generics is -

but in the end generic types help you to get additional type information, if you have got a more complex class or more function that does
something with data that's coming in a way where it does'nt really care about data being of one particular 
type but where you want to store the type information of incoming data to get better ts support. 
*/