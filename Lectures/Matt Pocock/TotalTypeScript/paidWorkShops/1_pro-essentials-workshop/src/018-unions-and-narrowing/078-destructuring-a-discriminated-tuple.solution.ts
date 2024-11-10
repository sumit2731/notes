import { Equal, Expect } from "@total-typescript/helpers";

type User = {
  id: string;
};
/**
 * Here descrimininator is first member of typle and that defines econd member of tuple
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

    const data = await response.json();
    return ["success", data];
  } catch (error) {
    return ["error", "An error occurred"];
  }
}

async function exampleFunc() {
  const [status, value] = await fetchData();
  /**
   * here typescript is able to guess the second tuple based on first tuple.
   * this works with desceimininator tuples not with descriminator objects
   */
  if (status === "success") {
    console.log(value);
    type test = Expect<Equal<typeof value, User[]>>;
  } else {
    console.error(value);

    type test = Expect<Equal<typeof value, string>>;
  }
}
