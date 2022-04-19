import {Component} from 'react';
import {useSelector,useDispatch, connect} from 'react-redux';

import classes from './Counter.module.css';


// const Counter = () => {
//   const dispatch = useDispatch();
//   const counter = useSelector(state => state.counter);
//   const show = useSelector(state => state.showCounter);

//   const incrementHandler = () => {
//     dispatch({type: 'increment'});
//   }

//   const increaseHandler = () => {
//     dispatch({type: 'increase', amount: 5});
//   }

//   const decrementHandler = () => {
//     dispatch({type: 'decrement'});
//   }

//   const toggleCounterHandler = () => {
//     dispatch({type: 'toggle'});
//   }
//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       {show && (<div className={classes.value}>{counter}</div>)}
//       <div>
//         <button onClick = {incrementHandler}>Increment</button>
//         <button onClick = {increaseHandler}>Increment by 5</button>
//         <button onClick = {decrementHandler}>Decrement</button>
//       </div>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

// export default Counter;

class Counter extends Component {
  incrementHandler() {
    this.props.increment();
  }
  decrementHandler() {
    this.props.decrement();
  }
  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick = {this.incrementHandler.bind(this)}>Increment</button>
          <button onClick = {this.decrementHandler.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}



const mapStateToProps = state  => {
  return {
    counter: state.counter
  }
}

/**
 * @desc first argument is disptach function
 */
const mapDispatchTOProps = dispatch => {
  return {
    increment: () => dispatch({type: 'increment'}),
    decrement: () => dispatch({type: 'decrement'})
  }
}

/**
 * connect also needs params.
 * 1st params is function that maps redux state to props. argument to this is state and it returns a object. 
 *  properties of this returned object will be avalible on props inside component.
 * 
 * 2nd function is equivalent to useDispatch. it stores dispatch functions in props. it returns a object whose
 * keys will be avalible inside component as props.
 * 
 * also subscription to store is setup automatically while using connect component
 * 
 */
export default connect(mapStateToProps, mapDispatchTOProps)(Counter);
