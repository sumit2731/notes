import { ComponentProps, ComponentType } from "react";
import { Equal, Expect } from "../helpers/type-utils";



/**
 * So your challenge is to work out a way where you can remove the onChange prop from the Input be able to pass in a 
 * new onChange to use.
 */
export const Input = (
  props: ComponentProps<"input"> & { onChange: (value: string) => void }
) => {
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