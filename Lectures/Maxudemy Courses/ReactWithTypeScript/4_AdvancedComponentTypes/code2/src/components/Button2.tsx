import { type ComponentProps as ComponentPropsWithoutRef } from "react";

function isAnchorProps(
  props: ButtonProps2 | AnchorProps2
): props is AnchorProps2 {
  return "href" in props;
}

/**
 * @Approach1
 */
type ButtonProps1 = ComponentPropsWithoutRef<"button">;
type AnchorProps1 = ComponentPropsWithoutRef<"a">;

const Button1 = (props: ButtonProps1 | AnchorProps1) => {
  /**
   * Approach 1 - here we checked whether a href is present in props or not. ts was able to
   * conclude that props type is AnchorProps, so it can be passed to 'a'. but it was not able
   * to narrow down the props outisde if condition.
   *
   * see type narrow example in DummyComponnet, this narrowing works fine in ts
   */
  if ("href" in props) {
    return <a {...props} className="button"></a>;
  }
  //here ts is not able to understand that props type is ButtonProps
  return <button {...props} className="button"></button>;
};

/**
 * @Approach2 - TypePredicate (workwround for problem faced in approach 1)
 */

type ButtonProps2 = ComponentPropsWithoutRef<"button">;
type AnchorProps2 = ComponentPropsWithoutRef<"a">;

const Button2 = (props: ButtonProps2 | AnchorProps2) => {
  if (isAnchorProps(props)) {
    return <a {...props} className="button"></a>;
  }
  return <button {...props} className="button"></button>;
};
/**
 *  * DownSide - Outside this component, we can still pass props which belongs to both types do this.
 * 
 * Now I am not getting any support because of course when I'm using the button component,TypeScript just knows
    that we can set either button or anchor props.So by default, it accepts both.And that's why I can mix and 
    match those different props.See DummyComponent
 */

const demo = <Button2 target="abc.com" disabled></Button2>;

/**
 * @Approach3 - Try to differentiate between 2 types based on type that already exist. here we use href.
 *
 * here we tell ts if href is present then props type is AnchorProps only.
 */

/**
 * here we make href options , because if we make it mandatory then we cannot ptovide it any value
 */
type ButtonProps = ComponentPropsWithoutRef<"button"> & { href?: never };

/**
 * on the anchor props, we set href to be optional because technically that's the case for anchor props
 */
type AnchorProps = ComponentPropsWithoutRef<"a"> & { href?: string };

const Button = (props: ButtonProps | AnchorProps) => {
  if (isAnchorProps(props)) {
    return <a {...props} className="button"></a>;
  }
  return <button {...props} className="button"></button>;
};

export default Button;

/**
 * href is present and is string,that means prop type is AnchorProps
 */

const ex1 = <Button href="google.com"></Button>;

/**
 * absense of href prop do not means that type is  AnchorProps, as href is options in
 *  if you can live this then this is also a good solution
 */
const ex2 = <Button disabled target="blank"></Button>;

/**
 * See Function OverLoad solution - Button3
