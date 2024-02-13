import { Equal, Expect } from "../helpers/type-utils";

const parser1 = {
  parse: () => 1,
};

const parser2 = () => "123";

const parser3 = {
  extract: () => true,
};

/**
 *  What you can do here is you can say T extends either this branch or this branch or this branch. 
 * You can specify an infer TResult in each branch.
 */
type GetParserResult<T> = T extends
  | {
      parse: () => infer TResult;
    }
  | {
      extract: () => infer TResult;
    }
  | (() => infer TResult)
  ? TResult
  : never;

type tests = [
  Expect<Equal<GetParserResult<typeof parser1>, number>>,
  Expect<Equal<GetParserResult<typeof parser2>, string>>,
  Expect<Equal<GetParserResult<typeof parser3>, boolean>>,
];
