import { createSlice } from '@reduxjs/toolkit';


const initialCounterState = { counter: 0, showCounter: true };


/**
 * @Desc    createReducer is also there which allows us to create reducer with certain enhancements, but createSlice is 
    more powerful, and it will simplyfy couple of aspects in one go.it wants object as argument, here we are preparing global 
    slice of our state.when we have diffrent states,that are not related then we can create diffrent state slices, potentially 
    in different files, to have more maintainable code. here we have only one slice, as counter and showCounter belong togather.
    
    every slice needs a name, identifier you could say.
    then we give it intialState
    then we need to add reducer, reducers is a object a map, you could say, that this slice needs. in this objet we can add methods,
    any names of your choice, though these names will become important later. here we added 4 methods because we had 4 diffrent if
    cases in our reducer before.these methods receive current state and action, and will be called by automatically by redux.

    but here we do not need action because these methods will be automatically called depending which action was triggered. now we
    do not need to write if checks in reducer.in these methods we are allowed to modify the state. this is because redux toolkit 
    internally uses package called imur whcih detects code lke this and clones the existing state, create new state object, keep 
    all state that we are not editing and override the state,which we are editing in immutable way.

 */
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            //state.counter = state.counter + action.amount;
            /**
             * @Desc Data passed to action creators can be accessed via payload property
             */
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

export const counterActions = counterSlice.actions;
export default counterSlice;
