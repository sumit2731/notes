import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Button from './Button';
import { useState } from 'react';

function App() {
  console.log("App function called");
  // const ContentImage = styled.img`
  //   display: block;
  //   margin-bottom: 8px;
  //   width: 100%;
  //   max-width: var(--max-width);
  // `;
  let buttonLabel = 'label1';
  const [appState,setAppState] = useState('state1');
  const clickHandler = () => {
    //console.log("App Button clicked");
    buttonLabel = Math.random();
    console.log(buttonLabel);
    setAppState(setAppState(new Date().getTime()));
  }
  return (
    <>
      <button onClick={clickHandler}>App Button</button>
      <Button label={new Date().getTime()}></Button>
    </>
  );
}

export default App;