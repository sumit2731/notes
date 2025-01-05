import { Equal, Expect } from "@total-typescript/helpers";

/**
 * here see that process.env is globally avalible still being part of namespace.
 * inside "declare module", it puts namespace into global
 */
const envVariable = process.env.MY_ENV_VAR;

type test = Expect<Equal<typeof envVariable, string>>;
