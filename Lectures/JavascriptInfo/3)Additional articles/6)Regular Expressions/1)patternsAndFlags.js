let regexp = new RegExp("pattern", "flags");

let regexp2 = /pattern/; // no flags
let regexp2 = /pattern/gmi; // with flags g,m and i (to be covered soon)


/* 
The main difference between these two syntaxes is that pattern using slashes /.../ does not allow for expressions
 to be inserted (like string template literals with ${...}). They are fully static.

Slashes are used when we know the regular expression at the code writing time – and that’s the most common 
    situation. While new RegExp is more often used when we need to create a regexp “on the fly” from a 
    dynamically generated string. For instance:

*/

/* 
Useage of regex -
    Searching: str.match
    Replacing: str.replace

    regexp.test(str) looks for at least one match, if found, returns true, otherwise false.

*/