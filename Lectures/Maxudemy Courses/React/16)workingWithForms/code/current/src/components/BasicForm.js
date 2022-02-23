import useInput from '../hooks/use-input';

const isNotEmpty = value => value.trim() !== '';

const BasicForm = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    inputBlurHandler: nameBlurHandler,
    valueChangeHandler: nameChangeHandler,
    reset: resetNameInput
  }  = useInput(isNotEmpty);
  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    inputBlurHandler: lastNameBlurHandler,
    valueChangeHandler: lastNameChangeHandler,
    reset: resetLastNameInput
  }  = useInput(isNotEmpty);
  
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    inputBlurHandler: emailBlurHandler,
    valueChangeHandler: emailChangeHandler,
    reset: resetEmailInput
  }  = useInput(value => value.indexOf('@') !== -1);


  let formIsValid = false;

  if(enteredNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
    formIsValid = true
  }

  const formSubmissionHandler = event => {
    event.preventDefault();
    if(formIsValid) {
      return;
    }
    resetNameInput();
    resetLastNameInput();
    resetEmailInput();
    console.log(enteredName);
    console.log(enteredLastName);
    console.log(enteredEmail);
  };

  const nameInputClasses = `form-control ${nameInputHasError ? 'invalid': ''}`;
  const lastNameInputClasses = `form-control ${lastNameInputHasError ? 'invalid' : ''}`;
  const emailInputClasses = `form-control ${emailInputHasError ? 'invalid' : ''}`;

  return (
    <form onSubmit = {formSubmissionHandler}>
      <div className='control-group'>
        <div className= {nameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value = {enteredName} onBlur= {nameBlurHandler} onChange = {nameChangeHandler} />
          {nameInputHasError && <p className ="error-text">Name Should Not be Empty</p>}
        </div>
        <div className= {lastNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' value  = {enteredLastName} onChange = {lastNameChangeHandler} onBlur = {lastNameBlurHandler}/>
          {lastNameInputHasError && <p className ="error-text">LastName Should Not be Empty</p>}
        </div>
      </div>
      <div className= {emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' onBlur = {emailBlurHandler} onChange = {emailChangeHandler} value = {enteredEmail} />
      </div>
      <div className='form-actions'>
        <button disabled = {!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
