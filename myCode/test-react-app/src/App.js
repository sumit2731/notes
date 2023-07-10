import logo from './logo.svg';
import './App.css';
import React from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



function App() {

  console.log("calling App");

  const [count, setCount] = React.useState(0);
  
  function doSomeThingAsync() {
    return new Promise((resolve,reject) => {
      setTimeout(resolve,100,'hello');
    })
  }
  
  const increment = async () => {
    //await doSomeThingAsync();
    console.log(count);
    setCount(count+1);
    //setCount((count) => count +1 );
  }
  return <button onClick={increment}>{count}</button>
}

export default App;