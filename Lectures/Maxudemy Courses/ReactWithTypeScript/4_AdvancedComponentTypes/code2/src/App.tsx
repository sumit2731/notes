import Input from "./components/Input";
import InputWithRef from "./components/InputWithRef";
import Button from "./components/Button";
import Button2 from "./components/Button2";
import DummyComponent from "./components/DummyComponent";
import Container from "./components/Container";
import Form from "./components/Form";
import Form2, { FormHandle } from "./components/Form2";
import { useRef } from "react";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const customFormRef = useRef<FormHandle>(null);

  function handleSave(data: unknown) {
    /**
     * approach 1 - Giving Type with type alias
     */
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);

    /**
     * Approach 2 - https://www.udemy.com/course/react-typescript-the-practical-guide/learn/lecture/40470622#questions
     */
    if (
      !data ||
      typeof data !== "object" ||
      !("name" in data) ||
      !("age" in data)
    ) {
      return;
    }

    // at this point, TypeScript knows that data MUST BE an object
    // with a name and age property
    // otherwise, the previous if statement would have returned
    console.log(data);
    customFormRef.current?.clear();
  }
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
      {/*Error as this does not have all props that belong to any one union type  */}
      <DummyComponent class="c1" teacher="t1" salary={1000}></DummyComponent>
      {/* No error as all types of one prop are present  */}
      <DummyComponent class="c1" teacher="t1" college="c1"></DummyComponent>
      {/* all types of one prop are present, so extra props can also be passed, no error is given */}
      <DummyComponent
        class="c1"
        teacher="t1"
        college="c1"
        salary={100}
      ></DummyComponent>
      {/* <Container as="button" type="button" onClick={(e) => console.log(e)}>
        ClickMe
      </Container> */}
      <Container as={Button} el="button">
        Click Me
      </Container>
      <InputWithRef label="Test" id="test" ref={inputRef} />
      <Form onSave={handleSave}>
        <Input type="text" label="Name" id="name" />
        <Input type="number" label="Age" id="age" />
        <p>
          <Button el="button">save</Button>
        </p>
      </Form>
      <Form2 onSave={handleSave} ref={customFormRef}>
        <Input type="text" label="Name" id="name" />
        <Input type="number" label="Age" id="age" />
        <p>
          <Button el="button">save</Button>
        </p>
      </Form2>
    </main>
  );
}

export default App;
