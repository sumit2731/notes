import { Expect, Equal } from "@total-typescript/helpers";
import { expect, it } from "vitest";
/**
 * when we specify a default value for a parameter, it becomes optional
 */
const concatName = (first: string, last = "Pocock") => {
  return `${first} ${last}`;
};

it("should return the full name", () => {
  const result = concatName("John", "Doe");

  type test = Expect<Equal<typeof result, string>>;

  expect(result).toEqual("John Doe");
});

it("should return the first name", () => {
  const result = concatName("John");

  type test = Expect<Equal<typeof result, string>>;

  expect(result).toEqual("John Pocock");
});
