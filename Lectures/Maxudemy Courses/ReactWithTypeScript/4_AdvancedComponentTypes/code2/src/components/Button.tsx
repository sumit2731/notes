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
    /**.
     * This will not work since we destructed the otherProps outside of if condition (see TypeNarrowing example in DummyComponent, to
     *  issue with destructuring and type inference)
     *  ts does not know type of otherProps (I thunk it should be union of ComponentPropsWithoutRef<"button">
     *  and ComponentPropsWithoutRef<"anchor"> ).
     *
     * As we know in destructruting extra props can be passed to component, why this is giving error is because
     * a and button tag has some props with same name and type of them do not match here, hence error
     */
    // return <a {...otherProps} className="button"></a>;

    //if we do this, the otherProps has type of ComponentPropsWithoutRef<"a">, and it can be used in  props of a tag

    let { el, ...restProps } = props;

    /**
     * here type of props is AnchorProps but passing extra props in destrcutre assignment is not going to
     *  give us error.read notes.ts , refer to figure 3
     */
    return <a {...props} className="button"></a>;
  }
  return <button {...props} className="button"></button>;
};

export default Button;
