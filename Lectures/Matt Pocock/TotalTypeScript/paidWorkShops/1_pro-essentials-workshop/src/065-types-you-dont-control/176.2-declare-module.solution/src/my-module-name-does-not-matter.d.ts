/**
 * As of now this only seems to be working in d.ts file i.e "declare module "m1" {}
 *  only seems to be working in d.ts files
 */
declare module "my-module" {
  export const myModuleFunc: () => void;
}
