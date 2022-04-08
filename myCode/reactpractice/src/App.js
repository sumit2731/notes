import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './components/Parent';

function App() {
  const [id, setId] = useState(1);
  const changeId = () => {
    setId(null);
  }
  return (
    <div>
      <h1>Hello</h1>
      <Parent id={id}></Parent>
      <button onClick= {changeId}>Chnage Id</button>
    </div>
  );
}

export default App;
