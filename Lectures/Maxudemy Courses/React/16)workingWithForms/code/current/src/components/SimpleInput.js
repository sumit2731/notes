import {useEffect, useState} from 'react';
import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError, 
    valueChangeHandler:nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(value => (value.trim() !== ''));
  
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError, 
    valueChangeHandler:emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(value => value && value.indexOf('@') !== -1);
  
  // const [enteredName , setEnteredName] = useState('');
  // const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  //const [enteredEmail, setEnteredEmail] = useState('');
  //const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  
  
  // const enteredNameIsValid  = enteredName.trim() !== '';
  // const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  
  //const enteredEmailIsValid = enteredEmail && enteredEmail.indexOf('@') !== -1;
  //const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;
  
  let formIsValid = false;
  /**
   * @Desc here check all inputs, in this case we have only one input
   */
  if(enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  } else {
    formIsValid = false;
  }

  /**
   * @Desc we validate validity fo form in useEffect as value of this state depends upon value of other state
   *  here dependecies will be all inputs in form , here we have only one.
   * 
   * @Desc This code is commneted out because we do not need to manage a separate state, we can just use a varibel for this.
   */
  // useEffect(() => {
  //   if(enteredNameIsValid) {
  //     setFormIsValid(true);
  //   } else {
  //     setFormIsValid(false);
  //   }
  // },[enteredNameIsValid]);
  
  
  // const nameInputChnageHandler = event => {
  //   setEnteredName(event.target.value);
  // }

  // const emailInputChangeHandler = event => {
  //   setEnteredEmail(event.target.value);
  // };

  // const nameInputBlurHandler = (event) => {
  //   setEnteredNameTouched(true);
  // };

  // const emailInputBlurHandler = (event) => {
  //   setEnteredEmailTouched(true);
  // }

  const formSubmissionHandler = event => {
    event.preventDefault();
    //setEnteredNameTouched(true);
    if(!enteredNameIsValid || !enteredEmailIsValid) {
      return ;
    }
    
    // setEnteredName('');
    // setEnteredNameTouched(false);

    resetNameInput();
    
    // setEnteredEmail('');
    // setEnteredEmailTouched(false);

    resetEmailInput();
    console.log(enteredName);
  }
  
  const nameInputClasses = (nameInputHasError) ? `form-control invalid` : `form-control`;
  const emailInputClasses = (emailInputHasError) ? `form-control invalid` : `form-control`;
  return (
    <form onSubmit = {formSubmissionHandler}>
      
      <div className= {nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange = {nameChangeHandler} onBlur = {nameBlurHandler} value ={enteredName} />
        {nameInputHasError && <p className ="error-text" >Name must not be empty</p>}
      </div>

      <div className= {emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input type='email' id='email' onChange = {emailChangeHandler} onBlur = {emailBlurHandler} value = {enteredEmail} />
        {emailInputHasError && <p className ="error-text" >Please Enter a Valid Email</p>}
      </div>
      
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
