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

/**
 * this approach doesn't work because the kind property has been separated from the rest of the
 * shape. As a result, TypeScript can't track the relationship between kind and the other
 * properties of shape.
 */

function calculateArea({ kind, ...restObj }: Shape) {
  if (kind === "circle") {
    // inside shape will of type Circle, hnece destructuring  is allowed
    const { radius } = restObj;
    return Math.PI * radius * radius;
  } else {
    const { sideLength } = restObj;
    return sideLength * sideLength;
  }
}

/**
 * move the destructuring to take place inside of the conditional branches.
 * Destructuring is best used closer to where it's needed, especially when dealing with
 * discriminated unions. Also note that TypeScript's auto-completion feature makes it
 * convenient to work with properties directly, which don't require destructuring at all.
 */
function calculateArea2(shape: Shape) {
  if (shape.kind === "circle") {
    // inside shape will of type Circle, hnece destructuring  is allowed
    const { radius } = shape;
    return Math.PI * radius * radius;
  } else {
    const { sideLength } = shape;
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
