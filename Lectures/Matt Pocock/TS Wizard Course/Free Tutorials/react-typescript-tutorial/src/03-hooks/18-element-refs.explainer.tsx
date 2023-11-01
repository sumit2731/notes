import { Equal, Expect } from "../helpers/type-utils";

export const nullAsRef = (
  <div
    ref={{
      current: null,
    }}
  ></div>
);

// Legacy refs are supported!
export const stringAsRef = <div ref={"legacyRef"}></div>;

export const undefinedAsRef = (
  <div
    ref={{
      // Type 'undefined' is not assignable to
      // type 'HTMLDivElement | null'.
      current: undefined,
    }}
  ></div>
);

// Callback refs are supported via RefCallback<T>
export const callbackRefs = (
  <div
    ref={(htmlDivElement) => {
      type test = Expect<Equal<typeof htmlDivElement, HTMLDivElement | null>>;
    }}
  ></div>
);


/**
 * See Lecture to understand. The type of values ref can take, when it is used as prop in HTML Intrinsic Components -
 * 
 * "string" | callbackForm| {current: (T| null)}|null |undefined
 * 
 * Here T is type of Element on which This is used
 * 
 * when component will be unmounted current will have value of null not undefined.in callback form also, callback will
 * be called with null when component is unmounted. current cannot have value of undefined
 */
