import { Equal, Expect } from "@total-typescript/helpers";

type Event = "click" | "hover" | "scroll";

/**
 * Problem - figure out the type to be given to callback type, so that
 * we have a listenToEvent function that takes a callback that can handle
 * a varying number of parameters based on how it's called.
 */

type CallbackType = unknown;

const listenToEvent = (callback: CallbackType) => {};

listenToEvent(() => {});

listenToEvent((event) => {
  type tests = [Expect<Equal<typeof event, Event>>];
});

listenToEvent((event, x, y) => {
  type tests = [
    Expect<Equal<typeof event, Event>>,
    Expect<Equal<typeof x, number>>,
    Expect<Equal<typeof y, number>>,
  ];
});

listenToEvent((event, x, y, screenId) => {
  type tests = [
    Expect<Equal<typeof event, Event>>,
    Expect<Equal<typeof x, number>>,
    Expect<Equal<typeof y, number>>,
    Expect<Equal<typeof screenId, number>>,
  ];
});
