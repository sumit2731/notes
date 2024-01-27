import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const daysUntilSantaReturns = 4;

  const element = <p id="hello">Hello World!</p>;

  console.log(element);

  return (
    <>
      <div>
        <strong>Days until Santa returns:</strong> {daysUntilSantaReturns}
      </div>
      <div>
        <strong>Days until Santa returns:</strong>
        {daysUntilSantaReturns}
      </div>
    </>
  );
}

export default App;
