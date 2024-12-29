/**
 * In d.ts only type declaration are allowed and no type implementations.
 * each declaration should start with 'export' (which makes d.ts file a module) or with
 * 'declare'(with no import/export this makes d.ts file a script so it will put things in
 * global scope).
 */
declare const DEBUG: {
  getState(): { id: string };
};
/**
 * this declares a function in global scope
 */
declare function logDebugInfo2(message: string): void;
