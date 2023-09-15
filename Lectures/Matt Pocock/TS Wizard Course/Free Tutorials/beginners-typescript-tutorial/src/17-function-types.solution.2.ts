import { Equal, Expect } from "./helpers/type-utils";

/**
 * How do we type onFocusChange?
 * void is diffrent from undefined. if you define undefined , you have to explicitly return undefined. void is special type in ts
 * that defines that this function returns asolutely nothing.
 * 
 * If return type is void, you can return anything for function, it will not throw a error.(in standalone as well as in callbacks)
 * you can skip the parameters(in standalone as well as clabback), but params of wromg type cannot be passed
 */
type FocusListener = (isFocused: boolean) => void;

/**
 * This syntax is useful when we want to pass functions to other functions, less useful when you want to declare a standalone
 * function. because it is little bit less precise.this is said in course
 * 
 * i found that above syntax is always less precise or this one is better
 */

const myFocusListerner: FocusListener = () => 1;

/**
 * Better way to define standalone function. throws error when you try to return something.
 * @returns
 */

const myFocusListerner2 = (number1: number): void => {
  console.log(number1);
};

const addListener = (onFocusChange: FocusListener) => {
  window.addEventListener("focus", () => {
    onFocusChange(true);
  });

  window.addEventListener("blur", () => {
    onFocusChange(false);
  });
};

addListener((isFocused) => {
  console.log({ isFocused });

  type tests = [Expect<Equal<typeof isFocused, boolean>>];
});