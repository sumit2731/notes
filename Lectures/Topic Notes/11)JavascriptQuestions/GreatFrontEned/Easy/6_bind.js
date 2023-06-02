/**
 * Minute Details about bind function
 * 
 * If the function is not in strict mode, null and undefined will be replaced with the global object, and primitive values will
 *  be converted to objects.
 * 
 * A bound function can be further bound by calling boundFn.bind(thisArg, mprergs), which creates another bound function 
 *  boundFn2. The newly bound thisArg value is ignored, because the target function of boundFn2, which is boundFn, already has 
 *  a bound this. When boundFn2 is called, it would call boundFn, which in turn calls fn. The arguments that fn ultimately 
 *  receives are, in order: the arguments bound by boundFn, arguments bound by boundFn2, and the arguments received by boundFn2.
 * 
 * A bound function may also be constructed using the new operator if its target function is constructable. Doing so acts as 
 * though the target function had instead been constructed. The prepended arguments are provided to the target function as usual,
 * while the provided this value is ignored (because construction prepares its own this, as seen by the parameters of 
 * Reflect.construct). If the bound function is directly constructed, new.target will be the target function instead. (That is, 
 * the bound function is transparent to new.target.).note that you need not do anything special to create a bound function for use
 * with new. new.target, instanceof, this etc. all work as expected, as if the constructor was never bound. The only difference 
 * is that it can no longer be used for extends.
 * 
 * 
 * However, because a bound function does not have the prototype property, it cannot be used as a base class for extends.
 * // TypeError: Class extends value does not have valid prototype property undefined
 * 
 * When using a bound function as the right-hand side of instanceof, instanceof would reach for the target function (which is 
 * stored internally in the bound function) and read its prototype instead.
 * 
 * 
 * The bound function has the following properties: -
 *  length - The length of the target function minus the number of arguments being bound (not counting the thisArg parameter), 
 *      with 0 being the minimum value.
 * 
 *  name - The name of the target function plus a "bound " prefix.
 * 
 * 
 * Using bind() on classes preserves most of the class's semantics, except that all static own properties of the current class 
 * are lost. However, because the prototype chain is preserved, you can still access static properties inherited from the parent
 * class.
 * 
 * 



/**
 * Things missed in first implementation - 
 * a)forgot to return value in last line.
 * b)forgot to handle case when thisContext is not a object but primitive
 * c)primitive values will be converted to objects.
 * d)The value is ignored if the bound function is constructed using the new operator.
 * 
 * This implementation fails in case value of this is primitive
 */
Function.prototype.myBind = function (thisContext, ...args) {

    let sym = Symbol();
    Object.defineProperty(thisContext, sym, {
        enumerable: false,
        value: this
    });
    return function dummyFunction(...args2) {
        wrapperObj[sym](...args, ...args2);
    }
}

/**
 * Implementation that handles these cases -
 *      a)return value
 *      b)cases when valaue of this is primitive type
 */
Function.prototype.myBind2 = function (thisContext, ...args) {

    let sym = Symbol();
    const wrapperObj = Object(thisContext)
    Object.defineProperty(wrapperObj, sym, {
        enumerable: false,
        value: this
    });
    return function dummyFunction(...args2) {
        return wrapperObj[sym](...args, ...args2);
    }
}

//also see course solution