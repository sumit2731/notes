import {
  AnyAction,
  Dispatch,
  ThunkDispatch,
  configureStore,
} from "@reduxjs/toolkit";
import { cartSlice, type CartState } from "./cart-slice";

/**
 * with Redux, you don't really create that store by telling it what its initial state should be;
  instead, you tell it what its reducer is,and Redux will then infer the type of data that it will
  manage from that reducer,
 */
export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

/**
 * This type should in the end describe how dispatching will work, or which kind of data will be involved
  *with dispatching in your application.

  And here this will simply give us a type that has more information regarding which kind of actions
  can be dispatched here. You could say.

  useDispatch returns this type i.e  const dispatch = useDispatch(), so this is type of dispatch.
  both dispatch and ThunkDispatch are used to define typeof dispatch
 */

let rootState = store.getState();
export type AppDispatch = typeof store.dispatch;
console.log(store.dispatch);

/**
 * Above type gives this type only
 */
type AppDispatch2 = ThunkDispatch<
  {
    cart: CartState;
  },
  undefined,
  AnyAction
> &
  Dispatch<AnyAction>;

export type RootState = ReturnType<typeof store.getState>;
