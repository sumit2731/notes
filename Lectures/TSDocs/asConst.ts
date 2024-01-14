/**
 * 1) In ts docs see refrence section for enums
 */

/**
 * 2
 * 
 * Inferred type is number[] -- "an array with zero or more numbers",
// not specifically two numbers
 */
const args = [8, 5];

/**
 * This function expects exactly 2 numbers
 */
const angle = Math.atan2(...args);

/**
 * The best fix for this situation depends a bit on your code, but in general a const context is the most
 * straightforward solution:
 */
const args2 = [8, 5] as const;
const angle2 = Math.atan2(...args2);
