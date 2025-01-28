import { Equal, Expect } from "@total-typescript/helpers";

type User = {
  id: string;
};

type ApiResponse = [string, User[] | string];

/**
 * make sure that first member of array is either "sucess" or "error"
 *
 */
async function fetchData(): Promise<ApiResponse> {
  try {
    const response = await fetch("https://api.example.com/data");
    if (!response.ok) {
      return [
        "error",
        // Imagine some improved error handling here
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

  if (status === "success") {
    // here inside this if condition we should get proper typing for value
    console.log(value);
    type test = Expect<Equal<typeof value, User[]>>;
  } else {
    console.error(value);

    type test = Expect<Equal<typeof value, string>>;
  }
}
