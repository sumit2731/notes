import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const hiddenStyles = {
  display: "inline-block",
  position: "absolute",
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  height: 1,
  width: 1,
  margin: -1,
  padding: 0,
  border: 0,
};

const VisuallyHidden = ({ children }) => {
  return <span style={hiddenStyles}>{children}</span>;
};
function App() {
  // No default value:
  const [username, setUsername] = useState();

  return (
    <form>
      <label htmlFor="username">Select a username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
    </form>
  );
}

export default App;
