/**
 * 57 - Resolving Literal to Wider Type
 *   You shouldn't think about a union of literals and their wider types together as "this or that".
 *   Instead, think of them as just the wider type since that is what TypeScript will resolve to.
 *      see figure 3. All of this means just string. if you need autocomplete then use this -
 */

type CustomType = "small" | "medium" | "hard" | (string | {});

/**
 * Type narrowing
 *   a)using typeof - 58
 *   b)narrowing of null, uisng if condition - 59
 *   c)narrowing uisng throw - 62
 *   d)narrowingg useing 'in' operator. If union member have different properties than they can be
 *      narrowed down using in operator - 64
 *   e)narrowing of unknwon using instanceof operator and handling errors -65
 *
 * Narrowing Gotchas -
 *  a)narrowing does not work with Boolean constructor - 60
 *  b)Narrowing does not work, if we use has fucntion on map, ts cannot link has and get function - 61
 *
 */

/**
 * 66 - unknown type.figure 4 shows unknown in type hierarchy. It sits above any other type in ts.
 *      unknown is very different from any,if we use any, then we will no get any type checking.
 *
 *      Anything is assignable to unknown type because it sits above any other type.but before doing any
 *          operation(accessing any prperties on unknown) we need to narrow down unknown type.also before
 *          assigining unknown type to any other type, we need to do type narrowing
 *
 *     This is really, really useful when you have things coming into your application from outside sources.
 *      So for instance, JSON, that's coming from a webhook.
 *
 *      Also wile using in operator we need to make sure that unknow in object type, this can be donw with
 *       object type.
 */

/**
 * @never
 *
 * 67 - unknown is top type and never is bottom type in ts.see figure 5.
 *  never represents something that can never happen.
 *  you cannot assign anything to never excet for never itself.
 *  but never can be assigned to any other type.in other words anything that is in ts cannot be assgned to never.
 *   becuas eit is something that can never happen
 *
 * 67.5 - never type of empty array. Olsution works because never[] is assignable to string[].
 *
 * 68 - Function that throws errors returns never.d/w unknown and never in union -
 *       unknown - removes everything else and expresson returns unknown
 *       never - gets removed from union type
 *
 *       Also function that returns never, we can spcify any retun type. and it will not give error because
 *        never can be assignd to any type, so return type of fucntion kind of lies here
 *
 *
 * 71 - type narrowing was not working with object properties, so we used variable to store value.
 *      scpes have an impact on how typescript handkles narrowing in certain cases. until if scope
 *      type narrwoing was happening but under fucntion scope it is not happening. reason is we are passing
 *      function to filter and ts does not know that this function is executed synchronously.ts assumes that
 *      it is asynchronous fucntion , in between object can be modified.
 *
 *
 *      we solve it by storing value in variable.with version 5.5 ts tracks updates to varible declared with
 *          let ketword also.Why can't TypeScript actually track object properties in the same way that
 *          it does with variables?Well, object properties can do slightly crazier things. They -- you can have
 *          getters inside them that you can't have in variables. And so TypeScript tends to trust these
 *          properties a little bit less than it does just with pure variables.
 *
 * 74 -  Type narrowing with Discriminated Union. ts knows exactly which properties are
 *      present inside union inside checks where we have narrowed down the types.
 *
 * 75,22 - Destructuring while inside descriminated unions.
 * 76,23 -  using switch statement and descriminated union. this iss match made in heaven
 *    ts infers this -
 *      a)Gives autocomplete in switch expressions
 *      b)it is able to predict return type of function, by understanding whther we have
 *          hanled all cases or not.i our code we handled all cases , so return type is number.
 *
 * 77, 24 - switch true pattern.
 * 78, 25 - descriminated tupples.
 * here first element
 *  what is surprasing here is in function where use tupple ts is able make link vales even after
 *      destruruting. which is opposite to what happened with object destruting in descriminted union
 *      in lecture 75.
 *
 * 80, 27 - DEfaults in discrininated unions
 */
/**
 * ToBe seen -
 *
 * 65 - Handling error
 * 66 - narrowing unknwo type
 * 71 - typscript does not trust object properties for null checking in type narrowing.
 * 74,75,76 - destructing inside descriminatd unions.
 *
 * 78 - descriminated tupples.depending upon first member of tupple, typescript narrows
 *   down second argument.
 *
 * 80- defaults in discriminated unions
 *
 * 80.5 - Should you provide Function return type
 *   see how adding return type helps with covering all the cases in unions
 */
