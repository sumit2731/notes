type User = {
  id: string;
  email: string;
  age: number;
};
/**
 * Excludes Some Properties
 */
type ExcludeStrings<T> = {
  [P in keyof T as T[P] extends string ? never : P]: T[P];
};

type t1 = ExcludeStrings<User>;

/**
 * Recursion Types
 */

type ReadonlyUser<T> = {
  readonly [P in keyof T]: T[P];
};

type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

/**
 * Union Types
 */

type StatusType = "Failure" | "Success";
type StatusObject = StatusType extends infer S ? { status: S } : never;

/**
 * Matt Pocock - https://www.youtube.com/watch?v=PEQn1a6xOHc
 */

interface Apidata {
  "maps:longitute": string;
  "maps: latitude": string;
}

//from this type remove maps: from all properties

type Transform<T> = {
  [Prop in keyof T as RemoveMaps<Prop>]: T[Prop];
};

type RemoveMaps<T> = T extends `maps:${infer U}` ? U : T;
