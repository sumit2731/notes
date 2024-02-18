import { error } from "console";
import { expect, it } from "vitest";

const tryCatchDemo = (state: "fail" | "succeed") => {
  try {
    if (state === "fail") {
      throw new Error("Failure!");
    }
  } catch (e) {
    /**
     * @desc not best solition as we can be something else, in that case we will end up retuning undefined.
     * Actually in production we can throw anything as condition in try will be more complicated.so ny using this solution
     * we will end up returning undefined
     */
    return (e as Error).message;
  }
};

it("Should return the message when it fails", () => {
  expect(tryCatchDemo("fail")).toEqual("Failure!");
});
