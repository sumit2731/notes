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

/**
 * @TypeNarrowingExample1
 */

type t1 = {
  id1: "t1";
  name: string;
  id: number;
};

type t2 = {
  id1: "t2";
  salary: number;
  cellNo: number;
};

function test2(param: t1 | t2) {
  let { id1, ...restParam } = param;
  if (id1 === "t1") {
    /**
     * Here type narrowing happends for id1 but not for param and restParam
     */
    //type narrowing not happening
    console.log(param);
    console.log(restParam);
    let { id1, ...restParam2 } = param;
  } else {
    //type narrowing not happening
    console.log(restParam);
  }
}
function test22(param: t1 | t2) {
  if (param.id1 === "t1") {
    //proper type narrowing
    console.log(param);
    let { id1, ...restParam } = param;
    //proper typing
    let { id1, ...restParam2 } = param;
  } else {
    //type narrowing not happening
    console.log(restParam);
  }
}

/**
 * Type Narrowing in Union
 */
function test(person: DummyComponentProps) {
  if ("salary" in person) {
    // proper type narrowing
    return person.salary;
  }
  // proper type narrwing
  return person.college;
}

/**
 * Type Narrowing in Union2
 */
