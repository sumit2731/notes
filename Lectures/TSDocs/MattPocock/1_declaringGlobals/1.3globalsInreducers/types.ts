/**
 * Video - https://www.youtube.com/watch?v=byCYSXVmH6E
 */

declare global {
  interface GlobalReducerEvent {}
}

export type GlobalReducer<TState> = (
  state: TState,
  event: {
    [EventType in keyof GlobalReducerEvent]: {
      type: EventType;
    } & GlobalReducerEvent[EventType];
  }[keyof GlobalReducerEvent]
) => TState;
