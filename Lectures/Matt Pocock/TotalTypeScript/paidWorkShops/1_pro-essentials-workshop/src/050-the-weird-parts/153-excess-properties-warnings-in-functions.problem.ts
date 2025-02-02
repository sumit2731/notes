interface User {
  id: number;
  name: string;
}

const users = [
  {
    name: "Waqas",
  },
  {
    name: "Zain",
  },
];
/**
 * why this is not erroring out
 */
const usersWithIds: User[] = users.map((user, index) => ({
  ...user,
  id: index,
  // @ts-expect-error
  age: 30,
}));

function print<T>(x: Exclude<T, null>): void {
  console.log(x);
}
// Argument of type 'null' is not assignable to parameter of type 'never'.ts(2345)
print(null);
