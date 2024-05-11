const { beforeEach, afterEach } = require("node:test");

jest.useFakeTimers();

jest.advanceTimersByTime(1000);

describe("when Immediate is true", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  describe("after delay has elapsed", () => {
    it("should not call the passed callback again", () => {
      const callback = jest.fn();
      const { debounce } = require("./app");
      const debounced = debounce(callback, 1000, true);
      debounced();
      debounced();
      jest.advanceTimersByTime(1000);
      expect(callback).toHaveBeenCalledTimes(1);
    });
    it("should call  the passed callback again immediately", () => {
      const callback = jest.fn();
      const { debounce } = require("./app");
      const debounced = debounce(callback, 1000, true);

      debounced();
      jest.advanceTimersByTime(500);
      debounced();
      jest.advanceTimersByTime(500);
      debounced();
      jest.advanceTimersByTime(500);
      debounced();
      jest.advanceTimersByTime(500);
      jest.advanceTimersByTime(500);
      expect(callback).toHaveBeenCalledTimes(1);
      debounced();
      expect(callback).toHaveBeenCalledTimes(2);
    });
  });
});
