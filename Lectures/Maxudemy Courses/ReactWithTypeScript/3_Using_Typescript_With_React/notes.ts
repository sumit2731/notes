/**
 * Creating new ts project -
 *
 *  npm create vite@latest react-ts-basics
 *  then sellect react, then select typecsript
 */

/**
 * @tsconfig
 *
 * typescript compiler uses this file to compile ts code.IDE also refers to this file to show errors.
 *
 * important fields -
 *  target
 *  strict
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
 * See CourseGoal component to see how to give type to props and especially to children prop.
 *
 * lecture 33 explain how key props can be assigned to compoent even if you dnt specify it in
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
 * here we added a prop which is callback see CourseGoal.tsx
 *
 * While assigning this prop to onClick handler of mouse we got an error, see commneted out code in CourseGoal.
 * Read the error message. It gives you idea about what is wrong. now lets see how we can navigate through ts types -
 * click on onClick prop, you will see type of value it expects. soon you will see it ends up in EventHandler<SomeGeneric>.
 * It means EventHandler is callback whose first argument is - "SomeGeneric". someGeneric is of this format -
 *  EventType<ElementTypeOnWhichEventoccured> (MouseEvent<T>, FormEvent<T>)
 *
 * event.target gives HTMLElement of type - ElementTypeOnWhichEventoccured.
 * if we do not specify anytype, then even.currentTarget is HtmlElement. In out Cases generic type T will be HTMLButtonElement
 *  and HTML FormElement
 *
 *
 * New Goal.tsx - here we defined a eventHandler for onSubmit on form. but problem is how to define type of
 * parameter?
 *  way 1 - click on onSubmit prop, you will get to this type - EventHandler<FormEvent<T>>
 *  What EventHandler does we already discussed above.First Parameter of callback is FormEvent<T>
 *  it eventType is FormEvent and event.currentElementType is T. how to find T?
 *      way 1 - Do not mention, it it will default to HTMLElement.later we see we need this type of elmeent in order
 *          to use FormData
 *      way 2 - Hover form form or OnSubmit to get type of T
 *
 *  way 2 - try to define onSubmit handler inline, do not give any type to first param, hover over it, ts will give it type automatically.
 *   use that type. see commented out code in NewGoal.tsx
 *
 */

/**
 * while creating new goal now we want to get values that user filled in inputs. approaches to do that -
 *  a)useState and 2 way data-binding to get current value of input on every keystroak
 *  b) use Formdata to get values of all input in form, for this need to give name property to all input fields
 *  c)by using useRef (we will use this)
 */

/**
 * @useRef
 *
 * see NewGoals.tsx to see typing useRef and different types of function overloads available
 * then at last see how we cleared the form values using for.reset function
 */
