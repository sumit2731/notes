import React from 'react'
import ReactDOM from 'react-dom'

function useComputedValue(...allArgs) {
  // normally setting current during render like this is not good and you'll
  // want to do that in a useEffect.
  // However, we need access to these values *during* render.
  const args = React.useRef()
  args.current = allArgs
  const ref = React.useRef()
  if (!ref.current) {
    ref.current = {}
    Object.defineProperty(ref.current, 'result', {
      get() {
        const [cb, deps] = args.current

        // only call the given callback if we haven't already calculated
        // the value or the dependencies have changed.
        if (
          !ref.current.__value ||
          !ref.current.__deps ||
          !ref.current.__deps.every((dep, i) => Object.is(dep, deps[i]))
        ) {
          ref.current.__value = cb()
          ref.current.__deps = deps
        }
        return ref.current.__value
      },
    })
  }
  return ref.current
}

let callCount = 0
function getNumberWarning(number) {
  console.log(`getNumberWarning called ${++callCount} times`)
  return `There's some problem with ${number}`
}

function FavoriteNumber() {
  const [name, setName] = React.useState('')
  const [number, setNumber] = React.useState(0)
  // swap these three variable declarations and observe the difference
  // when you interact with the app.
  // NOTE: I'm putting the numberWarning inside an object to make it
  // easier for you to comment in/out these different implementations
  // because the useComputedValue implementation requires an object.

  // called every render
  // const numberWarning = {result: getNumberWarning(number)}

  // called every re-render when the number changes
  // const numberWarning = {
  //   result: React.useMemo(() => getNumberWarning(number), [number]),
  // }

  // called only once when actually used and when the number changes
  const numberWarning = useComputedValue(() => getNumberWarning(number), [
    number,
  ])
  return (
    <div>
      <label>
        Your name: <input onChange={e => setName(e.target.value)} />
      </label>
      <label>
        Your favorite number:{' '}
        <input
          type="number"
          onChange={e => setNumber(Number(e.target.value))}
        />
      </label>
      <div>
        {name
          ? `${name}'s favorite number is ${number}`
          : 'Please type your name'}
      </div>
      <div>{number > 10 ? numberWarning.result : null}</div>
      <div>{number < 0 ? numberWarning.result : null}</div>
    </div>
  )
}

function App() {
  return <FavoriteNumber />
}

ReactDOM.render(<App />, document.getElementById('root'))
