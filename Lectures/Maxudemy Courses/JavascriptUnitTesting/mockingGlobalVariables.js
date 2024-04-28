/**
 * Way 1 - using jest.spy
 *
 *  - mockReturnValue
 *  - get orignal implementation and then object destruting to replace some parts of it, may be 1 or 2 properties
 */

/**
 * way 2 - Direct Assignment
 */
global.document = {
  referrer: "https://webtips.dev",
};
/**
 * some tutorials say, you will get this error - (Error: Not implemented: navigation (except hash changes)).Which
 * means that jsdom doesn't implement changing current page through direct window.location.href assignment. That
 * is why jest.spyOn() and .mockImplementation() looks like a best option for mocking existing window variables.
 */

window.location.href = "http://my.test/page";

/**
 *Some docs say that varibles that are added to global object by third party libraries, only way to mock them by using direct assignment
 *
 */

const getGoogleMaps = () => {
  return global.google.maps;
};

test("direct global variable", () => {
  // setup
  const originalGoogle = global.google;
  global.google = { maps: "test" };

  // tests
  const maps = getGoogleMaps();

  // assertions
  expect(maps).toBe("test");

  // cleanup
  global.google = originalGoogle;
});
/**
 * Way 3 - use Object.assign or window.defineProperty
 *
 * rememeber to use {write: true} to avid this error - TypeError: Cannot redefine property
 */
//object.define property
Object.defineProperty(Math, "random", {
  value: () => 0.5,
  writable: true,
});

//object.assign
Object.assign(navigator, {
  clipboard: {
    write: () => {},
  },
});
Object.assign(window, {
  ClipboardItem: () => {},
});

jest.spyOn(navigator.clipboard, "write");
jest.spyOn(window, "ClipboardItem");

//laster you can use soyon to get all functonalities of jest mocks

/**
 * Way 4 - do not use globals directly and create a wrapper
 *
 * https://www.grzegorowski.com/how-to-mock-global-window-with-jest - example 3
 *
 *
 * 2 Ways -
 *  a)mock the module directly in jest.mock, that is provide second argument
 *  b)mock the module using jest.mock, then import function from module and mock it using mock implementattion
 *
 *
 *
 */
