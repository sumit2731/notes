import { Equal, Expect } from "../helpers/type-utils";

interface MyComplexInterface<Event, Context, Name, Point> {
  getEvent: () => Event;
  getContext: () => Context;
  getName: () => Name;
  getPoint: () => Point;
}

type Example = MyComplexInterface<
  "click",
  "window",
  "my-event",
  { x: 12; y: 14 }
>;

/**
 * here we can extract multiple argumnets using infer, here we are extracting only one
 */
type GetPoint<T> = T extends MyComplexInterface<any, any, any, infer TPoint>
  ? TPoint
  : never;

type tests = [Expect<Equal<GetPoint<Example>, { x: 12; y: 14 }>>];


/**
 * MY Apporach
 */

type GetPoint2<T> = T extends { getPoint: () => infer T} ? T : never;
