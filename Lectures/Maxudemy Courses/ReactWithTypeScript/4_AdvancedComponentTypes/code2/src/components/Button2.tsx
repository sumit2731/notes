import { type ComponentProps as ComponentPropsWithoutRef } from "react";

/**
 * This type is used till end, it's only in end we use this never type.
 *
 * never means that this property should be not be set to any value. we are using optional prop
 * because if we do not make it optional then we need to provide it value while we truly cannot
 * provide it any value.
 * see second half of lecture 52 for details
 */
// type ButtonProps = ComponentPropsWithoutRef<"button">;
type ButtonProps = ComponentPropsWithoutRef<"button"> & { href?: never };

// type AnchorProps = ComponentPropsWithoutRef<"a">;
/**
 * here we make it optional to be inline with standard anchor tag behaviour
 */
type AnchorProps = ComponentPropsWithoutRef<"a"> & { href?: string };

/**
 * here return value type is @typePradicate
 * that is some special TypeScript code that can be used as a return value type,to tell TypeScript that this function
 * returns a Boolean but that if the Boolean value is true, this argument that has been passed to this function is of
 * a specific type.
 */

function isAnchorElement(
  props: ButtonProps | AnchorProps
): props is AnchorProps {
  return "href" in props;
}

const Button = (props: ButtonProps | AnchorProps) => {
  /**
   * Approach 1 - here we checked whether a href is present in props or not. ts was able to
   * conclude that props type is AnchorProps, so it can be passed to 'a'. but it was not able
   * to narrow down the props outisde if condition
   */
  // if ("href" in props) {
  //   //here ts is able to understand that props type is AnchorProps
  //   return <a {...props} className="button"></a>;
  // }
  // //here ts is not able to understand that props type is ButtonProps
  // return <button {...props} className="button"></button>;

  /**
   * Here because of type pradicate ts knows that type of props is AnchorProps, which means that it
   * can be passed to 'a' tag
   */
  if (isAnchorElement(props)) return <a {...props} className="button"></a>;
  /**
   * Here ts knows that if we come to this line then type of props is ButtonProps, hence they
   * can be passed to 'button' tag
   */
  return <button {...props} className="button"></button>;
};

export default Button;
