/**
 * React events are named using camelCase, rather than lowercase.
 *With JSX you pass a function as the event handler, rather than a string.
 *Another difference is that you cannot return false to prevent default behavior in React. 
 *You must call preventDefault explicitly

 html
 */

<button onclick="activateLasers()">Activate Lasers</button>;

//click

<button onClick={activateLasers}>Activate Lasers</button>;
/**
 * Here, e is a synthetic event. React defines these synthetic events according to the W3C spec, so you don’t need to worry about
 * cross-browser compatibility. React events do not work exactly the same as native events. See the SyntheticEvent reference
 * guide to learn more.
 */

function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("You clicked submit.");
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}

/**
 * @Desc how to bind class methods which are used as even handlers
 *
 * way1
 */

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}

/**
 * @desc Way 2
 * You can use public class fields syntax to correctly bind callbacks:
 */

class LoggingButton extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  handleClick = () => {
    console.log("this is:", this);
  };
  render() {
    return <button onClick={this.handleClick}>Click me</button>;
  }
}

/**
 * @dec way 3
 * use arraow function in callback. The problem with this syntax is that a different callback is created each time the LoggingButton
 * renders.
 *
 * In most cases, this is fine. However, if this callback is passed as a prop to lower components, those components might do an extra
 * re-rendering. We generally recommend binding in the constructor or using the class fields syntax, to avoid this sort of performance
 * problem.
 */

class LoggingButton extends React.Component {
  handleClick() {
    console.log("this is:", this);
  }

  render() {
    // This syntax ensures `this` is bound within handleClick
    return <button onClick={() => this.handleClick()}>Click me</button>;
  }
}

/**
 * @Desc Passing arguments to event handlers. first argument passed to callback is event
 *
 * so either of these will work
 *
 * <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
 * <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
 *
 * In both cases, the e argument representing the React event will be passed as a second argument after the ID.
 * With an arrow function, we have to pass it explicitly, but with bind any further arguments are automatically
 * forwarded.
 */
