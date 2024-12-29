type ButtonAttributes = {
  type: "button" | "submit" | "reset";
};

const modifyButton = (attributes: ButtonAttributes) => {};

const buttonAttributes: ButtonAttributes = {
  type: "button",
};

modifyButton(buttonAttributes);
/**
 * TypeScript understands that in this setup, really, you can't modify this object literal before it gets passed
 * in there, it's literally in the parentheses.
 *
 * I want to give you a proper sense of how object properties infer so that you can kind of change the way maybe
 * you declare your variables and mostly you're gonna want to inline them.
 */
modifyButton({
  type: "button",
});

// Example 2

const modifyButtons = (attributes: ButtonAttributes[]) => {};

const buttonsToChange: ButtonAttributes[] = [
  {
    type: "button",
  },
  {
    type: "submit",
  },
];

modifyButtons(buttonsToChange);

/**
 * @ExtraFormCourse
 *
 * OtherWays ton solve this issue
 *
 * a)use as const at object level (101)
 * b)use as const after string literal
 */
