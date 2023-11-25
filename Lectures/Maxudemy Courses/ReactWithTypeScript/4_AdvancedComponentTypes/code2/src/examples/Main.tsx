import List from "./ListComponent";

export default function Renderer() {
  let items = ["a", "b", "c", "d"];
  const renderItem = (text: string) => <h1>{text}</h1>;
  return (
    <>
      <List items={items} renderItem={renderItem}></List>
    </>
  );
}
