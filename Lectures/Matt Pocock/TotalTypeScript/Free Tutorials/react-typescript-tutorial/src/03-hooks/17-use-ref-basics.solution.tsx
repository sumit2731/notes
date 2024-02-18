import { useEffect, useRef } from "react";

export const Component = () => {

  /**
   * See Course Notes
   */
  const id = useRef<string>();

  useEffect(() => {
    id.current = "Random value!";
  }, []);

  return <div></div>;
};
