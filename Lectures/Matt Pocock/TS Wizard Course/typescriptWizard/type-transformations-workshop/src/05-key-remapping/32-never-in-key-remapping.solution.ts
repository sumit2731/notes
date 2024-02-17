import { Equal, Expect } from "../helpers/type-utils";

interface Example {
  name: string;
  age: number;
  id: string;
  organisationId: string;
  groupId: string;
}

/**
 * never actually says don't include this in the object. This is one of the many, many use cases 
 *  for never.
 */
type OnlyIdKeys<T> = {
  [K in keyof T as K extends `${string}${"id" | "Id"}${string}`
    ? K
    : never]: T[K];
};

/**
 * @MySolution using cleaner way. same as course solution
 */
type Converter<Prop> = Prop extends (`${string}${'id' | 'ID'}${string}`) ? Prop : never

type OnlyIdKeys2<T> =  {
  [Prop in keyof T as Converter<Prop>]: T[Prop]
}




type tests = [
  Expect<
    Equal<
      OnlyIdKeys<Example>,
      {
        id: string;
        organisationId: string;
        groupId: string;
      }
    >
  >,
  Expect<Equal<OnlyIdKeys<{}>, {}>>
];
