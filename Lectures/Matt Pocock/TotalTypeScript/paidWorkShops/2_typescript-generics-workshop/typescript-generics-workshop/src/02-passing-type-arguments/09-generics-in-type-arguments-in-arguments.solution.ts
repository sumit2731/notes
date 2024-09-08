import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

export class Component<TProps> {
  private props: TProps;

  constructor(props: TProps) {
    this.props = props;
  }

  getProps = () => this.props;
}

/**
 * Key take away from this solution is that we're able to put this generic slot inside the type argument
 *  of a class or a type helper. This is really cool. We could add this to a promise or something and
 *  extract out the results of the promise. It shows you just how flexible these slots really are.
 */
const cloneComponent = <TProps>(component: Component<TProps>) => {
  return new Component(component.getProps());
};

it("Should clone the props from a passed-in Component", () => {
  const component = new Component({ a: 1, b: 2, c: 3 });

  const clonedComponent = cloneComponent(component);

  const result = clonedComponent.getProps();

  expect(result).toEqual({ a: 1, b: 2, c: 3 });

  type tests = [
    Expect<Equal<typeof result, { a: number; b: number; c: number }>>
  ];
});
