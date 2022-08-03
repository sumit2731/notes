/* 
How to avoid re-render of component

React elements are immutable. Once you create an element, you can’t change its children or attributes. if eleemnt
is not recreated again, it will not be re-rendered.moreover using a JSX creates the object, component function will
only be called when that object is used in view. here we use same oject in view so function is not called again
*/

const Item = () => {
    console.log("Item re-render");
    return <div>Item</div>;
  };
  
  const Page = () => {
    console.log("Page re-render");
    return (
      <>
        page
        {/* <Item /> */}
        <h1>Page</h1>
      </>
    );
  };
  
  const App = () => {
    const [state, setState] = useState(1);
    let page1 = useMemo(() => <Page/>,[]);
    return (
      <div className="App">
        <button onClick={() => setState(state + 1)}>
          click to re-render {state}
        </button>
        <br />
        <Page/>
      </div>
    );
  };
  export default App;