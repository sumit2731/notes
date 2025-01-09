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
 * Function return type is also checked for extra proeprties
 */
const usersWithIds: User[] = users.map(
  (user, index): User => ({
    ...user,
    id: index,
    // @ts-expect-error
    age: 30,
  })
);

/**
 * but this doe snot error out because it is not in exact position where it needs to be
 * for explanation go back to lecture 152.like in lecture 152, when we directly inline a object
 * param into function call, ts knows that their is no purpose of this object apart for function
 * param, so extra property check is applied.
 *
 * so rule for extra proeprty check in function -
 *  a)if you are inline return object, give return type to object
 *  b)if you declaring variables, you need to give them types
 */
const usersWithIds2: User[] = users.map((user, index): User => {
  const modifiedUser = {
    ...user,
    id: index,

    age: 30,
  };
  return modifiedUser;
});
