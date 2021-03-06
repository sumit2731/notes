import {useState} from 'react';
import './App.css';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [disabled, setDisbaled] = useState(false);
  
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  const clickHandler = () => setButtonColor(newButtonColor);
  
  return (
    <div>
      <button style= {{backgroundColor: disabled? 'gray' : buttonColor}} onClick= {clickHandler} disabled = {disabled}>Change to {newButtonColor}</button>
      <input 
        type="checkbox"
        id="disabled-button-checkbox"
        defaultChecked = {disabled}
        aria-checked = {disabled}
        onChange={ e => setDisbaled(e.target.checked)}
      >
      </input>
      <label htmlFor="disabled-button-checkbox">Disable Button</label>
    </div>
  );
}

export default App;
