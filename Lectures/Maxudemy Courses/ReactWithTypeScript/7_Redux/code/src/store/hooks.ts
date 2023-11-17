import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";

import { type AppDispatch, type RootState } from "./store";

/**
 * You dnt need to re-create these hooks for eachof your store slices. you only create them once- hence you might
 * also wabt to call them useAppDispatch and useAppSelector
 */

type DispatchFunction = () => AppDispatch;

export const useCartDispatch: DispatchFunction = useDispatch;

export const useCartSelector: TypedUseSelectorHook<RootState> = useSelector;
