type emp = {
  salary: number;
  manager: string;
  company: string;
};

type student = {
  class: string;
  teacher: string;
  college: string;
};

type DummyComponentProps = emp | student;

const DummyComponent = (prop: DummyComponentProps) => {
  return <h1>Hello</h1>;
};

export default DummyComponent;
