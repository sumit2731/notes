import { ReactNode, useState } from "react";
import "./styles.css";

const ChildComponent = ({ source }: { source: string }) => {
  console.info("ChildComponent re-render from source: ", source);
  return <div className="child">Child from {source}</div>;
};

const data = { data: "test" };
const MovingComponent = ({
  children
}: {
  children: ({ data }: { data: string }) => ReactNode;
}) => {
  const [state, setState] = useState({ x: 100, y: 100 });

  return (
    <div
      className="moving-div"
      onMouseMove={(e) => setState({ x: e.clientX - 20, y: e.clientY - 20 })}
      style={{ left: state.x, top: state.y }}
    >
      {children(data)}
    </div>
  );
};

export default function App() {
  return (
    <div className="container">
      <div className="column">
        <MovingComponent>
          {() => <ChildComponent source="performant" />}
        </MovingComponent>
      </div>
    </div>
  );
}
