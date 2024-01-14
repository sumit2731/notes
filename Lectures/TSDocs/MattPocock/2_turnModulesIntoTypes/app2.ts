//derive this type from constants defined in app.ts
export type Action = "ADD_TODO" | "DELETE_TODO" | "EDIT_TODO";

export type ActionModule = typeof import("./app");

const actionModule: ActionModule = {
  ADD_TODO_1: "ADD_TODO",
  DELETE_TODO_2: "DELETE_TODO",
  EDIT_TODO_3: "EDIT_TODO",
};

type Action2 = ActionModule[keyof ActionModule];
