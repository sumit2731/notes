/**
 * 97,98 - By default javascript defines types to widest types. which is not always what we want.
 *  here we narrow down types.
 *
 * 101 - as const
 * 103 - readonlyArray - readonly string[] or ReadonlyArray<string>,it only allows those methods
 *  to be called on array which does not modify the array.
 * 104 - readonly array cannot be assigned to mutable array. but other way around is possible
 * 104.5 - readyonly tupple - readonly[number, number]. prevents removing element from tupples.
 *   so we can ensure that structure remains intact.
 * 105 - cannot call include on readonly array
 * 107 - using as const on string literal as opposed to using it on objects
 */

/**
 * 106(11) -
 *  a)When function returns many types, ts tries to combine it.if any type has any, then it defaults to any.here we had array
 *    so we used as const to give specififc type
 *  b)see how tupples work with array destructuring
 */
