import { useRef } from "react";

export const Component = () => {
  const firstOverload = useRef<string>("124123123");

  firstOverload.current = "123j12jhb123jhb";

  /**
   * See the course video. Here useRef has diffrent function overloads. when we pass null as initial value.
   * secondOverload.current is readonly, Why does this one return a readonly ref? It's because if you pass 
   * in null here, what they decided to do on the type level -- It's a strange decision but I do have to explain
   * it because it makes sense but doesn't -- they decided that when you do use this null thing here, you're 
   * saying to React, "I want you to manage this ref for me. I don't want to manage this ref."
   * may be this will go away in React 19.
   * 
   * This behaviour is useful when we want to assign to html element. for other usecases either use firstOverload or 
   *  thirdOverload
   */

  const secondOverload = useRef<string>(null);

  secondOverload.current = "Hello";

  const thirdOverload = useRef<string>();
  thirdOverload.current = undefined;

  return null;
};
