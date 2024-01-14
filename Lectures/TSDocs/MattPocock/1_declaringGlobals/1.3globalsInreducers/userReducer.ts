import { GlobalReducer } from "./types";

declare global {
  interface GlobalReducerEvent {
    LOG_IN: {};
  }
}

export const userReducer: GlobalReducer<{ id: string }> = (state, event) => {
  console.log(event.id);
  console.log(event.type);
  if (event.type == "ADD_TODO") {
  }
  return state;
};
