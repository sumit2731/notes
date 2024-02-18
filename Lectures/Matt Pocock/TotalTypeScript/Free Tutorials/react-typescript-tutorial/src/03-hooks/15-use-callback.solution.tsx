import { useCallback } from "react";
import { Equal, Expect } from "../helpers/type-utils";

export const Buttons = (props: { id: string }) => {
  /**
   * See type defination of useCallback,generic T extends Function, so we need it pass it a subType of function, if
   * we pass it some other type we will get error.Also return type of useCallback is also same as type of callback
   * it receives.
   * 
   * 
   * We want to give specific subtype type function i.e arg type and return type, so that return type also has
   * ,more strict type.
   * 
   * There 2 ways to solve this, 
   * 
   * a)First way is we give argtype and return to passed function. his was typescript will have value of generic.
   * and same type it will assign to return type of useCallBack
   * What we're seeing here is that useCallback takes in the function that's passed in, infers its types, and then uses 
   * that as the thing that gets returned.
   */
  const onClick = useCallback(
    (buttonName: string) => {
      console.log(props.id, buttonName);
    },
    [props.id]
  );

  /**
   * @way2 - here we specifically assign a type to generic.even if actual function type is different, type given
   *  to generic prevails.Please keep in mind that first way is preferred.
   */
  const onClick2 = useCallback<(buttonName: string) => void>(
    (buttonName: string) => {
      console.log(props.id, buttonName);
      return 1;
    },
    [props.id]
  );

  type test = Expect<Equal<typeof onClick, (buttonName: string) => void>>;

  return (
    <div>
      <button onClick={() => onClick("A")}>A</button>
      <button onClick={() => onClick("B")}>B</button>
      <button onClick={() => onClick("C")}>C</button>
    </div>
  );
};
