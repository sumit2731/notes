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
