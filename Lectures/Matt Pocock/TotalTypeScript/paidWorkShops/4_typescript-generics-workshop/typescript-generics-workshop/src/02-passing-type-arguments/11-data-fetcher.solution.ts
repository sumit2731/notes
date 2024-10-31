import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

/**
 * This is a lesson about how you can use generics to really stamp down on those anys and stop
 * them from even infecting a line of your code base.
 *
 * Here point that we are trying to make is that you should stop generics as early as possible
 * and would not allow them to pollute your codebase.
 */
const fetchData = async <TData>(url: string) => {
  // let data: TData = await fetch(url).then((response):Promise<TData> => response.json());
  let data: TData = await fetch(url).then((response) => response.json());
  return data;
};

it("Should fetch data from an API", async () => {
  const data = await fetchData<{ name: string }>(
    "https://swapi.dev/api/people/1"
  );
  expect(data.name).toEqual("Luke Skywalker");

  type tests = [Expect<Equal<typeof data, { name: string }>>];
});
