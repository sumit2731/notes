import { ComponentProps } from "react";
import { Equal, Expect } from "../helpers/type-utils";

/**
 * Note here we face mixed Interface with Types here
 */
interface InputProps extends Omit<ComponentProps<"input">, "onChange"> {
  onChange: (value: string) => void;
}

export const Input = (props: InputProps) => {
  return (
    <input
      {...props}
      onChange={(e) => {
        props.onChange(e.target.value);
      }}
    ></input>
  );
};

const Parent = () => {
  return (
    <Input
      onChange={(e) => {
        console.log(e);

        type test = Expect<Equal<typeof e, string>>;
      }}
    ></Input>
  );
};
