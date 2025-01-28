import { Equal, Expect } from "@total-typescript/helpers";

type User = {
  id: string;
};
/**
 * Here discriminator is first member of tupple and that defines type of second member of tuple
 *
 * this is Discriminator Union of Tupples
 */
type ApiResponse = ["success", User[]] | ["error", string];

async function fetchData(): Promise<ApiResponse> {
  try {
    const response = await fetch("https://api.example.com/data");
    if (!response.ok) {
      return [
        "error",
        // TODO - more detailed error handling here
        "An error occurred",
      ];
    }

    const data = (await response.json()) as User[];
    return ["success", data];
  } catch (error) {
    return ["error", "An error occurred"];
  }
}

async function exampleFunc() {
  const [status, value] = await fetchData();
  /**
   * here typescript is able to guess the second tuple based on first tuple.
   * this works with discriminated tuples not with discriminated of objects
   */
  if (status === "success") {
    console.log(value);
    type test = Expect<Equal<typeof value, User[]>>;
  } else {
    console.error(value);

    type test = Expect<Equal<typeof value, string>>;
  }
}
