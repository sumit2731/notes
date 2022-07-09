import * as React from "react";

function useRenderTimes() {
  const renderRef = React.useRef(0);

  React.useEffect(() => {
    renderRef.current = renderRef.current + 1;
  });

  return renderRef.current;
}

function getRandomHEX() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function Header() {
  const [color, setColor] = React.useState("#111");
  const count = useRenderTimes();
  return (
    <header style={{ backgroundColor: color, color: "white" }}>
      <p>Header component has re-rendered {count} times</p>
      <button onClick={() => setColor(getRandomHEX())}>Click</button>
    </header>
  );
}

function Footer() {
  const count = useRenderTimes();
  return (
    <footer>
      <p>Footer component has re-rendered {count} times</p>
    </footer>
  );
}

export function App() {
  console.log("App Called");
  const count = useRenderTimes();
  return (
    <>
      <Header />
      <main>
        <p>Hey, nice to see you again 👋🏼</p>
        <p>The App component has re-rendered {count} times</p>
      </main>
      <Footer />
    </>
  );
}

export default App;
