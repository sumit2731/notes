/**
 * IDE Superpowers
 *
 * 40 - hovering over different paths in nested object notationa.b.c.d
 *
 * 42 - ts doc comments - @example
 *
 * 44 - shortcut to trigger autocomplete - ctrl + space
 *
 *  puprle boxes are for methods
 *
 * 45 - TS tries to show error at right place. In case of function it shows the error at function level.
 *   because when you compare functions, you need to compare them as a whole.
 *
 * 47 - rename symbol explained, this also works across the files.
 *
 * 46 - Navigating Code with "Go to Definition"
 *  cmd+click
 *  where function is used - It acts like "Go to definition"
 *  where function is defined - It acts like "Go to instances"
 *  Also in ChatGpt see difference between "Go to definition" vs "Go to Implementation"
 *
 * 48 - Adding missing import
 *     a)Get sugesstions by autocomplete, move to end of line and press ctrl + space.
 *     b)open quick fixes by moving to error and pressing - "cmd + .", from there select
 *          Add All missing imports.
 *
 *
 * 49 - From command pellete - "organize imports", prune imports that are not used.
 *
 * 50 - Refcatoring Options with quick fix ("cmd + .")
 *
 *  It's important what you select here -
 *   a)If you select variable name,
 *      1)You get "inline variable", which means it will remove the variable and use expression everywhere,
 *          varible was used.
 *      2)Move to file option - select file where you want to move the varible
 *   b)when you select expression
 *      1)move to constant (current scope or module scope)
 *      2)Move to function (current scope or module scope)
 *
 *    c)when you select function name
 *       1)infer function type
 *       2)Move to file/newFile
 *
 *     d)select function body -
 *        a)cnvert function to on liner arrow function and back
 *        b)infer return type
 *        c)convert params to destructuring params
 *
 *     d)When you select type -
 *        1)define a separate type
 *
 *     e)import
 *        1)normal import to namesapce importa nd vice versa
 *
 *
 * 51 - how to set up prettier -
 *  a)in packages.json - prettier should be there
 *  b)install prettier extension
 *  c)open "user setiings" from command pellete and select "format on save"
 *
 * 52 - when to reset TS Server
 *   a)when configs chnage
 *   b)It gets out of sync in funny ways - it does not notice that file chnage, for instance when it is
 *      gitignored
 *
 */
