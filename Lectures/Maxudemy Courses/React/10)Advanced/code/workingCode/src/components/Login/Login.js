import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state, action) => {
  if(action.type === 'USER_INPUT') {
    return {value: action.val, isValid: action.val.includes('@')};
  }
  if(action.type === 'INPUT_BLUR') {
    return {value: state.value, isValid: state.value.includes('@')};
  }
  return {value: '', isValid: false};
};

const passwordReducer = (state,action) => {
  if(action.type === 'USER_INPUT') {
    return {value: action.val, isValid: action.val.trim().length > 6};
  }
  if(action.type === 'INPUT_BLUR') {
    return {value: state.value, isValid: state.value.trim().length > 6};
  }
  return {value: '', isValid: false};
}

const Login = (props) => {
  /**
   * @commneted to use useReducer hook
   */
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  //const [enteredPassword, setEnteredPassword] = useState('');
  //const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  /**
   * @Desc Default state value is used first time. when reducer is called, component function is executed again,
   * there value returned by reducer will used to intialize the state.
   */
  const [emailState, dispatchEmail] = useReducer(emailReducer, {value: '', isValid: true});
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value: '', isValid:true});

  /**
   * @Desc Without debouncing - Cooneted after switching to debouncing solution
   */
  
  // useEffect(() => {
  //   setFormIsValid(enteredEmail.includes('@') && enteredPassword.trim().length > 6);
  // }, [enteredEmail, enteredPassword]);

  /**
   * @Desc Debouncing with cleanup function
   * here we are still refering to other states to update our state but this effect will run again when 
   * these states update, so ultimately it will run with latest values. so this is okay way of updating
   * a state based on other state
   */

  useEffect(() => {
    console.log("ececuting effect");
    const identifier = setTimeout(() =>{
      setFormIsValid(emailState.isValid && passwordState.isValid);
    }, 500);

    return (() => clearTimeout(identifier));
    
  }, [emailState.isValid, passwordState.isValid]);


  const emailChangeHandler = (event) => {
    //setEnteredEmail(event.target.value);
    

    dispatchEmail({type: 'USER_INPUT', val: event.target.value});
    
     /**
     * @Desc Here we cannot use emailState.isValid, because updated emailstate is not abalible yet.
     * actuon is dispatched, reducer is executed, but new state will be avalible when component function
     * is re executed and state is initiated from the useReducer hook. there default value wnt be used,
     * value returned by reducer will be used for initialization.
     */
    // setFormIsValid(
    //   event.target.value.includes('@') && passwordState.isValid
    // );
    
  };

  const passwordChangeHandler = (event) => {
    //setEnteredPassword(event.target.value);
    dispatchPassword({type: 'USER_INPUT', val: event.target.value});
    // setFormIsValid(
    //   event.target.value.trim().length > 6 && emailState.isValid
    // );
  };

  const validateEmailHandler = () => {
    //setEmailIsValid(emailState.isValid);
    dispatchEmail({type: 'INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
    //setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({type: 'INPUT_BLUR'})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
