const Helper = <T extends string>(obj: { name: T }) => obj.name;

const returnsValueOnly = <T>(t: T) => {
  return t;
};

const result = returnsValueOnly("a");

const result2 = Helper({ name: "sumeet" });
