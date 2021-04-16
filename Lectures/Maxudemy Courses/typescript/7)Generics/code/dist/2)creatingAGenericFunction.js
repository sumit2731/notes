"use strict";
/*
here see video after max startes with generic function
*/
function merge2(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj2 = merge2({ name: 'Max' }, { age: 30 });
/*
Here we cannot access name and and age, object
even though i know both will exist one solution is to do typecasting
like this-

const mergedObj = merge({name: 'Max'}, {age: 30}) as {name: string, age: number};

but this solution is not scalable
*/
// console.log(mergedObj.name);
// console.log(mergedObj.age);
/*
Let's write a Generic Function to solve the problem.
we turn it into genric function by adding <> after function name. between <>
we define 2 identifiers,typically we start with T for type but you could use any
identifier here, does'nt hve to be single character. but convention is to use a
single character and typically if you only have one generic type, you name it T.

now return type infered by function is intersection of T and U
*/
function merge21(objA, objB) {
    return Object.assign(objA, objB);
}
/*
and because of that ts is able
to predict prpeties that will be avalible on mergedObj21. so we dnt get error
and we get IDE suggesstions.

*types of T and U are set dyamically at run time not at time when function is defined.
*/
const mergedObj21 = merge21({ name: "Max" }, { age: 30 });
console.log(mergedObj21.age);
/*
you can specifically tell ts which types it should fill in for T and U by adding
<> after function call. but this is redundant.
*/
const mergedObj22 = merge21({ name: "Max" }, { age: 30 });
//# sourceMappingURL=2)creatingAGenericFunction.js.map