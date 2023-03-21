/**
 * A is a discriminated union, with 'type' as the discriminator.
 *
 * Discriminated unions have common properties which are used to
 * differentiate between members of the union. In this case, type
 * is the discriminator.
 */
type A =
  | {
      type: "a";
      a: string;
    }
  | {
      type: "b";
      b: string;
    }
  | {
      type: "c";
      c: string;
    };


const getUnion = (result: A) => {
  if (result.type == "a") {
    //here we get autocomplete for result.a, because ts knows which tyoe this can be
    /**
     *  Discriminated unions are super-duper useful as a type because they can represent different props in React, different weight,
     * like methods of behavior for your function.
     */
    //result.a
  }
};

/**
 * B is a union, but not a discriminated union.
 */
type B = "a" | "b" | "c";

/**
 * C is an enum.
 */
enum C {
  A = "a",
  B = "b",
  C = "c",
}

export {};
