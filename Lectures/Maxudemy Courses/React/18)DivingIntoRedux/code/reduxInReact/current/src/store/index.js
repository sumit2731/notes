import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const intialState = { counter: 0, showCounter: true };


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
    intialState,
    reducer: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.amount;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});


/**
 * @Desc we give state a default value, so that when reducer is executed for first time we have some default value
 *  of state
 * Reducer is called first time when file is executed
 * never mutate the existing state, always return a new state object which will replace the orignal state.
 * this also means you are mutating the orignal state -
 * 
 *  state.counter++; (here we rae mutating the orignal sttae)
 *  return {counter: state.counter}
 *      or
 *  state.counter++;
 *  return state;
 * 
 */

// const counterReducer = (state = intialState, action) => {
//     if(action.type === 'increment') {
//         return {
//             ...state,
//             counter: state.counter +1,

//         };
//     }

//     if(action.type === 'increase') {
//         return {
//             ...state,
//             counter: state.counter + action.amount,

//         };
//     }

//     if(action.type === 'decrement') {
//         return {
//             ...state,
//             counter: state.counter -1,
//         }
//     }

//     if(action.type === 'toggle') {
//         return {
//             ...state,
//             showCounter: !state.showCounter,
//         }
//     }
//     return state;
// };

//const store = createStore(counterReducer);

/**
 * @Desc here instead of manaully cretaing reducer , we used reducer create by createSlice. but if we have multiple state slices, then
 *  it will be a problem,because to create store we can pass only one reducer. but as we have multiple slices , we will have multiple
 *  reducers. in redux there this function called combineReducer, which will combine the reducers.
 * 
 * but we can ditch redux here and import configureStore from devtool kit, which will make it more convininent. configureStore like
 *  createStore creates a store, but it makes merging different reducers easier.lets use it.
 * 
 * it expect object as argument dnd there we have proerty called reducer. reducer and not reducers because redux wants one main 
 * reducer function which is responsible for global state.with configure store, value of reducer can be a single reducer like this -
 *  
        const store = configureStore({
            reducer: counterSlice.reducer
        });
 * here this single reducer will be used as global reducer.

    but if we have multiple says slicer then value of recuder key is again a object, in that object we can have any kes of our 
    choice. value these keys will be diffrent redcuer functions, so we will have map of reducers, and this map is then set as 
    value of main reducer and behind the scenes configure store will merge all those reducers into a big reducer.

        const store = configureStore({
            reducer: {counter: counterSlice.reducer}
        });
 */
//const store = createStore(counterSlice.reducer);
const store = configureStore({
    reducer: counterSlice.reducer
});

export default store;