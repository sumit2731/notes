type ButtonAttributes = {
  type: "button" | "submit" | "reset";
};

const modifyButton = (attributes: ButtonAttributes) => {};

/**
 * as const works at type level, it has no implications at run type.
 * It works recuursively at all levels. it marks each proeprty as read only
 */
const buttonAttributes = {
  type: "button",
} as const;

modifyButton(buttonAttributes);
