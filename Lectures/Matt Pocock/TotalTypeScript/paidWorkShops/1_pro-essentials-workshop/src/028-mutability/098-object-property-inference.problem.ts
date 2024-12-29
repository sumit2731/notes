type ButtonAttributes = {
  type: "button" | "submit" | "reset";
};

const modifyButton = (attributes: ButtonAttributes) => {};
/**
 * By default ts gives it widest type possible
 */
const buttonAttributes = {
  type: "button",
};

modifyButton(buttonAttributes);

// Example 2

const modifyButtons = (attributes: ButtonAttributes[]) => {};

const buttonsToChange = [
  {
    type: "button",
  },
  {
    type: "submit",
  },
];

modifyButtons(buttonsToChange);
