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
  const classname = `hello ${undefined}`;
  return (
    <>
      <h1 className={classname}>Hello</h1>
      <p>Hello</p>
    </>
  );
}

export default App;
