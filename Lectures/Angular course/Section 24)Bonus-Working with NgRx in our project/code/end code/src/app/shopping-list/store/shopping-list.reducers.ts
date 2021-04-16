import {Action } from '@ngrx/store';
import * as ShoppingListActons from './shopping-lists.actions';
import {Ingredient} from '../../shared/ingredient.model';

const initialState = {
    ingredients:  [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ]
};

export function shoppingListReducer(state = initialState, action: ShoppingListActons.ShoppingListActions) {
    switch(action.type) {
          case ShoppingListActons.ADD_INGREDIENT:
          return {
              ...state,
              ingredients: [...state.ingredients, action.payload]
          }
          default:
          return state;
    }
    return state;
}