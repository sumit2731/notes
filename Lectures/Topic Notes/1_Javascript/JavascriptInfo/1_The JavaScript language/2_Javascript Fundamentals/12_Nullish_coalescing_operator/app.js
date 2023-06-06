/**
 * @Desc The result is:
 *   if a is defined, then a,
 *   if a isn’t defined, then b.
 *
 * In other words, ?? returns the first argument if it’s not null/undefined. Otherwise, the second one.
 */
let result = a ?? b;

/**
 * We can rewrite result = a ?? b using the operators that we already know, like this:
 *   result = (a !== null && a !== undefined) ? a : b;
 */

/**
 * Chaining of Nullish Coalescing
 */

let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first defined value:
console.log(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

/**
 * Comparison with ||
 *
 *   || returns the first truthy value.
 *   ?? returns the first defined value.
 */

let height = 0;

console.log(height || 100); // 100
console.log(height ?? 100); // 0

/**
 * Using ?? with && or || - always use parenthesis
 */
