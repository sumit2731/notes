import React,{useState,useCallback} from 'react';
import Button from './components/UI/Button/Button';

import './App.css';
import DemoOutput from './components/Demo/DemoOutput'

function App() {
  console.log("My App running");
  
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  let [pstate, setPstate] = useState(0);

  /**
   * @Desc when to use callback based approch in setState function
   *  when same renering state of component introduces multiple staate updates, and new state depends upon
   *  previous state.
   */
  const PstateHandler = () => {
    setPstate(pstate +1);
    setPstate(pstate +1);
    
    // setPstate((oldPstate) => oldPstate +1);
    // setPstate((oldPstate) => oldPstate +1);


  }
  
  /**
   * @Desc Use of dependecies in useCallback hook
   */
  const toggleParagraphHandler = useCallback( () => {
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
      <button  onClick = {PstateHandler}>{pstate}</button>
    </div>
  );
}

export default App;
