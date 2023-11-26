import CardComponent from "./CardComponent";
import IconButton from "./IconButton";
import List from "./ListComponent";

function HeartIcon() {
  return <span>❤️</span>;
}

export default function Renderer() {
  let items = ["a", "b", "c", "d"];
  const renderItem = (text: string) => <h1>{text}</h1>;
  return (
    <>
      <CardComponent
        title="MyCard"
        actions={
          <button onClick={() => console.log("Button Clicked")}>
            Click Me
          </button>
        }
      >
        <p>Some Content</p>
      </CardComponent>
      <IconButton
        Icon={HeartIcon}
        onClick={() => console.log("Button clicked!")}
      >
        Like
      </IconButton>
      <List items={items} renderItem={renderItem}></List>
    </>
  );
}
