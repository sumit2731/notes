/**
 *
 * 53.5,54.5 - See figure, this is assignability graph. types on top can be assigned values which
 *  are of types at bottom but not a vice-versa.
 * 57 - Resolving Literal to Wider Type
 *   You shouldn't think about a union of literals and their wider types together as "this or that".
 *   Instead, think of them as just the wider type since that is what TypeScript will resolve to.
 *      see figure 3. All of this means just string. if you need autocomplete then use this -
 */

type CustomType = "small" | "medium" | "hard" | (string | {});

/**
 * Type narrowing
 *   b)narrowing of null, using if condition. here ts also identifies the return statement and narrows type.
 *      we can also move condition in variable and still get type narrowing - 59, solution 5
 *     also if use typeof check with type that is not in union, then inside that block,type
 *      is never;
 *   c)narrowing using throw - 62.
 *   d)narrowing using 'in' operator. If union member have different properties than they can be
 *      narrowed down using in operator - 64. also see here how throwing from function narrows down the
 *      return type from function
 *   e)unknown type - 65
 *   f)handing exceptions in unknown - 65.5
 *      we saw that for narrowing instance is better than 'in' operator, because in only provides one properties while
 *       instanceof provides all properties that are on instance.
 *
 * Narrowing Gotchas -
 *  a)narrowing does not work with Boolean constructor - 60
 *  b)Narrowing does not work, if we use has fucntion on map, ts cannot link has and get function - 61
 *
 */

/**
 * 71 - type narrowing was not working with object properties, so we used variable to store value.
 *      scopes have an impact on how typescript handles narrowing in certain cases. until if scope
 *      type narrowing was happening but under function scope it is not happening. reason is we are passing
 *      function to filter and ts does not know that this function is executed synchronously.ts assumes that
 *      it is asynchronous function , in between object can be modified.
 *
 *
 *      we solve it by storing value in variable.with version 5.5 ts tracks updates to variable declared with
 *          let keyword also.Why can't TypeScript actually track object properties in the same way that
 *          it does with variables?Well, object properties can do slightly crazier things. They -- you can have
 *          getters inside them that you can't have in variables. And so TypeScript tends to trust these
 *          properties a little bit less than it does just with pure variables.
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
 * @ToBe seen -
 *
 * 65 - see figure 4.any type of value is assignable to unknown type.this is useful when we do not know what is the type but we want to keep typechecking on this.
 *    but before using we have to narrow it down
 *
 * 65.5, 66 - narrowing of unknown type before using it.
 * 67 - never type. see figure 5.
 *     never represents something that can never happen.
 *     variable of type never can only be assigned never value.
 *     but variable of any other type can be assigned never value.
 *
 *     function that throws errors, returns never type
 *
 * 67.5 - empty array has never type.
 *
 * 68 - function which throws error, returns never type. never type disappears from union type.
 *
 * 71 - narrowing is affected by scope, way to get around it is to save object properties in a variable.
 *    ts seems to trust object properties a bit less, because of additional complexities with object properties.
 *
 *
 * 72.5 - function automatically acts as type guard.
 * 75 - destructing inside discriminated unions.
 * 77 - alternative syntax of switch statement
 *
 * 78 - discriminated union of tuples.depending upon first member of tupple, typescript narrows
 *   down second argument.
 *
 * 80- defaults in discriminated unions
 *
 * 80.5 - Should you provide Function return type
 *   see how adding return type helps with covering all the cases in unions
 */
