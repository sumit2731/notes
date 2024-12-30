// API's are NOT transformed

const str = "Hello, world!";

str.replaceAll("Hello", "Goodbye");

// Syntax IS transformed:

const myFunc = (input?: { search?: string }) => {
  // Optional chaining
  const search = input?.search;

  // Nullish coalescing
  const defaultedSearch = search ?? "Hello";
};

/**
 * target and lib can be set to different values.
 * typescript will transform syntax but not API.
 *  Target and lib should probably stay in sync unless you're doing something interesting with actually polyfilling old APIs manually
 *  yourself and just using it to transform the syntax.
 */
