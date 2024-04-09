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
   * to narrow down the props outisde if condition, this is because href is optional in AnchorProps.
   *
   * If  a property is mandatory in type then this works fine. See example2 in DummyComponent
   *
   */
  if ("href" in props) {
    console.log(props);
    return <a {...props} className="button"></a>;
  }
  //here ts is not able to understand that props type is ButtonProps
  return <button {...props} className="button"></button>;
};

/**
 * @Approach2 - TypePredicate (workaround for problem faced in approach 1)
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
 * Here we mark a property as optional with never type, it needs to be optional because making it mandatory, will require
 *  us to pass a value and there is not valid value for optional type.
 * At the same time we make this property as optional(or mandatory) in other union type.Now when we provide this property
 * that means type is second type only.
 *
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

const ex1 = <Button href="google.com" disabled></Button>;

/**
 * Now presence of href means that prop type cannot be ButtonProps, because it expect href to have type of never.
 *
 *
 * Absense of href prop do not means that type is  AnchorProps - if you can live this then this is also a good solution
 * You cannot solve this by making href mandatory in AnchroProps because we know how Union Types behaves in
 *  props.even if a proeprty exist in on  prop type, presence of it does not mean that pop is of that type,
 * see DummyComponent example.
 *
 * so this trick of optional property helps to narrow down type
 */
const ex2 = <Button disabled target="blank"></Button>;

/**
 *
 * Q&A from course -
 *
 * Fix above use case by using function overloading
 * see Button3.tsx
 */

/**
 * Why other options will not work -
 *
 * a)we cannot make href:never as mandatory in ButtonProps, because that way we cannot
 *  provide a valid value to href when we want to use button
 * b)If we make href:string as mandatory in AnchorProps , thenw e would have this -
 *    href? in ButtonProps
 *    href  in AnchorProps
 *
 * here still ts cannot decide which exact prop type to use as , in DemoComponent also,
 * providing starting properties on type1 does not ensure that prop type is of type1
 */
