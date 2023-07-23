let clone2 = structuredClone(user2);
console.log(clone2.me === clone2); // true

/**
 * Although, there are cases when structuredClone fails.For instance, when an object has a function property. it throws the error.
 *
 * To handle such complex cases we may need to use a combination of cloning methods, write custom code or, to not reinvent the wheel,
 * take an existing implementation, for instance _.cloneDeep(obj) from the JavaScript library lodash.
 *
 */