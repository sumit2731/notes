/**
 *@using If Statement
 * There's no rule that says that our JSX has to be part of the return statement. We can absolutely
 * assign chunks of JSX to a variable, anywhere within our component definition!
 *
 * @React ignores the @undefined values
 */

function Friend({ name, isOnline }) {
  let prefix;

  if (isOnline) {
    prefix = <div className="green-dot" />;
  }

  /**
   * In the code above, prefix will either be assigned to a React element, or it won't be
   * defined at all. This works because React ignores undefined values.
   */
  return (
    <li className="friend">
      {prefix}
      {name}
    </li>
  );
}

export default Friend;

/**
 * @Undefined attributes does not appear in DOM
 * If any attribute is having value of undefined, then that element will not come in final DOM
 * Similary if we try to render undefined as a child it will not come in rendered DOM
 */

function Greeting() {
  let someClass;

  return <div className={someClass}>Hello World</div>;
}

//final mark up in browser

<div>Hello World</div>;
