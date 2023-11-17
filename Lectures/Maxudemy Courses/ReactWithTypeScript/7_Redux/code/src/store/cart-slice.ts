import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type CartItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
};

export type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    /**
     * state if of type WritableDraft <CartState>, which is mutable version of state
     *
     * type of action is
     *  {
     *      type: string;
     *      payload: any
     *  }
     *
     * while we get this base type we should be more specififc of action type and assign our own types here.
     * and you should use this type whenever you are dealing with an action that carries a payload, so that we can
     * give sopecififc type to payload instead of default any type.if action does not have any payload then you dnt need
     * this type
     */
    addToCart(
      state,
      action: PayloadAction<{ id: string; title: string; price: number }>
    ) {
      const itemIndex = state.items.findIndex(
        (item) => item.id == action.payload.id
      );
      if (itemIndex >= 0) state.items[itemIndex].quantity++;
      else state.items.push({ ...action.payload, quantity: 1 });
    },
    removeFromCart(state, action: PayloadAction<string>) {
      const itemIndex = state.items.findIndex(
        (item) => item.id == action.payload
      );
      if (state.items[itemIndex].quantity === 1)
        state.items.splice(itemIndex, 1);
      else state.items[itemIndex].quantity--;
    },
  },
});

/**
 * You don't have to create custom action types. As we did it earlier in the course with the useReducer
 * function.Instead, Redux toolkit creates those action types and action objects for you.All you have to do to access them
    is use this cartSlice here, and then this actions property.And that will then give you an object which you can de-structure.

    Where you got one function for every reducer.And it has the same name as your reducer methods.
    But these functions here will actually not directly invoke reducer functions.Instead, they will create action objects which 
    can then be sent to Redux, and will trigger the corrosponding reducer.

    Actions are dispatched in Product.tsx
 */

export const { addToCart, removeFromCart } = cartSlice.actions;
