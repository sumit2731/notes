/**
 * 2 way Data binding with form
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
 * realEvent - event.nativeEvent
 */

/**
 * @ControlledVsUnControlled - You should not switch between these
 *
 * When we set the value attribute on a form input, we tell React that it should be a controlled input.
 */

/**
 * @UncontrolledAppraoch- Uisng FormData
 */
