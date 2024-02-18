import { useEffect } from "react";

export const useTimeout = (timerMs: number) => {
  /**
   * useEffect should return either a function or it should return a void.
   * click on useEffect callback to see typings of it
   */
  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("Done!");
    }, timerMs);

    return () => {
      clearTimeout(timeout);
    };
  }, [timerMs]);
};
