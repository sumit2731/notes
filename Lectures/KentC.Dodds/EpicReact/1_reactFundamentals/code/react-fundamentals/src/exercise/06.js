// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  //Step 1 - Getting the value from form and showing alert to user
  //Step 2 - Getting the value form input using ref
  //Step 3 - Adding a validation on form input and showing error message to user and disabling the submit button
  //step 4 - Implemnting control input field in form

  const usernameInputRef = React.useRef(null);
  const submitHandler = (event) => {
    event.preventDefault();
    //diffrent ways of getting onput value from form
    //const value = event.target[0].value; // diffrent fields of form are avalible as indexed properties on form
    //const value = event.target.elements[0].value;
    //const value = event.target.elements.usernameInput.value;
    //const value = usernameInputRef.current.value;

    //now we are getting inputvalue directly from state
    
    onSubmitUsername(username);
  }

  //const [error, setError] = React.useState(false);
  const [username, setUsername] = React.useState('');
  const handleChange =(event) => {
    const {value} = event.target;
    setUsername(value.toLowerCase());
    //setError(isLowerCase ? null : 'UserName must be lower chars');
  }
  return (
    <form onSubmit={submitHandler} >
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input ref={usernameInputRef} id="usernameInput" type="text" value ={username} onChange={handleChange} />
        {/* <div style={{color: 'red'}}>{error}</div> */}
      </div>
     {/*  <button disabled={error} type="submit">Submit</button> */}
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
