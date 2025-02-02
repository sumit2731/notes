type ButtonAttributes = {
  type: "button" | "submit" | "reset";
};

const modifyButton = (attributes: ButtonAttributes) => {};

/**
 * as const works at type level, it has no implications at run type.
 * It works recursively at all levels. it marks each property as read only.
 * also tightens the type for each property. note that as const is used in value world
 *
 * also as const can also be used on array, see lecture 105 for details.
 * it also marks a array as literal type and readonly
 */
const buttonAttributes = {
  type: "button",
} as const;

modifyButton(buttonAttributes);
