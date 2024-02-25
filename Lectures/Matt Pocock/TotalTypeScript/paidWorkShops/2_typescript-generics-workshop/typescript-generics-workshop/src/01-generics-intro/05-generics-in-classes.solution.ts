import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

export class Component<TProps> {
  private props: TProps;

  /**
   * The way that this chain works is it gets inferred from the constructor, so when 
   *  you call it. Then the thing that it returns (object which is instance of class)
   *  has these properties
   */
  constructor(props: TProps) {
    this.props = props;
  }

  getProps = () => this.props;
}

it("Should create an object containing props", () => {
  /**
   * Generic of class is infered here. over over component variable tp see it
   */
  const component = new Component({ a: 1, b: 2, c: 3 });

  const result = component.getProps();

  expect(result).toEqual({ a: 1, b: 2, c: 3 });

  type tests = [
    Expect<Equal<typeof result, { a: number; b: number; c: number }>>,
  ];
});
