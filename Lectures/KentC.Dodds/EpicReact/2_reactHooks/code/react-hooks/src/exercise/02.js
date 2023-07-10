// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'


function getValue() {
  console.log("getting Value");
  return 'sumeet'
}

//upto way 4 - creating custom hook
// function useLocalStorageHook(key, defaultValue = '') {
//   const [stateValue,setStateValue] = React.useState(() => localStorage.getItem(key) || defaultValue);

//   React.useEffect(() => {
//     localStorage.setItem(key, stateValue)
//   },[stateValue,key]);
//   return [stateValue, setStateValue];
// }

/**
 * Way 5 -More Flexible Hook
 * 
 * a)Supporting any data type
 * b)giving option to provide custom serialization functions
 * c)default value is computationally exprensive to create, support to provide function instead of specfic value
 * d)If localStorageKey changes then we need to clear previous key local Storage and store new value in new key localStorage
 *    For that we need to keep track of previousKey
 * 
 */
function useLocalStorageHook(key, defaultValue = '', {serialize = JSON.stringify, deserialize = JSON.parse}= {}) {
  
  const prevKeyRef = React.useRef(key);
  const [stateValue,setStateValue] = React.useState(() => {
    const valueInLocalStorage = window.localStorage.getItem(key);
    if(valueInLocalStorage) return deserialize(valueInLocalStorage);
    return (typeof defaultValue == 'function') ? defaultValue() : defaultValue;
  });

  React.useEffect(() => {
    const prevKey = prevKeyRef.current;
    if(prevKey !== key) {
      localStorage.removeItem(prevKey.current);
    }
    prevKeyRef.current = key
    
    localStorage.setItem(key, serialize(stateValue))
  },[stateValue,key,serialize]);

  return [stateValue, setStateValue];
}




function Greeting({initialName = ''}) {
  //way 1,2,3
  //const [name, setName] = React.useState(localStorage.getItem('item') || initialName)
  // const [name, setName] = React.useState( () => localStorage.getItem('item') || initialName)

  // React.useEffect(() => {
  //   localStorage.setItem('name', name)
  // },[name]);
  // const [name, setName] = React.useState( () => localStorage.getItem('item') || initialName)

  //const [name, setName] = React.useState( () => localStorage.getItem('item') || initialName)

  //way 4
  const [name,setName] = useLocalStorageHook('name', initialName);


  function handleChange(event) {
    setName(event.target.value)
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting name="Sumeet" />
}

export default App
