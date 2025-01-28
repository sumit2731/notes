import { Equal, Expect } from "@total-typescript/helpers";

const throwError = (message: string): never => {
  throw new Error(message);
};
// we can return anything from function because all types can accept never type
const throwError2 = (message: string): { name: string } => {
  throw new Error(message);
};

const handleSearchParams = (params: { id?: string }) => {
  /**
   * here never removes itself from union type. this pattern is useful
   */
  const id = params.id || throwError("No id provided");

  type test = Expect<Equal<typeof id, string>>;

  return id;
};
