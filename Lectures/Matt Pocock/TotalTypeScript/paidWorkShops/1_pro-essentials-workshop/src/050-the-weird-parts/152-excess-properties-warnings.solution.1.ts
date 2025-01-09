interface FetchOptions {
  url: string;
  method?: string;
  headers?: Record<string, string>;
  body?: string;
}
/**
 * Ts trigger excess property check in 3 ways -
 *  a)variable a type annotation.
 *  b)satisfies keyword at the end of the variable declaration
 *  c)inline function call
 */
const options: FetchOptions = {
  url: "/",
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
  // @ts-expect-error
  search: new URLSearchParams({
    limit: "10",
  }),
};

const myFetch = async (options: FetchOptions) => {};

myFetch(options);
