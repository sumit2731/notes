type FuncType = (num1: number) => number;

type funcReturnType = ReturnType<FuncType>;

const multiPlyByTen = (num1: number) => num1 * 10;

type DerivedReturnType = ReturnType<typeof multiPlyByTen>;

/* 
TypeScript intentionally limits the sorts of expressions you can use typeof on.Specifically,it’s
only legal to use typeof on identifiers (i.e. variable names) or their properties. This helps
avoid the confusing trap of writing code you think is executing, but isn’t:
*/
// Meant to use = ReturnType<typeof msgbox>
let shouldContinue: typeof msgbox("Are you sure you want to continue?");