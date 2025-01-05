/**
 * Here we want to define Window interface in global scope, so either we can do it in d.ts file or we need
 * to use "declare global" in normal file.
 *
 * To [put something in global scope in d.ts file, that d.ts file should be treated as script, it means no
 * import/export statements should be dere.
 */
interface Window {
  DEBUG: {
    getState(): { id: string };
  };
}
