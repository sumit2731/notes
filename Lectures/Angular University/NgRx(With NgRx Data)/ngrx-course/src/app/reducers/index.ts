import { routerReducer } from '@ngrx/router-store';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

export interface AppState {

}
/*
This is key value map.keys are state properties in store. value of that key is reducer of that proeprty
*/
export const reducers: ActionReducerMap<AppState> = {
  // router: routerReducer
};

/* 
Meta reducer is like plain reducer.
arguments are reducer which will be invoked after metareducers. genric parateter is state of store.
where we just want to log action and state so we give it as any. output of function is also a reducer 
function. now the return value of this reducer function(that we return is) is return value of reducer that
will be called after that.
*/
export function logger(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    console.log("State Before " , state);
    console.log("Action Dispatch " ,action);
    return reducer(state,action);
  }
}


// export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [logger] : [];
export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
