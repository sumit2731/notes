function isObject(value) {
    //this is check for null
    // if(!value) return false;
    // return (typeof value == 'object') || (typeof value == 'function')
    //this returns false for primitives, null and undefined
    //true for functions,array,pojo
    return value instanceof Object;
}


function isPlainObject(value) {
    //null and undefined cannot get prototype
    if(!value) return false;
    return (Object.getPrototypeOf(value) == Object.prototype || Object.getPrototypeOf(value) == null)
}

console.log(isObject(null));
console.log(isObject(undefined));