import { expect, it } from "vitest";
import { add } from "./math";

it("should summarize all number values in array", () => {
  // Arrange - Define values being used in test
  const numbers = [1, 2, 3];

  // Act - Ru the actual code function that is to be executed
  const result = add(numbers);

  //Assert
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
   */
  const resultFn = () => {
    add();
  };
  expect(resultFn).toThrow();
});
