import { Equal, Expect } from "../helpers/type-utils";

export type Event =
  | {
      type: "click";
      event: MouseEvent;
    }
  | {
      type: "focus";
      event: FocusEvent;
    }
  | {
      type: "keydown";
      event: KeyboardEvent;
    };

/**
 * This works because when you access a key in a union type, you are actually accessing every possible permutation of the union.
 * type needs to be discriminator only i.e it needs to be present in each type of union. so this works well with discrinated union
 * because it knows type is going to be there.
 *
 * Only condition to do indexed access on union is that indexed property should exist on all member of union
 */
type EventType = Event["type"];

type tests = [Expect<Equal<EventType, "click" | "focus" | "keydown">>];

/**
 * Extra - 2 ways to get union from indexed type
 *
 * On union type if you do indexed access for property, if that property exists on all types in union , you will
 *  get union of types, each type is type of value of property on individual member of union(this question)
 *
 * If on a single Object type you do indexed access of Union types of properties, you will get union of types,
 * where each type is type of value - Object[''singleMemberofUnion'] (next question explains this)
 */
