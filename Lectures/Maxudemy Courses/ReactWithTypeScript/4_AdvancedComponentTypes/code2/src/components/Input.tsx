import { ComponentPropsWithoutRef, forwardRef } from "react";

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

/**
 * forwardRef accepts 2 generic as a parameter. First generic is the type of value that will be eventually stored in
 * ref.current, and second one is props that function that is passed to forwardRef will receive.
 *
 * If you specify first generic thhen you will have to specify second one alos
 */
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, ...props }, ref) => {
    return (
      <p>
        <label htmlFor={id}>{label}</label>
        <input id={id} name={id} type="text" ref={ref} {...props} />
      </p>
    );
  }
);

export default Input;

type t1 = string extends any ? number : any;
