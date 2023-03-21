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
 * The Extract helper checks if each member of the union extend the type that you pass in, and returns a union of all the
 * members that do.
 *
 * Docs says this -
 * Extract<Type, Union> Constructs a type by extracting from Type all union members that are assignable to Union.
 */

type ClickEvent = Extract<Event, { type: "click" }>;
//another ways of doing this
type ClickEvent2 = Extract<Event, { event: MouseEvent }>;
//if required object has this key pair also - a:1
type ClickEvent3 = Extract<Event, { a: 1 }>;

type tests = [Expect<Equal<ClickEvent, { type: "click"; event: MouseEvent }>>];

//extract can also be used on standalone union types

type Fruit = "apple" | "banana" | "orange";

type BananaAndOrange = Extract<Fruit, "banana" | "orange">;

//Extract<Type, Union>
//Constructs a type by extracting from Type all union members that are assignable to Union.

type T0 = Extract<"a" | "b" | "c", "a" | "f">;

//type T0 = "a"
