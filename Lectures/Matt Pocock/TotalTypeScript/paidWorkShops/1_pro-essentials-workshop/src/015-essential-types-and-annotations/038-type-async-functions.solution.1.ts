import { Expect, Equal } from "@total-typescript/helpers";

/**
 * return type of function is on left hand side of assignment
 * value that you return is on right hand side of assignment
 */
async function fetchData(): Promise<number> {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  return data;
}

const example = async () => {
  const data = await fetchData();

  type test = Expect<Equal<typeof data, number>>;
};
