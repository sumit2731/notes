import { Equal, Expect } from "@total-typescript/helpers";

/**
 * Same problem as last one but we solved this problem by assigning more specific types to our
 * return type by using as const
 */
const fetchData = async () => {
  const result = await fetch("/");
  if (!result.ok) {
    return [new Error("Could not fetch data.")] as const;
  }

  const data = await result.json();
  /**
   * TypeScript doesn't know that this only contains two members of this array because it might
   * think, oh, you might want to add things onto there. You might want to default it to something
   * mutable because that's JavaScript's behavior. But just adding as const infers it as a tuple
   */
  /**
   * without as js does not know that, this a tupple with 2 memebers, so  so it assign any[] type to
   * this array. because of which whole return type of fucntion defaults to any. using as const we assign
   * specififc type to this
   */
  return [undefined, data] as const;
};

const example = async () => {
  /**
   * Note how destructuring array works with tupple union types.
   *
   * first type is union of first type, since second type only exists in second member it union of undefined and type,
   * which resolves to any here
   */
  const [error, data] = await fetchData();

  type Tests = [
    Expect<Equal<typeof error, Error | undefined>>,
    Expect<Equal<typeof data, any>>,
  ];
};
