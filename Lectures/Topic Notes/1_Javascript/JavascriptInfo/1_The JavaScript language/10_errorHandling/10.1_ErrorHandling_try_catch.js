/* 
try catch is only for run time error
try...catch works synchronously
    If an exception happens in “scheduled” code, like in setTimeout, then try...catch won’t catch it.
    That’s because the function itself is executed later, when the engine has already left the try...catch construct.
    To catch an exception inside a scheduled function, try...catch must be inside that function.


Error Object -
    name - name of constructor
    description - argument to error constructor
    call stack

throw operator
    Technically, we can use anything as an error object. That may be even a primitive, like a number or a string, but it’s better 
    to use objects, preferably with name and message properties (to stay somewhat compatible with built-in errors).
    
    JavaScript has many built-in constructors for standard errors: Error, SyntaxError, ReferenceError, TypeError and others. We 
    can use them to create error objects as well.

finally block
    always runs, even if we have return statement in try block.
    if we return something from finally block then that stement is used

only try-finally

Global catch 
    node - process.on("uncaughtException")
    browser - window.onerror = function(message, url, line, col, error) {}
*/