function App() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <p>You've clicked {count} times.</p>
      <button
        onClick={() => {
          setCount(count + 1);

          console.log(count);
        }}
      >
        Click me!
      </button>
    </>
  );
}

function App2() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <p>You've clicked {count} times.</p>
      <button
        onClick={() => {
          const nextCount = count + 1;
          setCount(nextCount);
          console.log(nextCount);
        }}
      >
        Click me!
      </button>
    </>
  );
}
