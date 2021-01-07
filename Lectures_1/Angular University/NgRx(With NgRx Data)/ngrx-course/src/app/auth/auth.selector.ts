import {createSelector, createFeatureSelector} from '@ngrx/store';
import { AuthState } from './reducers';

/*  
A selector is plain mappig function with memory
*/

/* 
createSelector takes minimum 2 arguments. 
  a)we can pass some multiple mapping functions, that we can use to select diffrent parts of state.
    argument of mapping function is global application state, output is the slice of state that we need.
    we can pass as many mapping functions as we want
  b)Final argument is projector function.
    arguments to this function is slices of store state that we have calculated above using mapping functions.

    So this function is going to take here all the slices of state that we have selected using these mapping function
*/

/* export const isLoggedIn = createSelector(
  (state) => state["auth"],
  (auth) => !!auth.user
); */

/* 
Feature selector- It is simply going to select here whole feature state branch from our global applicataion state
selectAuthState is just a type safe version of mapping function, that we used above.it helps us to write type safe selectors

  createFeatureSelector takes only one argument which is name of property that we want to access in global state.
  we also provide one generic paramter which is type of state which we are getting back

  now we will get IDE suggestions in projector function, because it knows the type agument it receives
);
*/

export const selectAuthState = createFeatureSelector<AuthState>("auth");

export const isLoggedIn = createSelector(
  selectAuthState,
  (auth) => !!auth.user
);

/* 
selector is also a mapping function, so we are using it here as mapping function,
argument to projector function is result of applying isLoggedIn selector to the Store State

*/
export const isLoggedOut = createSelector(
    isLoggedIn,
    loggedIn => !loggedIn
);