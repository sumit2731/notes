import {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  forwardRef,
} from "react";

/**
 * @Solution1
 * NO Ts error but this does not work as expected.
 *
 * you will get error on console that refs cannot be passed to functional components. see figure 6.
 */

type InputProps1 = {
  label: string;
  id: string;
} & ComponentPropsWithRef<"input">;

const Input1 = ({ label, ref, id, ...props }: InputProps1) => {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" ref={ref} {...props} />
    </p>
  );
};

/**
 * @Solution2
 * Now we use forwardRef to forward the ref to component. but here type of ref property is not compatible
 * ref prop of input, so we need to give type to incoming ref in Forward ref.
 *
 * ForwardedRef, allows component to receive ref from outside, It can be used at 2 places -
 *  a)passing a ref to DOM element in underlying component
 *  b)while using impertaive handler. this allows to expose some custom functionality outside of
 *    component
 */

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

const Input2 = forwardRef(function Input(
  { label, id, ...props }: InputProps,
  ref
) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" ref={ref} {...props} />
    </p>
  );
});

/**
 * @Solution3
 * here we use generics to provide type to ref and type to props.
 *
 * If you use generics to provide type to ref, you have to use generics to provide type to reactProps also.
 */
const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, id, ...props },
  ref
) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" ref={ref} {...props} />
    </p>
  );
});
export default Input;
