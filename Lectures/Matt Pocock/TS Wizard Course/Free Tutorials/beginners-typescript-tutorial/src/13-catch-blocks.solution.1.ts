import { expect, it } from "vitest";

const tryCatchDemo = (state: "fail" | "succeed") => {
  try {
    if (state === "fail") {
      throw new Error("Failure!");
    }
  } catch (e: any) {
    /**
     * @desc By default type of e is unknown so we are not able to access any propertie son it. but if use any type we can
     * access any property on this but dowwn side is we will loose all intellisense.
     */
    return e.message;
  }
};


it("Should return the message when it fails", () => {
  expect(tryCatchDemo("fail")).toEqual("Failure!");
});