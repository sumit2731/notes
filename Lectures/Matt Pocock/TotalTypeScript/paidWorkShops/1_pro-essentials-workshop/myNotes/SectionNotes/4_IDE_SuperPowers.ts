/**
 * IDE Superpowers
 *
 * 40 - hover over these to get type info -
 *    a)variables
 *    b)object properties
 *    c)functions
 *
 * 42 - add js doc  comments, while hovering over function, you get syntax highlighting and all
 *
 * 44 - shortcut to trigger autocomplete - ctrl + space
 *
 *  puprle boxes are for methods
 *
 * 45 - TS tries to show error at right place. In case of function it shows the error at function level.
 *   because when you compare functions, you need to compare them as a whole.read lecture once.
 *
 * 47 -
 *  cmd + shift + l - selects all instances of the word
 *  cmd + d - selects next instance
 *  rename symbol explained, this also works across the files.
 *
 * 46 - Navigating Code with "Go to Definition"
 *  cmd+click
 *  where function is used - It takes you to definition
 *  where function is defined - It opens a pallette where ot shows all places where function is
 *      defined.also in ChatGpt see difference between "Go to definition" vs "Go to Implementation"
 *
 * 48 - Adding missing import
 *     a)Get sugesstions by autocomplete, move to end of line and press ctrl + space.
 *     b)open quick fixes by moving to error and pressing - "cmd + .", from there select
 *          Add All missing imports.other options in "cmd + ." -
 *         1)explain using copilot
 *         2)fix using copilot
 *
 *
 *
 * 49 - From command pallete - "organize imports". it does following -
 *   a)prune imports that are not used.
 *   b)arranges the imports
 *
 * 50 - Refactoring Options with quick fix ("cmd + .")
 *
 *  It's important what you select here -
 *   a)If you select variable name,
 *      1)You get "inline variable", which means it will remove the variable and use expression everywhere,
 *          variable was used.
 *      2)Move to file option - select file where you want to move the variable
 *   b)when you select expression
 *      1)move to constant (current scope or module scope)
 *      2)Move to function (current scope or module scope)
 *
 *    c)when you select function name
 *       1)infer function type
 *       2)Move to file/newFile
 *
 *     d)select function body -
 *        a)convert function to one liner arrow function and back
 *        b)infer return type
 *        c)convert params to destructuring params
 *
 *     d)When you select type -
 *        1)define a separate type
 *
 *     e)import
 *        1)normal import to namesapce import nd vice versa
 *
 *
 * 51 - how to set up prettier -
 *  a)in packages.json - prettier(as a dev dependency) should be there
 *  b)install prettier extension
 *  c)open "user settings"(not json, open UI) from command pallete and select "format on save"
 *
 * 52 - when to reset TS Server
 *   a)when configs change
 *   b)It gets out of sync in funny ways - it does not notice that file chnage, for instance when it is
 *      gitignored
 */

/**
 * ShortCuts -
 *
 * 1) autocomplete - ctrl + space
 * 2)quick fix - cmd +  .
 */
