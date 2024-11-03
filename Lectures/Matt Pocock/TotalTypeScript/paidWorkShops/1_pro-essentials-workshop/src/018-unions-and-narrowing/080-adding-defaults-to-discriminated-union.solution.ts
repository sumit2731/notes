import { Equal, Expect } from "@total-typescript/helpers";
import { expect, it } from "vitest";

type Circle = {
  kind?: "circle";
  radius: number;
};

type Square = {
  kind: "square";
  sideLength: number;
};

type Shape = Circle | Square;

/**
 * Note - this is not working
 */
function calculateArea2s(shape: Shape) {
  if (!shape.kind || shape.kind === "circle") {
    return Math.PI * shape.radius * shape.radius;
  } else {
    return shape.sideLength * shape.sideLength;
  }
}
/**
 * @Desc This is the way to mention optionals in discriminated unions
 */
function calculateArea(shape: Shape) {
  if (shape.kind === "square") {
    return shape.sideLength * shape.sideLength;
  } else {
    return Math.PI * shape.radius * shape.radius;
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

it("Should calculate the area of a circle when no kind is passed", () => {
  const result = calculateArea({
    radius: 5,
  });

  expect(result).toBe(78.53981633974483);

  type test = Expect<Equal<typeof result, number>>;
});
