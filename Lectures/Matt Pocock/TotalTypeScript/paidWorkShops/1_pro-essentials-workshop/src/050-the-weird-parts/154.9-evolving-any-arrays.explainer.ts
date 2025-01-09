import { Equal, Expect } from "@total-typescript/helpers";
// here type of arr evolves over time
const arr = [];

arr.push(1);

type test = Expect<Equal<typeof arr, number[]>>;

arr.push("abc");

type test2 = Expect<Equal<typeof arr, (string | number)[]>>;
