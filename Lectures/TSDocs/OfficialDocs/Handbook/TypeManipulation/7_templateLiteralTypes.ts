/* 
They have the same syntax as template literal strings in JavaScript, but are used in type positions.

When used with concrete literal types, a template literal produces a new string literal type by 
    concatenating the contents.
*/

type World = "world";

type Greeting = `hello ${World}`;

/* 
When a union is used in the interpolated position, the type is the set of every possible string literal
    that could be represented by each union member:
*/

type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";

type AllLocaleIDs1 = `${EmailLocaleIDs}_id`;
type AllLocaleIDs2 = `${FooterLocaleIDs}_id`;
type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;

//For each interpolated position in the template literal, the unions are cross multiplied:

type Lang = "en" | "ja" | "pt";

type LocaleMessageIDs = `${Lang}_${AllLocaleIDs}`;

//String Unions in Types

/* 
The power in template literals comes when defining a new string based on information inside a type.

Consider the case where a function (makeWatchedObject) adds a new function called on() to a passed object.
 In JavaScript, its call might look like: makeWatchedObject(baseObject). We can imagine the base object 
 as looking like:
*/

const passedObject = {
  firstName: "Saoirse",
  lastName: "Ronan",
  age: 26,
};

/**
 * The on function that will be added to the base object expects two arguments,
 *      a)an eventName (a string) - should be of the form attributeInThePassedObject + "Changed"; thus,
 *          firstNameChanged as derived from the attribute firstName in the base object.
 *      b)a callback (a function) - when called arguments should be -
 *          1)Should be passed a value of the type associated with the name attributeInThePassedObject;
 *              thus, since firstName is typed as string, the callback for the firstNameChanged event
 *              expects a string to be passed to it at call time. Similarly events associated with age
 *              should expect to be called with a number argument
 *          2)Should return void
 *
 */

const person = makeWatchedObject({
  firstName: "Saoirse",
  lastName: "Ronan",
  age: 26,
});

// makeWatchedObject has added `on` to the anonymous Object

person.on("firstNameChanged", () => {});

//It only provides autocomplete for first param

// type PropEventSource<Type> = {
//   on(
//     eventName: `${string & keyof Type}Changed`,
//     callback: (value: unknown) => void
//   ): void;
// };

/**
 * This was my solution but it is not working
 * somehow, first arg is having type never
 */
// type PropEventSource<Type> = {
//   [Prop in keyof Type]: {
//     on(
//       propName: `${string & Prop}Changed`,
//       callback: (value: Type[Prop]) => void
//     ): void;
//   };
// }[keyof Type];

/**
 * T extends string & keyof Type => this means T is one of the Properties of Type whose type is string
 */
type PropEventSource<Type> = {
  on<T extends string & keyof Type>(
    param: `${T}Changed `,
    callback: (value: Type[T]) => void
  ): void;
};

declare function makeWatchedObject<Type>(
  param: Type
): Type & PropEventSource<Type>;
