/**
 * When it comes to default exports, we always export an expression:
 * Every JS module is limited to a single default export. For example, this is invalid:
 */

// ✅ Correct:
const hi = 5;
export default hi;

// 🚫 Incorrect
export default const hi2 = 10;



/**
 * which to use default export vs named export
 * 
 * Here's a convention I like to follow, though: if a file has one obvious "main" thing, I make
 * it the default export. Secondary things, like helpers and metadata, can be exported using 
 * named exports.
 */