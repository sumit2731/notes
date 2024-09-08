/**
 * In TSdocs of Conditional Types
 * typeA extends typeB
 *
 * =>  type on the left of the extends is assignable to the one on the right,
 */

/**
 * objectA extends objectB => means objectA has all properties of objectB, plus some extra
 *
 */

/**
 * here employee extends person
 */
let person = {
  name: "sumeet",
};

let employee = {
  name: "sumeet",
  id: 1,
};

person = employee;
person.name;

/**
 * Union extends TypeA
 *
 * That mean each member of Union can be assigned to TypeA
 *
 *  a)see example in mapped type documentation.
 *  b)see definition of Pick
 */
//ex1 - Each member of Union will hve kind Property
type EventConfig<Events extends { kind: string }> = {
  [E in Events as E["kind"]]: (event: E) => void;
};

type SquareEvent = { kind: "square"; x: number; y: number };
type CircleEvent = { kind: "circle"; radius: number };

type Config = EventConfig<SquareEvent | CircleEvent>;

//here we make sure each member of Union is a proeprty of passed Object

/**
 * ex2 - Each member of Union is memeber of another union -
 *  unionA extends UnionB (means each of UnionA is present in UNionB)
 * a|b extends a | b | c
 */

type Pick2<T, K extends keyof T> = {
  [P in K]: T[P];
};

/**
 * ex 3 - how to make sure only a union type is passed
 */

type Record2<K extends keyof any, T> = {
  [P in K]: T;
};

type Omit3<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
