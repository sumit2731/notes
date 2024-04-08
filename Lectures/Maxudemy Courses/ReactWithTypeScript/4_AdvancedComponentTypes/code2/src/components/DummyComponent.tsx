type student = {
  class: string;
  teacher: string;
  college: string;
  // if we use this then  presence of company means type is emp
  //company?: never;
};

type emp = {
  salary: number;
  manager: string;
  company: string;
};

type DummyComponentProps = emp | student;

/**
 * How Union Type props behave -
 *  a)you cannot pass a property that do not belong to any type
 *  b)you need to provide all mandatory properties of atleast one type
 *  c)After providing all mandatory props of one type, you can pass properties that belongs to other
 *    union type. this is not good, this is why we need Discrinated Unions
 *  d)If you have one property that is optional and type is never and in other union type, it is
 *    optional or mandatory but type is not never, then presense of never property means type is other
 *  type. this is trick used in Button2
 */

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
/**
 * @Example1
 * Type narrowing is not proper with Destructuring
 */
function test2(param: t1 | t2) {
  let { id1, ...restParam } = param;
  if (id1 === "t1") {
    /**
     * Here type narrowing happends for id1 but not for param and restParam
     */
    console.log(id1);
    console.log(param);
    console.log(restParam);
    // type narrowing not happening for id2 and restParam
    let { id1: id2, ...restParam2 } = param;
  } else {
    //type narrowing not happening
    console.log(restParam);
  }
}

/**
 * Type Narrowing is proper with destructuring
 */
function test22(param: t1 | t2) {
  if (param.id1 === "t1") {
    //proper type narrowing
    console.log(param);
    let { id1: id2, ...restParam } = param;
    //proper typing
    let { id1: id3, ...restParam2 } = param;
  } else {
    //type narrowing not happening
    console.log(param);
  }
}

/**
 * @Example2
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
