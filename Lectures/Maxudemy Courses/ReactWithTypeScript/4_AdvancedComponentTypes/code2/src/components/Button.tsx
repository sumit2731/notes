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
    /**
     * This will not work since we destructed the otherProps outside of if condition
     *  ts does not know type of otherProps (I thunk it should be union of ComponentPropsWithoutRef<"button">
     *  and ComponentPropsWithoutRef<"anchor"> )
     */
    // return <a {...otherProps} className="button"></a>;

    /**
     * here type of props is AnchorProps but passing extra props in destrcutre assignment is not going to
     *  give us error.read notes.ts , refer to figure 3
     */
    return <a {...props} className="button"></a>;
  }
  return <button {...props} className="button"></button>;
};

export default Button;
