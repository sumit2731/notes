import { type ComponentPropsWithoutRef } from "react";

type ButtonProps = {
  el: "button";
} & ComponentPropsWithoutRef<"button">;

type AnchorPorps = {
  el: "anchor";
} & ComponentPropsWithoutRef<"a">;

const Button = (props: ButtonProps | AnchorPorps) => {
  const { el, ...otherProps } = props;
  if (props.el == "anchor") {
    return <a {...props} className="button"></a>;
  }
  return <button {...props} className="button"></button>;
};

export default Button;
