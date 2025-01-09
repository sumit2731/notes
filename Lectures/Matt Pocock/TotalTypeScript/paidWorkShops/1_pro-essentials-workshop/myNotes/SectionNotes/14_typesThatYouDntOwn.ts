/**
 * 172 - target option in tsconfig specifies to which version of js or ts code will be compiled to.
 *  By default ts includes some declarations files in scope depending upon which target we
 *  have selected.these d.ts files contain type definition of various API's that exist in that
 *  version of js.
 *
 *  there is noLib:true option also which will not add of these d.ts files.
 *
 * solution 2 -
 *
 *  In additional to target there is lib option which lets us specify which d.ts option
 *  we want to include in your code.if we do not specify lib, then ts add d.ts files according
 *  to target option.
 *
 * general advice from the TypeScript team suggests that you specify both target and lib in your configuration
 * to ES2022 as a safe course of action.if you're working With node for instance, you want that target and lib
 * to be ES2022 which is usually the latest for node and if you're working on bundling TypeScript for a web
 * application usually the bundler itself that you're using will handle this stuff.
 *
 *
 * 173,174- default value for lib for target:"ES2022" is ["ES2022", "DOM", "DOM.iterable"]. if you do not specify
 * then these are included when target:ES2022. however if you manually specify this, then included above.
 * it is always good to specify liv=b option manually in config.
 *
 *
 * 174.5 - Here we added a property to window object.
 *  window is interface in global scope. 2 interfaces in same scope with same name will be declaration merged.
 *  read comments in code.
 *
 * 175 - here we are using a library which is written in js.
 *  so first we checked node_modules and saw that there is no d.ts files to give type info.where to check(lecture - "typescript that ships with libraries") -
 *    a)in package.json there is "types" field that gives path to d.ts file for this package.
 *    b) as in lecture there should be d.ts beside main file for this package.
 *  then we installed the packages - @types/diff.
 * then typescript was able to resolve type info for this package. see 1 of detailedConcept to see how this all works.
 *
 * 175.2- how to include node types in yiur project?
 *  install this package - @types/node
 *
 * 175.5 - give typing to process.env
 *
 * this is a really cool pattern for overriding or kind of appending to the interface of Process Env inside the namespace of a different,
 * an external library. And often you'll see this pattern occasionally when you're using external libraries, they want you to append to a
 * global, they'll probably put that global inside some sort of namespace just like this. So, really nice pattern to know about.
 *
 * see comments in code
 *
 * 176 -see lecture, here it explains how ts searches for d.ts files for libraries.
 *
 * 176.2 - here we import from my-module which doesn't actually exist on the file system.
 *  There are some real-world situations where this might occur. For example, you might have a virtual module or
 *  you might have a symlinking to a certain workspace or a path.we need to tell tsc that this module exists and
 *  its export syntax.
 *
 *  here we used declare module "my-module" {} syntax
 *
 * this can be used to declare for js libraries which do not have any package in definately typed.
 *
 *
 * 176.3 - here we are importing images in our code, which will be transformed by webpack and we will
 *   string path in our code. but ts is yelling as it does not know how to import png images.
 *   here we tell ts that .png files are strings.
 *
 * we cannot use module paths, so we specify wildcards.we can use this to import things
 * in our code which is not js.
 *
 * 176.5 - skipLibCheck:true
 *  It does not check the types of all declaration files (*.d.ts). This can significantly speed up compilation.
 *
 */

/**
 * Questions - why it is good to specify lib option manually in tsconfig.
 */
