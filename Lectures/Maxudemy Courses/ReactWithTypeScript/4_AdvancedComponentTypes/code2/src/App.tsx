import Input from "./components/Input";
import Button from "./components/Button";
import Button2 from "./components/Button2";
import DummyComponent from "./components/DummyComponent";

function App() {
  return (
    <main>
      <Input id="name" label="Your name" type="text"></Input>
      <Input id="age" label="Your Age" type="number"></Input>
      <p>
        <Button el="button">A Button</Button>
        <Button el="anchor" href="https://google.com"></Button>

        <Button2>A Button</Button2>
        <Button2 href="https://google.com" disabled={true}></Button2>
      </p>
      <DummyComponent
        salary={100}
        manager="abc"
        company="abc"
        class="abc"
      ></DummyComponent>
    </main>
  );
}

export default App;
