// CODE

let type = "button";

// TESTS

type ButtonAttributes = {
  type: "button" | "submit" | "reset";
};
/**
 * Type of object is different because we are using existing variable to create object
 */
const buttonAttributes: ButtonAttributes = {
  type,
};
