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
 * @way1
 * Here return type of function is defined, and returned object is inlined,
 * so there is no other purpose of object, so having extra property gives us error.
 *
 * same was when we pass inline object to function exact property check is done(last lecture)
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
 * @why does this does not error out
 *
 * Because modifiedUser is assignable to User, so no error. same way like we were able to pass a object
 * with extra properties to function
 *
 * so rule for extra property check in function -
 *  a)if you are inline return object, give return type to object
 *  b)if you declaring variables, you need to give them type to that variable like
 *     we do in  solition 2.
 */
const usersWithIds2: User[] = users.map((user, index): User => {
  const modifiedUser = {
    ...user,
    id: index,
    age: 30,
  };
  return modifiedUser;
});
