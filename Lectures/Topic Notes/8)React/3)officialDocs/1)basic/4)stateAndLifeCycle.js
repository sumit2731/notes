/**
 * State - State is similar to props, but it is private and fully controlled by the component.
 * 
 * Adding Local State to a Class. Class components should always call the base constructor with props.
 */

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Clock />);



/**
 *  LifeCycle methods -
 *  a)componentDidMount
 *  b)componentWillUnmount
 * 
 * component schedules a UI update by calling setState() with an object containing the current time. Thanks to the setState() call,
 * React knows the state has changed, and calls the render() method again to learn what should be on the screen
 */

 class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  
  const root2 = ReactDOM.createRoot(document.getElementById('root'));
  root2.render(<Clock />);

/**
 * @Desc Using State Correctly
 *
 *  a)Do Not Modify State Directly
 */

// Wrong
this.state.comment = "Hello";

// Correct
this.setState({ comment: "Hello" });

/**
 * The only place where you can assign this.state is the constructor.

 */

 constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }


/**
 * State Updates May Be Asynchronous - React may batch multiple setState() calls into a single update for performance.
  *Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state.
 */

// Wrong
this.setState({
    counter: this.state.counter + this.props.increment,
});


/**
 * To fix it, use a second form of setState() that accepts a function rather than an object. That function will receive the previous state as the 
 * first argument, and the props at the time the update is applied as the second argument:
 */

// Correct
this.setState((state, props) => ({
    counter: state.counter + props.increment
}));


/**
 * State Updates are Merged
 * When you call setState(), React merges the object you provide into the current state.
 * 
 * For example, your state may contain several independent variables:
 */

 constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: []
    };
  }

/**
 * Then you can update them independently with separate setState() calls:
 * The merging is shallow, so this.setState({comments}) leaves this.state.posts intact, but completely replaces this.state.comments.
 */


  componentDidMount() {
    fetchPosts().then(response => {
      this.setState({
        posts: response.posts
      });
    });

    fetchComments().then(response => {
      this.setState({
        comments: response.comments
      });
    });
  }

/**
 * The Data Flows down - Unidirection Flow of Data
 * 
 * https://reactjs.org/docs/state-and-lifecycle.html#the-data-flows-down
 */
