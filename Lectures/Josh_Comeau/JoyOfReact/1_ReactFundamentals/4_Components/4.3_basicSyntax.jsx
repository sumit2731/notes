/**
 *React components need to start with a Capital Letter.
 This is done to differentiate between built in html tags and custom components
 
 
 The convention is to use PascalCase?
 */

const heading = <h1>Hello!</h1>;
const greeting = <FriendlyGreeting />;
/**
 * These are compiled to -
 */

const heading2 = React.createElement("h1", null, "Hello!");
const greeting3 = React.createElement(FriendlyGreeting, null);
