import { useContext } from "react";
import Button from "./UI/Button.tsx";
import { TimerContext, useTimersContext } from "../stores/timers-context.tsx";

export default function Header() {
  /**
   * Type of timersCtx is TimerContextValue | null, but we know that since we provided a value in timers-conatext.tsx,this
   * will never be null. there are 2 ways to typescript about this -
   *  a) use !
   *      const timersCtx = useContext(TimerContext)!;
   * b) add and if condition and throa error in code
   *
   * But doing this whereever we use this context is not clean way, so we will use hook for this
   */
  //const timersCtx = useContext(TimerContext)!;
  //if (timersCtx == null) throw new Error("Something is wrong");

  const timerCtx = useTimersContext();

  const toggleTimers = () => {
    if (timerCtx.isRunning) timerCtx.startTimers();
    else timerCtx.stopTimers();
  };
  return (
    <header>
      <h1>ReactTimer</h1>

      <Button onClick={toggleTimers}>
        {timerCtx.isRunning ? "Stop" : "Start"} Timers
      </Button>
    </header>
  );
}
