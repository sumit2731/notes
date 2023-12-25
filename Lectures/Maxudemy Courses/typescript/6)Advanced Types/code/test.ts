// type PropEventSource<Type> = {
//   on(
//     paramName: `${string & keyof Type}Changed`,
//     callback: (value: any) => void
//   ): void;
// };
type PropEventSource<Type> = {
  on<Prop extends keyof Type>(
    paramName: `${string & Prop}Changed`,
    callback: (value: Type[Prop]) => void
  ): void;
};

declare function makeWatchedObject<Type>(
  obj: Type
): Type & PropEventSource<Type>;

const person = makeWatchedObject({
  firstName: "Saoirse",
  lastName: "Ronan",
  age: 26,
});

// makeWatchedObject has added `on` to the anonymous Object

person.on("firstNameChanged", (newValue) => {
  console.log(`firstName was changed to ${newValue}!`);
});
