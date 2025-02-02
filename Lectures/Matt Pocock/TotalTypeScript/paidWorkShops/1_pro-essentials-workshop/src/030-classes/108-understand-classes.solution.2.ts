import { expect, it } from "vitest";

class CanvasNode {
  readonly x;
  readonly y: number;
  /**
   * Either you have initial value for  a property or you initialize it in constructor,
   * you can even skip the types in above, types will assigned according to the values you
   * assign to them in constructor. see code in 110
   */
  constructor() {
    this.x = 0;
    this.y = 0;
  }
}

it("Should store some basic properties", () => {
  const canvasNode = new CanvasNode();

  expect(canvasNode.x).toEqual(0);
  expect(canvasNode.y).toEqual(0);

  // @ts-expect-error Property is readonly
  canvasNode.x = 10;

  // @ts-expect-error Property is readonly
  canvasNode.y = 20;
});
