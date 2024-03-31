/**
 * Creating new ts project -
 *
 *  npm create vite@latest react-ts-basics
 *  then select react, then select typecsript
 */

/**
 * @tsconfig
 *
 * typescript compiler uses this file to compile ts code.IDE also refers to this file to show errors.
 *
 * important fields -
 *  target - Which js version you want to compile to
 *  strict - enables strict mode(more strict rules, like you always must explicitly set the type of parameters in a function)
 *  lib - this controls which built in types are avalaible in this project
 *
 * see comments in tsconfig.js
 */

/**
 * replace the public and src folder of created projects with attached project.
 *
 * npm install
 * npm run dev
 */

/**
 * @PropType and @children PropType
 * See CourseGoal.tsx component to see how to give type to props and especially to children prop.
 *
 * lecture 33 explain how key props can be assigned to component even if you dnt specify it in
 * props type.
 *
 * also we saw how we can use special type PropWithChildren to define prop type with children property.
 *
 * ReactNode type is imported from @types/react package. this is package that provides types for react.
 */

/**
 * @useState hook
 * Then we use typed version of useState hook. see code and comments in App.tsx
 */

/**
 * @TypesOf Eventhandlers of built in components
 *
 * See NewGoal.tsx
 *
 */

/**
 * while creating new goal now we want to get values that user filled in inputs. approaches to do that -
 *  a)useState and 2 way data-binding to get current value of input on every keystroak
 *  b) use FormData to get values of all input in form, for this need to give name property to all input fields
 *      const formData = new FormData(event.currentTarget)
 *  c)by using useRef (we will use this)
 */

/**
 * @useRef
 *
 * see NewGoals.tsx to see typing useRef and different types of function overloads available
 * then at last see how we cleared the form values using for.reset function
 */
