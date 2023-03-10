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
 */
type EventType = Event["type"];

type tests = [Expect<Equal<EventType, "click" | "focus" | "keydown">>];

/**
 * Thing learn - another use of indexed type syntax
 */
