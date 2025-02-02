/**
 * 97,98 - By default javascript defines types to widest types. which is not always what we want.
 *  here we narrow down types.
 *
 * 101 - as const
 * 103 - readonlyArray - readonly string[] or ReadonlyArray<string>,it only allows those methods
 *  to be called on array which does not modify the array.
 * 104 - readonly array cannot be assigned to mutable array. but other way around is possible
 * 104.5 - readonly tupple - readonly[number, number]. prevents removing element from tupples.
 *   so we can ensure that structure remains intact.
 * 105 - cannot call include on readonly array
 * 107 - using as const on string literal as opposed to using it on objects
 */

/**
 * 103 - readonly array, you cannot use mutating functions on them
 * 104.5 - readonly tupples, tupples does not make array unmutatble. you can still mutate the array.
 *  you need to use readonly tupple for that. syntax -
 *
 *   a)readonly [number, number]
 *   b)[1,2] as const
 *
 * 105 - see how we solve the problem of include function on readonly tupples
 * 106(11) - use of "as const" on array, it makes them readonly tupple
 *  a)When function returns many types, ts tries to combine it.if any type has any, then it defaults to any.here we had array
 *    so we used as const to give specififc type
 *  b)see how tupples work with array destructuring
 */
