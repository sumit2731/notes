/**
 * DownSide with using 'if"
 *  we need to pull the logic up, away from the rest of the markup. While this is perfectly
 *  valid, it can make it harder to understand how a component is structured, especially in
 *  larger and more-complex components. We'd have to hop all over the place to understand
 * what gets returned!
 * 
 * see js primer about && to understand how this works
 *
 * Fortunately, there's a way for us to embed if logic right in our JSX: using the && operator.
 *
 * In JavaScript, && is a control flow operator. It works quite a bit like if/else, except it's 
    an expression instead of a statement.
 */

function Friend({ name, isOnline }) {
  return (
    <li className="friend">
      {isOnline && <div className="green-dot" />}
      {name}
    </li>
  );
}

function App() {
  return (
    <ul className="friend-list">
      <Friend name="Andrew" isOnline={false} />
      <Friend name="Beatrice" isOnline={true} />
      <Friend name="Chen" isOnline={true} />
    </ul>
  );
}

export default App;

/**
 * To help us understand what's actually happening here, let's take a look at the exact same
 * logic, but expressed using if/else:
 *
 * The && operator is said to be a “control flow” operator because, like if/else, it will always
 * result in one of two paths being taken.
 */

function Friend({ name, isOnline }) {
  let prefix;
  if (isOnline) {
    prefix = <div className="green-dot" />;
  } else {
    prefix = isOnline;
  }

  return (
    <li className="friend">
      {prefix}
      {name}
    </li>
  );
}

/**
 * Gotcha with zero value.
 *
 * a)The && operator doesn't return true or false. It returns either the left-hand side or the
 *  right-hand side. So, when our list is empty, this expression evaluates to 0.
 * b) React will render any number you give it, even zero!
 *
 * React ignores all false values except 0 and NaN.
 *
 * It ignores - false,undefined, null,''
 *
 * react renders zero because we need to render zero some times
 */

/**
 * Solution to this use - boolean values with &&
 *
 * make sure that the left-hand side of && always evaluates to a boolean value, either true
 *  or false.
 */
