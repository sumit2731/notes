import { Expect, Equal } from "@total-typescript/helpers";
import { expect, it } from "vitest";
/**
 * any typeof value can be assigned to variable of type unknown
 * but variable of type unknown cannot accept any other value
 *
 * this is differrence between any and unknown
 */
const parsedData: {
  name: string;
  age: number;
} = JSON.parse('{"name": "Alice", "age": 30}');

type test = Expect<
  Equal<
    typeof parsedData,
    {
      name: string;
      age: number;
    }
  >
>;

it("Should be the correct shape", () => {
  expect(parsedData).toEqual({
    name: "Alice",
    age: 30,
  });
});
