/**
 * Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return
 * React elements describing what should appear on the screen.
 */

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

/**
 * Class Component
 */

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

/**
 * Rendering a Component
 *
 * Previously, we only encountered React elements that represent DOM tags:
 */
const element = <div />;

/**
 * However, elements can also represent user-defined components:
 */

const element2 = <Welcome name="Sara" />;

/**
 *
 * Note: Always start component names with a capital letter.
 * We recommend naming props from the component’s own point of view rather than the context in which it is being used.
 *
 * Composing Components - Components can refer to other components in their output.This lets us use the same component abstraction
 * for any level of detail. A button, a form, a dialog, a screen: in React apps, all those are commonly expressed as components.
 *
 *Extracting Components - here we saw a exaample of dividing a component into smaller components.
 *
 *
 * Props are Read-Only - Whether you declare a component as a function or a class, it must never modify its own props.
 * Such functions are called “pure” because they do not attempt to change their inputs, and always return the same
 * result for the same inputs.
 *
 * All React components must act like pure functions with respect to their props.
 *
 */
