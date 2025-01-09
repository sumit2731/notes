import { Equal, Expect } from "@total-typescript/helpers";

type Event = "click" | "hover" | "scroll";

/**
 * Just because a function can receive these parameters doesn't mean it has to handle them.
 * This concept is crucial to understand when working with callbacks.this is used to type many
 * callbacks like Array.map
 */
type CallbackType = (
  event: Event,
  x: number,
  y: number,
  screenId: number
) => void;

const listenToEvent = (callback: CallbackType) => {
  /**
   * when we callit , we have to pass all parameters
   *
   * When implementing a function, it doesn't have to pay attention to everything that has
   * been passed in.It can choose to ignore all parameters or pay attention to just the event,
   * or the event and coordinates, or all four parameters.
   *
   * However, it cannot use a parameter that doesn't exist in its definition, as this would
   * result in an error.
   *
   * when you think about Like function parameter comparisons in typescript Then this is really
   * important to remember just because a function expects to be called with all of these different
   * things Doesn't mean that the function actually has to implement those things.
   *
   * this is how functions like Array.map is typed,
   *
   * just because a function Can receive those parameters doesn't mean that function has to receive
   * those parameters or has to handle those parameters
   */
  callback("click", 0, 0, 1);
};

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
