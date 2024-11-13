type ButtonType = "button" | "submit" | "reset";

type ButtonAttributes = {
  cancel: {
    type: ButtonType;
  };
  confirm: {
    type: ButtonType;
  };
};

const modifyButtons = (attributes: ButtonAttributes) => {};

/**
 * This works because Object.freeze works only at uop level
 * where as const works at all nested levels
 */
const buttonAttributes = {
  cancel: {
    type: "button",
  },
  confirm: {
    type: "button",
  },
} as const;

modifyButtons(buttonAttributes);
