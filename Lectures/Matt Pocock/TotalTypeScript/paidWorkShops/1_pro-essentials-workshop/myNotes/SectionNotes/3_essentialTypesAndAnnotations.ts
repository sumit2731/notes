/**
 *
 * @Desc Essential Types and Annotations
 * 31 - Alternate tupple syntax
 * 32 - Optional Tupples
 *
 * 34- function that has void return type, can return something, but that type will be ignored.'
 *   see code snippet at bottom
 */

/**
 * To be revised  -
 * 22 - all types in ts
 * 31 - use tupples to remove undefined, see alter tupples syntax
 * 32 - tupple members can also be optional
 * 37 - json.parse now returns unknown type, and variable of type known cannot accept values of
 *   more specific type. this is because of type hierarchy. also this highlights the difference
 *   between any and unknown
 */

//code snippet 1
type f1 = () => void;
type f2 = () => string;

let f11: f1 = () => console.log();
let f12: f2 = () => "abc";

f11 = f12;
