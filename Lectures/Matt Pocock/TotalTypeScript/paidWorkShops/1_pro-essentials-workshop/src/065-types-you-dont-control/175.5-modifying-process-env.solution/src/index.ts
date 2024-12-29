import { Equal, Expect } from "@total-typescript/helpers";
/**
 * click on env and see how we can define things in global scope inside "declare module"
 * using "global"
 */
const envVariable = process.env.MY_ENV_VAR;

type test = Expect<Equal<typeof envVariable, string>>;
