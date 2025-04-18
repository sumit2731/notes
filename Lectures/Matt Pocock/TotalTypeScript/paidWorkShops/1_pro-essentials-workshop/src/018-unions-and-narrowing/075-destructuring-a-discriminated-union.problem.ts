import { Equal, Expect } from "@total-typescript/helpers";
import { expect, it } from "vitest";

type Circle = {
  kind: "circle";
  radius: number;
};

type Square = {
  kind: "square";
  sideLength: number;
};

type Shape = Circle | Square;

//here error is radius and sideLength does not exists on all types in union
function calculateArea({ kind, radius, sideLength }: Shape) {
  if (kind === "circle") {
    return Math.PI * radius * radius;
  } else {
    return sideLength * sideLength;
  }
}

it("Should calculate the area of a circle", () => {
  const result = calculateArea({
    kind: "circle",
    radius: 5,
  });

  expect(result).toBe(78.53981633974483);

  type test = Expect<Equal<typeof result, number>>;
});

it("Should calculate the area of a square", () => {
  const result = calculateArea({
    kind: "square",
    sideLength: 5,
  });

  expect(result).toBe(25);

  type test = Expect<Equal<typeof result, number>>;
});
