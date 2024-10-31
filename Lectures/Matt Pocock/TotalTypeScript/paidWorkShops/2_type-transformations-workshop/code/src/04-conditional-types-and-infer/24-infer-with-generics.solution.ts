import { Equal, Expect } from "../helpers/type-utils";

/**
 * @My Alternate Solution
 */
// type GetPoint<T> =
//   T extends {getPoint: () => infer P}
//   ? P
//   : never;

/**
 * above solution ties the interface type to internal structure of MyComplexInterface interface,
 * which we do not want to do, because sometimes we are just looking at public declaration of
 * interface
 */
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

type GetPoint<T> = T extends MyComplexInterface<any, any, any, infer TPoint>
  ? TPoint
  : never;

type tests = [Expect<Equal<GetPoint<Example>, { x: 12; y: 14 }>>];
