//Derive a union type from an object - Dervive SingleFruitCount from fruitCounts
export const fruitCounts = {
  apple: 1,
  pear: 4,
  banana: 26,
};

type SingleFruitCount =
  | {
      apple: number;
    }
  | {
      banana: number;
    }
  | {
      pear: number;
    };

type FruitCounts = typeof fruitCounts;

//keyOf converts all properties of object into union types
type NewSingleFruitCount1 = keyof FruitCounts;

//this way we can define all types of union types into properties of individual object
type NewSingleFruitCount2 = {
  /**
   * keyOf Object return union of object properties
   * using [K in UnionType], we go through each property in union
   */
  [K in keyof FruitCounts]: number;
};

type NewSingleFruitCount3 = {
  [K in keyof FruitCounts]: {
    // we again use 'in' to iterate over all types of union type, to define them as individial properties
    // since ehere union has only 1 type, so we get only one type
    [K2 in K]: number;
  };
};

type newUnion = "apple" | "pear";

/**
 * This is how we convert a object type into union type. by specfying union type in [] after object type
 *
 * we iterate over each type of union passed in [], form object we take the value of that properties and add it as type of union.
 * object properties which are not defined in union are left
 */
type NewSingleFruitCount = {
  /**
   * keyOf Object return union of object properties
   * using [K in UnionType], we go through each property in union
   */
  [K in keyof FruitCounts]: {
    // gives this -{apple: {apple: number}}. same property which is iterated at outer level
    [K2 in K]: number;
  };
}[keyof FruitCounts];

const singleFruitCount: NewSingleFruitCount = {
  apple: 1,
};

type n = keyof FruitCounts;
