// Fake ESM!

/**
 * THis is typescript way of using require inside cts files.
 * if we use const secondFile = require("./secondFile.cjs");
 * then secondFile is types as any, because is require is function which
 * can return anything
 */
import secondFile = require("./secondFile.cjs");

const example = () => {
  return "hello!";
};

secondFile.iWantToImportThis();

// True CJS:

export = {
  example,
};

/**
 * This syntax throws error
 */

// export const example = () => {
//   return "hello!";
// };
