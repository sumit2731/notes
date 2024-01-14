import { GlobalReducer } from "./types";

declare global {
  interface GlobalReducerEvent {
    ADD_TODO: {
      id: string;
    };
  }
}

export const todosReducer: GlobalReducer<{ todos: { id: string }[] }> = (
  state,
  event
) => {
  console.log(event.id);
  console.log(event.type);
  if (event.type == "ADD_TODO") {
  }
  return state;
};
