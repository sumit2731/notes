import React, { useState } from 'react';
import './App.css';
import { IntlProvider, FormattedMessage } from 'react-intl';
import Parent from './components/Parent'


function App() {

  const [id, setId] = useState(1);

  const changeId =() => {
    setId(null);
  }

  return (
    <div>
      <h1>Hello</h1>
      <Parent id={id}></Parent>
      <button onClick={changeId}>Change Id</button>
    </div>
  );
}

export default App;
