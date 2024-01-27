import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const daysUntilSantaReturns = 4;

  let someClass;
  let element;
  const element2: JSX.Element = <div className={someClass}>Hello World</div>;

  console.log(element);

  return (
    <>
      {/* <div>
        <strong>Days until Santa returns:</strong> {daysUntilSantaReturns}
      </div>
      <div>
        <strong>Days until Santa returns:</strong>
        {daysUntilSantaReturns}
      </div> */}
      <h1>Hello</h1>
      <ul>
        <li>false: {false}</li>
        <li>undefined: {undefined}</li>
        <li>null: {null}</li>
        <li>Empty string: {""}</li>
        <li>Zero: {0}</li>
        <li>NaN: {NaN}</li>
      </ul>
    </>
  );
}

export default App;
