interface FetchOptions {
  url: string;
  method?: string;
  headers?: Record<string, string>;
  body?: string;
}
/**
 * why this is not throwing error?
 *
 * you should think about TypeScript's assignability model like that. It's not about exact objects
 * being passed around. It's TypeScript thinking, does this satisfy this contract? Do I have all the
 * required things I need in fetch options? Sure, there's an excess property in there,but if it's
 * not like inlined into the function call and it's not being declared with that satisfies or a
 * variable annotation, then fine.
 */
const options = {
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
