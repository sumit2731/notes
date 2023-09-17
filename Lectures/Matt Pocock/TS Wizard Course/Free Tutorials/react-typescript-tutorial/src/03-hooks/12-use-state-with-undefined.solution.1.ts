import { useEffect, useState } from "react";
import { Equal, Expect } from "../helpers/type-utils";

interface Data {
  id: number;
  name: string;
}

const fetchData = () => {
  return Promise.resolve({ id: 1, name: "John" });
};

export const Component = () => {
  /**
   * If we do not pass any value to useState and give it a type, then type of state variable is Data|undefined.
   * if we want to give other value like null, we need to give this type explicit to useState like Data|null.
   * and infered type will also be Data|null, undefined will not be included now
   */
  const [data, setData] = useState<Data>();

  useEffect(() => {
    fetchData().then((val) => {
      setData(val);
    });
  }, []);

  type test = [Expect<Equal<typeof data, Data | undefined>>];
};
