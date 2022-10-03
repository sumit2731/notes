/**
 * You can replace the contents of a method also by using jest.fn()
 * You can temporarily replace the contents of a method with Jest mocks.
 */

//mock a method

class myClass {
  constructor() {}
  myInstanceMethod() {
    return "output from myInstanceMethod";
  }
  static myStaticMethod() {
    return "output from myStaticMethod";
  }
}
const myInstance2 = new myClass();

//you can replace the contents of its methods this way

expect(myInstance2.myInstanceMethod()).toBe("OrignalImplementation string");

//replacing contents the contents of instance method
myClass.prototype.myInstanceMethod = jest.fn(() => {
  return "myInstanceMethod has been called";
});

//replace the contents of static methods

myClass.myStaticMethod = jest.fn(() => {
  return "myStatic has been Called";
});

expect(myInstance.myInstanceMethod()).toBe("myInstanceMethod has been called");
expect(myClass.myStaticMethod()).toBe("myStatic has been Called");

//mock a built in method

Event.prototype.addEventListener = jest.fn(() => {
  console.log("addEventListener");
});

//mocking only once
test("mock implementation one time", () => {
  const mock = jest.fn().mockImplementationOnce(() => "bar");

  expect(mock("foo")).toBe("bar");
  expect(mock).toHaveBeenCalledWith("foo");

  expect(mock("baz")).toBe(undefined);
  expect(mock).toHaveBeenCalledWith("baz");
});

/* 
  other functons - 
  
  mock.mockResolvedValue("bar");
  mock.mockResolvedValue("bar");
   
  resetting - 
  reset - reset mocking info
  clear - reset mocking info as well as internal implementation, now function returns undefined
  restore - can restore to orignam implementation, just sets it to mock.fn()
  
  
  */

/**
 * anotherway of mpocking
 */
