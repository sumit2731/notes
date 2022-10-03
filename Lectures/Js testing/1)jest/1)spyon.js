/* 
spies - Spying is to observe calls made to a method without changing the method itself.

*/

//myModule.js
class myClass {
  constructor() {}
  myInstanceMethod() {
    return "output from myInstanceMethod";
  }
  static myStaticMethod() {
    return "output from myStaticMethod";
  }
}

const myInstance = new myClass();

//reset all counters in spies
jest.clearAllMocks();

jest.spyOn(myModule.myClass.prototype, "myInstancemethod");
jest.spyOn(myModule.myClass, "myStaticMethod");

myInstance.myInstanceMethod();
myClass.myStaticMethod();

//spy on build method

jest.spyOn(EventTarget.prototype, "addEventListerner");

expect(EventTarget.prototype.addEventListener).toHaveBeenCalled();

/**
 * Change the Implementation of a Method Being Spied on -
 * This is called ‘mocking’, as we can fake the behavior of a method this way, thereby ‘mocking’ the method.
 */
const mySpiedOnMethod = jest.spyOn(myModule.myClass, "myStaticMethod");

mySpiedOnMethod.mockImplementation(() => {
  return "something";
});

//or
import * as utility from "../../utils/utility";

jest.spyOn(utility, "getQueryParams").mockImplementation((name) => {
  if (name === ERROR_ID_PARAM_KEY) {
    return error1.id;
  }
  return "";
});

/**
 * resetting -
  reset - reset mocking info
  clear - reset mocking info as well as internal implementation, now function returns undefined
  restore - restores the implemtation back to what was before mocking
 */
