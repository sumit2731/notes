/**
 * In html value attributes sets the initial value of form.so you can change the value.
 *
 * In react if you do not give value prop to input, then your input will be uncontrolled,
 *  react will not mess with it. you can type something in it, across re-renders it is going
 *  to persist.
 *
 *
 * Things change if you give value to value prop of input, you cannot change the value in UI of form
 *  to some other value. value is locked.but if changes the value of state, that value changes.if you
 *  add a event handler and log currentTarget.value in console log you see updated value, that means
 * value is being updated for short time and react updates it back to match state value.
 *
 *
 * how to change the value? update the state, in event handler.now updated value also comes on UI.
 * this is 2 way data binding.
 *
 */

/**
 * 2 way Data binding with form (you also update state when value of form changes)
 */

import React from "react";

function SearchForm() {
  const [searchTerm, setSearchTerm] = React.useState("cats");

  return (
    <>
      <form>
        <label htmlFor="search-input">Search:</label>
        <input
          type="text"
          id="search-input"
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </form>
      <p>Search term: {searchTerm}</p>
    </>
  );
}

export default SearchForm;

/**
 * In html value attribute is used to give initial value to input but in react. once you set value using value
 * prop. you cannot change only way to change the value is to change the value prop
 *
 * for example only way to change the value is to change the value of searchTerm.
 * i. to make it state and then update the state
 */

<input type="text" id="search-input" value={searchTerm} />;

/**
 * but we add a event listner to this input in console we see that on console we get
 * updated value, so it looks like input value changes then react changes it again to
 * match its updated value
 */

<input
  type="text"
  id="search-input"
  value={searchTerm}
  onChange={(event) => console.log(event.target.value)}
/>;

/**
 * but in order to complete its 2 way data binding we can update the state in event handler.
 * so now changed value in input is persisted
 */

<input
  type="text"
  id="search-input"
  value={searchTerm}
  onChange={(event) => setSearchTerm(event.target.value)}
/>;

/**
 * Note about SyntheticEvent
 *
 * why needed?
 * a)Improve dev experience
 * b)It removes inconsistency between browsers
 * c)some performance benefit that was removed (event.Pooling or event.Persist)
 *
 * realEvent - event.nativeEvent
 */

/**
 * @ControlledValue - it means that React is managing the input.You provided a value prop, and
 *  value of prop is not undefined
 * @UncontrolledValue - if we don't set value, the input is an uncontrolled input. This means
 *  that React doesn't do any management.
 *
 * @ControlledVsUnControlled - You should not switch between these.Switch happens when initial value
 *  is undefined but later some other value is assigned.When we set value to undefined, it's the 
 *  same as not setting it at all. React will treat the input as an uncontrolled input.When the user
 *  starts typing in the input, the onChange event updates the value of username from undefined to a
 *  string. And so, React flips the element to a controlled input, and raises the warning.


 *
 * When we set the value prop on a form input, we tell React that it should be a controlled input.
 */

/**
 * @UncontrolledAppraoch- Using FormData.Useful when form data is only required when user submits the
 *  form.
 *
 */
