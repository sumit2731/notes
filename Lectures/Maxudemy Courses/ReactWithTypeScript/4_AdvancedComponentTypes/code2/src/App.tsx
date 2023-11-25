import Input from "./components/Input";
import Button from "./components/Button";
import Button2 from "./components/Button2";
import DummyComponent from "./components/DummyComponent";
import Container from "./components/Container";

function App() {
  return (
    <main>
      <Input id="name" label="Your name" type="text"></Input>
      <Input id="age" label="Your Age" type="number"></Input>
      <p>
        <Button el="button">A Button</Button>
        <Button el="anchor" href="https://google.com"></Button>
        {/* Since href is not present, we do not exact prop type */}
        <Button2 target="some target">A Button</Button2>
        {/* as href is present now ts knows that this should only anchor props, so it gives error */}
        <Button2 href="https://google.com"></Button2>
      </p>
      <DummyComponent
        salary={100}
        manager="abc"
        company="abc"
        class="abc"
      ></DummyComponent>
      <Container as="button" type="button" onClick={(e) => console.log(e)}>
        ClickMe
      </Container>
    </main>
  );
}

export default App;
