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
     * here inside if block we do not get type narrowing, since we destructed the otherProps outside of if condition
     * (see TypeNarrowing example1 in DummyComponent,to see issue with destructuring and type inference)
     *  ts does not know type of otherProps (I thunk it should be union of ComponentPropsWithoutRef<"button">
     *  and ComponentPropsWithoutRef<"anchor"> ).
     *
     * As we know in destructruting extra props can be passed to component, why this is giving error is because
     * a and button tag has some props with same name and type of them do not match here, hence error
     */
    // return <a {...otherProps} className="button"></a>;

    /**
     * In order to get type narrowing , we need to do destructuring inside if block. now restProps is of type
     *  ComponentPropsWithoutRef<"a">
     */

    let { el, ...restProps } = props;

    /**
     * now you can either pass props or restProps to your component.
     * why can we pass props? it is having a extra prop el, which does not exists on a tag?
     * passing extra props in destrcutre assignment is not going to give us error.read @Note1 in notes.ts ,
     * refer to figure 3
     */
    return <a {...props} className="button"></a>;
  }
  return <button {...props} className="button"></button>;
};

export default Button;
