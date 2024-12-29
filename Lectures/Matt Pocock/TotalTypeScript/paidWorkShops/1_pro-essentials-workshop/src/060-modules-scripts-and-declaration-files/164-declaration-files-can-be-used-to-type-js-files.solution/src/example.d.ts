export function myFunc(): string;
/**
 * So because the thing that we're trying to describe is essentially a module, we also need our
 * example.d.ts file to be a module. So let's add an export empty object there.
 * this is because we will be importing this file.
 *
 * @extra from course
 *
 * a)here we defined d.ts in same directly and with same as source file. so it was able to make that
 *  link between two, also we do not have to use "declare module".if you want to place that file in
 *  different location or name it different, take care of these things -
 *
 *      a)that d.ts file should be read by tsc. in tsconfig you can use typeRoots and include option.
 *      b)in that file yu need to "use declare module" to tell tsc that for which module we define
 *          path.after "declare module" you can use relative import path(this should match the path
 *          where file is imported),alias or wildcard. problem with relative import path is that it
 *          keeps on changing.in that case use most common path typeScript will use this declaration
 *          wherever the file is imported, even if the path differs slightly.best approach is to use
 *          alias.
 *      c)when you need to define additional types(or do declaration merging with interface) for third
 *          party apps useage of "declare global" is necessary.
 *
 * b)declaration file can be module or script. In order to make global declarations you need it to
 *   be script. so do not use any import/export. also in all dcelartions should start with export
 *   or declare, so if you are making global declarations in script then they should start with
 *   declare.
 *
 * c)"declare module" in d.ts files -
 *  Use declare module when you need to explicitly associate a type declaration with a module name
 *  or path.Skip declare module if the .d.ts file is colocated with the .js file and matches its
 *  name.
 */
// export {};
