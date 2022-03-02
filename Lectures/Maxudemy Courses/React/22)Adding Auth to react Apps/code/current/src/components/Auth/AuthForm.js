import {useHistory} from 'react-router-dom';

import { useState, useRef, useContext } from 'react';
import AuthContext from '../../store/auth-context';


import classes from './AuthForm.module.css';

const AuthForm = () => {
  const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const authCtx = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmailValue = emailInputRef.current.value;
    const enteredPasswordValue = passwordInputRef.current.value;
    setIsLoading(true);
    let url;
    if(isLogin) {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAbBAdjFZp_x8YfXF-IwpRdA2HuIR640zQ';
    }
    else {
      url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAbBAdjFZp_x8YfXF-IwpRdA2HuIR640zQ";
    }
    fetch(url,{
      method: 'POST',
      body: JSON.stringify({
        email:enteredEmailValue,
        password: enteredPasswordValue,
        returnSecureToken: true
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      setIsLoading(false);
      if(res.ok) {
        return res.json();
      }
      else {
        return res.json().then(data => {
          //show error modal
          let errorMessage = data.error.message;
          // if(data && data.error && data.error.message) {
          //   errorMessage = data.error.message;
          // }
          throw new Error(errorMessage);
        })
      }
    })
    .then(data => {
      //this is time in milliseconds
      const expirationTime = new Date(new Date().getTime() + (+data.expiresIn * 1000));
      authCtx.login(data.idToken, expirationTime.toISOString());
      history.replace('/');
    })
    .catch(err => {
      alert(err.message);
    });

  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit = {submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref ={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordInputRef} />
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
          {isLoading && <p>Sending Request....</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
