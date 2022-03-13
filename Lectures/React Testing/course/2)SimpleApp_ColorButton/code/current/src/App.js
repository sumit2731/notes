import {useState} from 'react';
import logo from './logo.svg';

import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [disabled, setDisbaled] = useState(false);
  
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  const clickHandler = () => setButtonColor(newButtonColor);
  
  return (
    <div>
      <button style= {{backgroundColor: buttonColor}} onClick= {clickHandler} disabled = {disabled}>Change to {newButtonColor}</button>
      <input 
        type="checkbox"
        id="enabled-button-checkbox"
        defaultChecked = {disabled}
        aria-checked = {disabled}
        onChange={ e => setDisbaled(e.target.checked)}
      >
      </input>
    </div>
  );
}

export default App;
