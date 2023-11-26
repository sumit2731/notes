import { useTimersContext } from "../stores/timers-context";
import Timer from "./Timer";

export default function Timers() {
  const timersCtx = useTimersContext();
  const timers = timersCtx.timers;

  return (
    <ul>
      {timers.map((timer) => (
        <li key={timer.name}>
          <Timer {...timer}></Timer>
        </li>
      ))}
    </ul>
  );
}
