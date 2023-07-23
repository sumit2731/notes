/**
 * 
 * Decorator Functions
 *  In the code above cachingDecorator is a decorator: a special function that takes another function and alters its behavior.
 * 
 * call/apply
 * 
 * call forwarding - Passing all arguments along with the context to another function
 * 
 * method borrowing -
 *  [].join.call(arrayLikeObject)
 *  So, technically it takes this and joins this[0], this[1] …etc together. It’s intentionally written in a way that allows any 
 *      array-like this (not a coincidence, many methods follow this practice). That’s why it also works with this=arguments.
 * 
 * How to use func.call to bind the function with this
 * 
 * cache solution for multi argument function
 */