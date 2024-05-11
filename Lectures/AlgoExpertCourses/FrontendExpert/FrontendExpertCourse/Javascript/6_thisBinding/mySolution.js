/**
 * This needs to be defined using function syntax, otherwise we will get error
 *
 * Cases missed - what if thisContext is null, undefined or primitive
 */
Function.prototype.myCall = function (thisContext, ...args) {
  /**
   * Symbol is used to avoid naming conflicts if already defined property on object
   *
   * also symbol properties do not appear in for .. in loop
   */
  const symBol = Symbol();
  thisContext[symBol] = this;
  const returnValue = thisContext[symBol](...args);
  delete thisContext[symBol];
  return returnValue;
};

Function.prototype.myApply = function (thisContext, args = []) {
  const symbol = Symbol();
  thisContext[symbol] = this;
  const returnValue = thisContext[symbol](...args);
  delete thisContext[symbol];
  return returnValue;
};

Function.prototype.myBind = function (thisContext, ...args) {
  const orignalCallback = this;
  return function (...args2) {
    const symbol = Symbol();
    thisContext[symbol] = orignalCallback;
    const returnValue = thisContext[symbol](...args, ...args2);
    delete thisContext[symbol];
    return returnValue;
  };
};
Function.prototype.myBind2 = function (thisContext, ...args) {
  return (...args2) => {
    const symbol = Symbol();
    // since this is arrow function, it takes this from outer context
    thisContext[symbol] = this;
    const returnValue = thisContext[symbol](...args, ...args2);
    delete thisContext[symbol];
    return returnValue;
  };
};

function printName(name) {
  console.log(name);
}

printName.myBind2({}, "Sumeet")();
