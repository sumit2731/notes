import { ComponentPropsWithoutRef, forwardRef } from "react";

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

/**
 * comment1 -
 * Now if we use this code we will get a error. error is that currentProperty of ref received and ref in input
 * are not having same type. so we need to tell react what will ref.current hold
 *
 * comment2 -
 * so we give that as a generic type to forwardRef. there we again get a error. forwardref receives 2 generics if,
 * one generic then we have to specify other one also. this other is  type of props.
 *
 *
 *
 *
 * forwardRef accepts 2 generic as a parameter. First generic is the type of value that will be eventually stored in
 * ref.current, and second one is props that function that is passed to forwardRef will receive.
 *
 * If you specify first generic thhen you will have to specify second one alos
 */

// const Input = forwardRef(({ label, id, ...props }: InputProps, ref) => {
// const Input = forwardRef<HTMLInputElement>(({ label, id, ...props }: InputProps, ref) => {
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, ...props }, ref) => {
    return (
      <p>
        <label htmlFor={id}>{label}</label>
        <input id={id} type="text" ref={ref} {...props} />
      </p>
    );
  }
);

export default Input;
