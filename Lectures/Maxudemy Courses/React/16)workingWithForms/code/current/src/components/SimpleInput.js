import {useEffect, useState} from 'react';

const SimpleInput = (props) => {
  const [enteredName , setEnteredName] = useState('');
  //const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  //const [formIsValid, setFormIsValid] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  
  
  const enteredNameIsValid  = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  
  const enteredEmailIsValid = enteredEmail && enteredEmail.indexOf('@') !== -1;
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;
  
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
  
  const nameInputChnageHandler = event => {
    setEnteredName(event.target.value);
    // if(event.target.value.trim() !== '') {
    //   setEnteredNameIsValid(true);
    // }
  }

  const emailInputChangeHandler = event => {
    setEnteredEmail(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
    // if(enteredName.trim() === '') {
    //   setEnteredNameIsValid(false);
    // }
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  }

  const formSubmissionHandler = event => {
    event.preventDefault();
    setEnteredNameTouched(true);
    if(!enteredNameIsValid) {
      return ;
    }
    
    setEnteredName('');
    setEnteredNameTouched(false);
    
    setEnteredEmail('');
    setEnteredEmailTouched(false);
    console.log(enteredName);
  }
  
  const nameInputClasses = (nameInputIsInvalid) ? `form-control invalid` : `form-control`;
  const emailInputClasses = (emailInputIsInvalid) ? `form-control invalid` : `form-control`;
  return (
    <form onSubmit = {formSubmissionHandler}>
      
      <div className= {nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange = {nameInputChnageHandler} onBlur = {nameInputBlurHandler} value ={enteredName} />
        {nameInputIsInvalid && <p className ="error-text" >Name must not be empty</p>}
      </div>

      <div className= {emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input type='email' id='email' onChange = {emailInputChangeHandler} onBlur = {emailInputBlurHandler} value = {enteredEmail} />
        {emailInputIsInvalid && <p className ="error-text" >Please Enter a Valid Email</p>}
      </div>
      
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
