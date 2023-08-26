/**
 * Edge cases where i failed -
 *  a)All args bassed to call are forwarded to orignal function
 *  b)return the value returned by orignal function
 *  c)delete the extra added property
 * 
 * UNite Test cases -
 *  a)orignal function is called
 *  b)single arg is forwared to orignal function
 *  c)multiple args are forwarded to orignal function
 *  d)return correct return value
 *  e)correct value of this
 *  f)leaves context unchnaged
 *  g)orignal call,bind and apply is not called
 * 
 */

Function.prototype.myCall = function(thisContext,...args) {
    let symBolProperty = Symbol();
    thisContext[symBolProperty] = this;
    let returnValue = thisContext[symBolProperty](...args);
    delete thisContext[symBolProperty]; 
    return returnValue
}
Function.prototype.myApply = function(thisContext,argArray= []) {
    let symBolProperty = Symbol();
    thisContext[symBolProperty] = this;
    let returnValue = thisContext[symBolProperty](...argArray);
    delete thisContext[symBolProperty]; 
    return returnValue
}

/**
 * Course Solution
 */

Function.prototype.myApply = function(thisContext,argArray= []) {
    return this.call(thisContext,...argArray)
}

/**
 * Bind function also takes additional params
 */
Function.prototype.myBind = function (thisContext,...prevArgs) {
    const orignalFunction = this;
    return function(...newArgs) {
        const symBolProperty = Symbol();
        thisContext[symBolProperty] = orignalFunction;
        let returnValue = thisContext[symBolProperty](...prevArgs,...newArgs);
        delete thisContext[symBolProperty]; 
        return returnValue;
    }
}

/**
 * Course Solution
 */

Function.prototype.myBind = function (thisContext,...prevArgs) {
    return (...newArgs) => this.myApply(thisContext,[...prevArgs,...newArgs]);
}

