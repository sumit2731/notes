import { ComponentProps } from "react";
import { Equal, Expect } from "../helpers/type-utils";


/**
 * @CourseSolution
 */
type OverrideProps<T, TOverridden> = Omit<T, keyof TOverridden> & TOverridden;

type InputProps = OverrideProps<
  ComponentProps<"input">,
  {
    onChange: (value: string) => void;
  }
>;

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

/**
 * @MySolution
 */
type ExcludeFromCmpType<
  T extends (keyof React.JSX.IntrinsicElements) | (React.JSXElementConstructor<any>),
  OverrideType> = Omit<ComponentProps<T>, keyof OverrideType
> & OverrideType;

type InputProps2 = ExcludeFromCmpType<"input", {
  onChange: (value: string) => void;
}>;

let obj:InputProps2 = {
  onChange: () => 'hello',
   children: <div></div>
}