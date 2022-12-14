import { expect, it } from "vitest";


/**
 * @Desc Wrong way - You cnt access the property unless you know that it is there. so we write the condition in different way.
 * within if block ts is sure about the type, hence it is not companining and even giving you IDE suggestions inside that block.
 */
const coerceAmount2 = (amount: number | { amount: number }) => {
  if (amount.amount) {
    return amount.amount;
  }
  return amount;
};




const coerceAmount = (amount: number | { amount: number }) => {
  if (typeof amount === "number") {
    return amount;
  }
  return amount.amount;
};
const coerceAmount2 = (amount: number | { amount: number }) => {
  if (typeof amount === "object") {
    return amount.amount;
  }
  return amount;
};

it("Should return the amount when passed an object", () => {
  expect(coerceAmount({ amount: 20 })).toEqual(20);
});

it("Should return the amount when passed a number", () => {
  expect(coerceAmount(20)).toEqual(20);
});
