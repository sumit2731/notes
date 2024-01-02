/* 
Union Types

TypeScript will only allow an operation if it is valid for every member of the union. For example, if
you have the union string | number, you can’t use methods that are only available on string:


Solution do type narrowing -
    typeof
    Array.isArray
*/

/* 
Type Assertions

TypeScript only allows type assertions which convert to a more specific or less specific version of a
type. This rule prevents “impossible” coercions like.

Sometimes this rule can be too conservative and will disallow more complex coercions that might be 
    valid. If this happens, you can use two assertions, first to any (or unknown, which we’ll introduce
    later), then to the desired type:
*/

/**
 * Literal Type
 *
 *  'as const' - code snippet2 in codeSnippets folder
 *
 * You can use as const to convert the entire object to be type literals.
 *  It makes all properties as readonly, also all preprties will have type of literals instead of wide
 *      types like string or number
 * The as const suffix acts like const but for the type system, ensuring that all properties are
 *  assigned the literal type instead of a more general version like string or number.
 */

declare function handleRequest(url: string, method: "GET" | "POST"): void;
const req = { url: "https://example.com", method: "GET" } as const;
handleRequest(req.url, req.method);

/**
 * Non-null Assertion Operator (Postfix !)
 *
 * TypeScript also has a special syntax for removing null and undefined from a type without doing any
 * explicit checking. Writing ! after any expression is effectively a type assertion that the value
 * isn’t null or undefined:
 */

function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
}
