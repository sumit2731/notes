import Container from "./UI/Container.tsx";
import {
  useTimersContext,
  type Timer as TimerProps,
} from "../store/timers-context.tsx";
import { useEffect, useRef, useState } from "react";

export default function Timer({ name, duration }: TimerProps) {
  /**
   * Here current is read only because we assign initial value as null and gave some other type as generic.
   * Give function overloads for useRef
   * solution - keep type of default value and generic same. so to generic we give union value.
   * we will not face this issue when assigning ref to dom elements, we only face this when we use
   * ref to store our own value
   */
  // const timerIntervalRef = useRef<number>(null);
  const timerIntervalRef = useRef<number | null>(null);
  const [remainingTime, setRemainingTime] = useState(duration * 1000);

  const { isRunning } = useTimersContext();

  if (timerIntervalRef.current && remainingTime <= 0)
    clearInterval(timerIntervalRef.current);

  useEffect(() => {
    /**
     *callback passed to useEffext should wither return a function or should not return anything
     */
    /**
     * However, technically, at least, theoretically the value stored here in current could refer to a different value than it does here
      because, of course, the cleanup function will run at some point in the future, possibly a couple of seconds or even minutes after 
      this main effect function ran.In the meantime, we could have changed the stored value anywhere else in the component.

      That's why a better practice here is to store this timer in a separate constant which is then scoped to this overall function
      we pass to useEffect,and to then clear this timer and now this error down here goes away. Of course, we should still store this timer
      in our interval ref though,so that we can still stop it from here.
     */
    let timer: number;
    if (isRunning) {
      timer = setInterval(() => {
        setRemainingTime((prevTime) => {
          /**
           * When you stop & restart the timers, any timers that did already expire will restart for "one tick" and will therefore be reduced by 50ms.
           */
          if (prevTime <= 0) return prevTime;
          return prevTime - 50;
        });
      }, 50);
      timerIntervalRef.current = timer;
    } else if (timerIntervalRef.current) {
      //! sign at the end tells that value is not null
      clearInterval(timerIntervalRef.current!);
      // timerIntervalRef.current = null;
    }
    return () => clearInterval(timerIntervalRef.current!);
  }, [isRunning]);

  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>
        <progress max={duration * 1000} value={remainingTime}></progress>
      </p>
      <p>{formattedRemainingTime}</p>
    </Container>
  );
}
