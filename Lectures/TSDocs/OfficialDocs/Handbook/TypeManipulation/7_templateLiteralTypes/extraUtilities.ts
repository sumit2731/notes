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

/**
 * Tricks with infer type
 */

type InferValueFromColor<Color extends string> =
  Color extends `${infer N}-${infer C}-${infer T}`
    ? {
        namespace: N;
        color: C;
        tone: T;
      }
    : never;

type Example = InferValueFromColor<"text-green-300">;
