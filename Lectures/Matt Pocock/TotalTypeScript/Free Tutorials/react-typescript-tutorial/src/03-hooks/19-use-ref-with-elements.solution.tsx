import { useRef } from "react";

export const Component = () => {
  /**
   * 
   * See course lecture 
   * If we do not pass any argument to useRef, ref.current property can have value of HTMLDivElement or undefined.
   * but as we saw in last lecture, when ref is assigned to HTML components current cannot have value of undefined.
   * So we give pass null to useRef, now curreent can have value of HTMLDivElement | null, which is acceptable.
   * 
   * reason ref.current is undefined is because when we do not pass anything to useRef,javascript defaults it to undefined.
   * We need to match what React is setting the runtime value to.
   * 
   * This is how you handle the typing refs that you need to pass into DOM elements here. Use useRef passing in the correct
   * elements.
   * 
   */
  //const ref = useRef<HTMLDivElement>();
  const ref = useRef<HTMLDivElement>(null);

  return <div ref={ref} />;
};
