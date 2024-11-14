/**
 * 97,98 - See how using variables and cardcoded value hile creating object chnages type.
 * 99 - we can define some proeprty  as readonly. this does not add anything at run time, just at type level.
 *
 * 103 - readonlyArray - readonly string[] or ReadonlyArray<string>, it only allows method whch does not modify existing array
 * 104 - readonly array cannot be assigned to mutable array. but other way arund is possible
 * 104.5 - readyonly tupple - readonly[number, number]
 * 106 - effect of using "as const" on array
 * 107 - using as const on string literal as opposed to using it on objects
 */

/**
 * 106(11) -
 *  a)When function returns many types, ts tries to combine it.if any type has any, then it defaults to any.here we had array
 *    so we used as const to give specififc type
 *  b)see how tupples work with array destructuring
 */
