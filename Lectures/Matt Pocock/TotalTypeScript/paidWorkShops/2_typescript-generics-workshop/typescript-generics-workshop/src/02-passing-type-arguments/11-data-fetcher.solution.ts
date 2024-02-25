import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

/**
 * There is no way to give generic type to fetch to represent the data returned by api. If that
 *  would have been avalible then using that is best way - fetch<DataType>()
 * 
 * also data returned by .json is Promise<any>
 * 
 * We need to find some way of reducing the scope of that any so it doesn't bleed into the rest
 *  of our program.
 * 
 * this is recommended solution which stops the any at source.
 * 
 * This is a lesson about how you can use generics to really stamp down on those anys and stop 
 * them from even infecting a line of your code base.
 * 
 */
const fetchData = async <TData>(url: string) => {
  let data: TData = await fetch(url).then((response) => response.json());

  return data;
};

/**
 * Other ways - here aby will remain only in function
 * This pattern is used in cal.com
 */

const fetchData2 = async <TData>(url: string): Promise<TData>  => {
  let data = await fetch(url).then((response) => response.json());

  return data
};

/**
 * here we use typecasting to chnage type that we return from function.
 * but still before returning data from function, we can do some operation
 *  on any which can cause error
 */
const fetchData3 = async <TData>(url: string) => {
  let data = await fetch(url).then((response) => response.json());

  return data as TData;
};

it("Should fetch data from an API", async () => {
  const data = await fetchData<{ name: string }>(
    "https://swapi.dev/api/people/1"
  );
  expect(data.name).toEqual("Luke Skywalker");

  type tests = [Expect<Equal<typeof data, { name: string }>>];
});