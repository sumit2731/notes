/* 
Ideally, we could have a tool that helps us find these bugs before our code runs. That’s what a static
type-checker like TypeScript does. Static types systems describe the shapes and behaviors of what our 
values will be when we run our programs. A type-checker like TypeScript uses that information and tells
us when things might be going off the rails.
*/

/* 
Compiler Options -
    --noEmitOnError
    --target es2015 
        By default TypeScript targets ES3.

    --strict
        strictBindCallApply
        strictFunctionTypes (the setting only applies to functions written in function syntax, not to
            those in method syntax:)
        strictNullChecks
        noImplicitAny
*/
