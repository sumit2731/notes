import React,{useState,useCallback} from 'react';
import Button from './components/UI/Button/Button';

import './App.css';
import DemoOutput from './components/Demo/DemoOutput'

function App() {
  console.log("My App running");
  
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  
  /**
   * @Desc Use of dependecies in useCallback hook
   */
  const toggleParagraphHandler =useCallback( () => {
    if(allowToggle) {
      setShowParagraph(showParagraph => !showParagraph);
    }
    
  },[allowToggle]);

  const allowToggleHandler = () =>{
    setAllowToggle(true);
  }
  
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show ={showParagraph}></DemoOutput>
      <Button onClick = {allowToggleHandler}>Allow Toggling</Button>
      <Button onClick = {toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
