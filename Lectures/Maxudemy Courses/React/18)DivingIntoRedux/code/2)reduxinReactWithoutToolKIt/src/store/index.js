import {createStore} from 'redux';

const intialState = {counter: 0, showCounter: true};


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
const counterReducer = (state = intialState, action) => {
    if(action.type === 'increment') {
        return {
            ...state,
            counter: state.counter +1,
            
        };
    }

    if(action.type === 'increase') {
        return {
            ...state,
            counter: state.counter + action.amount,
           
        };
    }
    
    if(action.type === 'decrement') {
        return {
            ...state,
            counter: state.counter -1,
        }
    }
    
    if(action.type === 'toggle') {
        return {
            ...state,
            showCounter: !state.showCounter,
        }
    }
    return state;
};

const store = createStore(counterReducer);

export default store;