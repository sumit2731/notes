import * as React from 'react'
import ReactDOM from 'react-dom'

function Logger(props) {
  console.log(`${props.label} rendered`)
  return null // what is returned here is irrelevant...
}

function Counter() {
  const [count, setCount] = React.useState(0)
  const increment = () => setCount(c => c + 1)
  return (
    <div>
      <button onClick={increment}>The count is {count}</button>
      <Logger label="counter" />
    </div>
  )
}

ReactDOM.render(<Counter />, document.getElementById('root'))