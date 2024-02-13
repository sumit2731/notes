import { Equal, Expect } from "../helpers/type-utils";

const getServerSideProps = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json: { title: string } = await data.json();
  return {
    props: {
      json,
    },
  };
};

/**
 * This pattern is so useful for when you have a function that maybe you don't control. 
 * Maybe this is an external library or something and you want to extract something out 
 * of it or it's something that you do control but you don't want to declare a type annotation
 * for.
 * 
 * This means that you can go in there and extract exactly what's in there and then parse that out.
 * It means that you don't need to actually write this type declaration. You can do it from what's
 * coming from the function itself, which is a super-powerful paradigm.
 */
type InferPropsFromServerSideFunction<T> = T extends () => Promise<{
  props: infer P;
}>
  ? P
  : never;

type tests = [
  Expect<
    Equal<
      InferPropsFromServerSideFunction<typeof getServerSideProps>,
      { json: { title: string } }
    >
  >
];
