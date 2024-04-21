import { expect, it } from "vitest";
import { add } from "./math";

/**
 * If you do not want to import it from vitest, add --global flag to vitest script. this flag makes key functions like
 * 'it' avalaible globally.however importing it gives better auto completion and code support in editor
 *
 * in jest you can use 'it' without importing it.
 *
 * test and it do same thing and can be used inter changabily
 */
it("should summarize all number values in array", () => {
  // Arrange - Define values being used in test
  const numbers = [1, 2, 3];

  // Act - Ru the actual code function that is to be executed
  const result = add(numbers);

  //Assert
  /**
   * Here we calculate the expected result so, that if later if we change the the input values,
   * result is also calculated dynamically
   */
  const expectedResult = numbers.reduce(
    (prevValue, curValue) => prevValue + curValue,
    0
  );
  expect(result).toBe(expectedResult);
});

it("should yield NaN if atleast one invalid number is provided", () => {
  const inputs = ["invalid", 1];
  const result = add(inputs);
  expect(result).toBeNaN();
});

it("Should yield a correct sum if an array of numric string values is provided", () => {
  const numbers = ["1", "2"];

  const result = add(numbers);

  const expectedResult = numbers.reduce(
    (prevValue, curValue) => +prevValue + +curValue,
    0
  );

  expect(result).toBe(expectedResult);
});

it("should yield 0 if an empty array is provided", () => {
  const numbers = [];
  const result = add(numbers);
  expect(result).toBe(0);
});

it("should throw an error if no value is passed to function", () => {
  /**
   * @Way1
   *
   * */
  //   try {
  //     const result = add();
  //   } catch (e) {
  //     expect(e).toBeDefined();
  //   }
  /**
   * @Way2
   * 
   * here we do not execute our ourself, but we give it to vitest to execute, it executes which it is able to do,
      if I expect(resultFn).toThrow.
   */
  const resultFn = () => {
    add();
  };
  /**
   * Now vitest will execute this function and checks whether it throws.
   * It saves us from hassles of adding our own try catch block
   */
  expect(resultFn).toThrow();
});
it("should throw an error if provided with multiple arguments instead of an array", () => {
  const num1 = 1;
  const num2 = 2;

  const resultFn = () => {
    add(num1, num2);
  };

  expect(resultFn).toThrow(/is not iterable/);
});
