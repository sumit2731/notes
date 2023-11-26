import { ReactNode, createContext, useContext, useReducer } from "react";

export type Timer = {
  name: string;
  duration: number;
};

type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

const initialState: TimersState = {
  isRunning: true,
  timers: [],
};

type TimerContextValue = TimersState & {
  addTimer: (timerData: Timer) => void;
  startTimers: () => void;
  stopTimers: () => void;
};

/**
 * null is added in union to allow default value of null
 */
export const TimersContext = createContext<TimerContextValue | null>(null);

/**
 * This is the hook because we do want to add this null check where ever we use this
 */
export const useTimersContext = () => {
  const timersCtx = useContext(TimersContext);

  if (timersCtx == null) {
    throw new Error("TimersContext is null - that should not be the case!");
  }
  return timersCtx;
};

type TimersContextProviderProps = {
  children: ReactNode;
};

type StartTimersAction = {
  type: "START_TIMERS";
};

type StopTimersAction = {
  type: "STOP_TIMERS";
};

type AddTimerAction = {
  type: "ADD_TIMER";
  payload: Timer;
};

/**
 * Instead of using this type use descriminated Union type
 */
// type Action = {
//   type: "ADD_TIMER" | "START_TIMERS" | "STOP_TIMERS";
// };

type Action = StartTimersAction | StopTimersAction | AddTimerAction;

/**
 * Type that we give to action here determines the what action can we dispatch using dispatch
 */
function timersReducer(state: TimersState, action: Action): TimersState {
  if (action.type == "START_TIMERS") {
    return {
      ...state,
      isRunning: true,
    };
  }
  if (action.type == "STOP_TIMERS") {
    return {
      ...state,
      isRunning: false,
    };
  }
  if (action.type == "ADD_TIMER") {
    return {
      ...state,
      timers: [...state.timers, action.payload],
    };
  }
  return { ...state };
}

export default function TimersContextProvider({
  children,
}: TimersContextProviderProps) {
  /**
   * One way of managing the context is to useState Hook. so will manage state here and the use setter functions to manage that state
   *
   * but here we will useReducer hook. To see how that works with typescript
   *
   * First argument is reducer function second one is initialState.
   * 
   * reducer is a function that's then automatically executed by React whenever we dispatch a new action and we'll be able to dispatch such
   * an action with help of the return value of useReducer.Because useReducer does return a value,to be precise, it returns an array which
   * we can therefore destructure with array destructuring,which has exactly two elements.The first element is the current state managed by
   * usereducer.

    So we could name this timersState.The second element is a dispatch function which we can therefore call dispatch which allows us to 
    trigger a state change.
   */
  const [timerState, dispatch] = useReducer(timersReducer, initialState);
  const ctx: TimerContextValue = {
    timers: timerState.timers,
    isRunning: timerState.isRunning,
    addTimer(timerData) {
      dispatch({ type: "ADD_TIMER", payload: timerData });
    },
    startTimers() {
      dispatch({ type: "START_TIMERS" });
    },
    stopTimers() {
      dispatch({ type: "STOP_TIMERS" });
    },
  };
  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
}
