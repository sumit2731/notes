const redux = require('redux');

/**
 * @Desc Reducer should be a Pure function i.e for same inputs we get same output 
 * and there should be no side-effect inside of function, so no sending of http call, write or reading something from local storage.
 * Instead, a reducer should really just be a function that takes the given inputs,which are provided by Redux and then produces 
 * the expected output, a new state object.
 * 
 * @Return reducer function should always always return a new state object which replaces the existing state
 * 
 * Reducer functions in general, are just a general concept.Reducer functions are functions, which takes some input,and then 
 * transform that input,they reduce it,for example they can reduce a list of numbers to the sum of that number and that's just
 * one example.But they in general transform, inputs and spit out a new output a new result.So that's a general programming 
 * concept,which use reducer, react hook hook uses and which this reducer function Redux will use also uses.
 */
const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
        }
    }
    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1
        }
    }
    return state;
}


/**
 * @Desc Here we connect store with its reducer. redux calls this reducer whenever action is dispatched.
 * also when file is executed first time a intil action is kind of dispatched by redux. but subscriber is 
 * not called. for that initial action, we have given defaul value to state.
 */
const store = redux.createStore(counterReducer);

/**
 * @Desc Printing state for first initial action dispatched by redux
 */
console.log(store.getState());

const counterSubscriber = () => {
    /**
     * @Desc Gives latest state snapshot after it was updated. this subscription function(counterSubscription)
     *  will soon triggered whenever state chnages and when it is triggered we can get the latest state after
     * it was changed with getState method
     */
    const latestState = store.getState();
    console.log(latestState);
}

/**
 * @Desc counterSubscriber is executed whenever store is updated
 */
store.subscribe(counterSubscriber);


store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });

