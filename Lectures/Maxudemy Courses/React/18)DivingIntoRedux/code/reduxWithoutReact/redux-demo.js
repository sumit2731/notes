const redux = require('redux');

/**
 * @Desc Pure function. for same inputs we get same output 
 * and there should be no sideeffect. no sending of http call, no fetching of something from local storage
 * no storing somehing into local storage
 * 
 * @return newState which replaces the existing state
 */
const counterReducer = (state = {counter: 0},action) => {
    if(action.type === 'increment') {
        return {
            counter: state.counter +1
        }
    }
    if(action.type === 'decrement') {
        return {
            counter: state.counter - 1
        }
    }
    return state;
}


/**
 * @Desc here we connect store with its reducer. redux calls this reducer whenever action is dispatched.
 * also when file is executed first ime a intil action is kind of dispatched by redux. but subscriber is 
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


store.dispatch({type: 'increment'});
store.dispatch({type: 'decrement'});

