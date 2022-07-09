/**
 * @Desc Ways of conditional rendering
 */

/**
 * Way 1 - using if condition
 */

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
// Try changing to isLoggedIn={true}:
root.render(<Greeting isLoggedIn={false} />);

/**
 * Way 2 - Element variables
 * You can use variables to store elements. This can help you conditionally render a part of the component while the rest of
 *  the output doesn’t change.
 */

function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

const root2 = ReactDOM.createRoot(document.getElementById("root"));
root2.render(<LoginControl />);

/**
 * Way 3 - Inline If with Logical && Operator
 */

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 && (
        <h2>You have {unreadMessages.length} unread messages.</h2>
      )}
    </div>
  );
}

const messages = ["React", "Re: React", "Re:Re: React"];

const root4 = ReactDOM.createRoot(document.getElementById("root"));
root4.render(<Mailbox unreadMessages={messages} />);

/**
 * Note that returning a falsy expression will still cause the element after && to be skipped but will return
 * the falsy expression. In the example below, <div>0</div> will be returned by the render method.
 */

render() {
    const count = 0;
    return (
      <div>
        {count && <h1>Messages: {count}</h1>}
      </div>
    );
}


/**
 * Way 4 - Inline If-Else with Conditional Operator
 */

 render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <div>
        {isLoggedIn
          ? <LogoutButton onClick={this.handleLogoutClick} />
          : <LoginButton onClick={this.handleLoginClick} />
        }
      </div>
    );
  }


/**
 * Also remember that whenever conditions become too complex, it might be a good time to extract a component.
 */


/**
 * Preventing Component from Rendering
 * 
 * In rare cases you might want a component to hide itself even though it was rendered by another component. 
 * To do this return null instead of its render output.
 * 
 * Returning null from a component’s render method does not affect the firing of the component’s lifecycle 
 * methods. For instance componentDidUpdate will still be called.
 */

 function WarningBanner(props) {
    if (!props.warn) {
      return null;
    }
  
    return (
      <div className="warning">
        Warning!
      </div>
    );
  }
  
  class Page extends React.Component {
    constructor(props) {
      super(props);
      this.state = {showWarning: true};
      this.handleToggleClick = this.handleToggleClick.bind(this);
    }
  
    handleToggleClick() {
      this.setState(state => ({
        showWarning: !state.showWarning
      }));
    }
  
    render() {
      return (
        <div>
          <WarningBanner warn={this.state.showWarning} />
          <button onClick={this.handleToggleClick}>
            {this.state.showWarning ? 'Hide' : 'Show'}
          </button>
        </div>
      );
    }
  }
  
  const root6 = ReactDOM.createRoot(document.getElementById('root')); 
  root6.render(<Page />);