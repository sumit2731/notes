/**
 Same question in bigFrontend - https://www.greatfrontend.com/questions/javascript/function-bind
 see the solution


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