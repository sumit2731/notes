/* 
Here we crateda a function which merges 2 objects ad returns the new merged Object
*/

function merge2(objA: object, objB: object) {
    return Object.assign(objA, objB);
}

const mergedObj2 = merge2({name: 'Max'}, {age: 30});

/* 
Here we cannot access name and and age, on mergedObj2 even though we know both will exist. this is because
return type of Obect.assign is object because we have defined type of its arguments as object and object. 
see defination of Object.assign for more details. return type of assign is T & U. for details check
ts defination of assign

one solution is to do typecasting like this-

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

function merge21<T, U>(objA: T, objB: U) {
  return Object.assign({},objA, objB);
}
/* 
and because of that ts is able to predict propeties that will be avalible on mergedObj21. 
so we dnt get error and we get IDE suggesstions.

*types of T and U are set when we define the function instead they are set dyamically when we call
  the function. here it assigns type {name: 'max'} to T and { age: 30 } to U
*/
const mergedObj21 = merge21({ name: "Max" }, { age: 30 });
console.log(mergedObj21.age);

/* 
you can specifically tell ts which types it should fill in for T and U by adding
<> after function call. but this is redundant.
*/
const mergedObj22 = merge21<{name: string}, {age: number}>({ name: "Max" }, { age: 30 });