import { type ComponentProps as ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button">;

type AnchorProps = ComponentPropsWithoutRef<"a">;

/**
 * here return value type is @typePradicate
 * that is some special TypeScript code that can be used as a return value type,to tell TypeScript that this function returns a Boolean
    but that if the Boolean value is true, this argument that has been passed to this function is of a specific type.
 */

function isAnchorElement(
  props: ButtonProps | AnchorProps
): props is AnchorProps {
  return "href" in props;
}

const Button = (props: ButtonProps | AnchorProps) => {
  // if ("href" in props) {
  //   //here ts is able to understand that props type is AnchorProps
  //   return <a {...props} className="button"></a>;
  // }
  // //here ts is not able to understand that props type is ButtonProps
  // return <button {...props} className="button"></button>;

  if (isAnchorElement(props)) return <a {...props} className="button"></a>; //ts knows type of props
  return <button {...props} className="button"></button>; //here also ts knows type of props
};

export default Button;
