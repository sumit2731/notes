/**
 * here some thing needs to be added to be global window interface.
 * so either we can do it in d.ts file or we need nto use declare global in normal file
 * ts file
 */
interface Window {
  DEBUG: {
    getState(): { id: string };
  };
}
