/* 
Object & {} - Similar, can hold all boxable types in them i.e anything that has common
  properties. you can nly access common properties only.That everything except null or 
  undefined.

object - all values except primitive types

https://www.totaltypescript.com/the-empty-object-type-in-typescript

https://webdeveloper.beehiiv.com/p/differences-object-object-typescript

*/

type PrimitiveType =
  | undefined
  | null
  | string
  | number
  | boolean
  | bigint
  | symbol;

type NonPrimitiveType = object;

let obj1: {} = {
  name: "sumeet",
};
