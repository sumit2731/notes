type UserPart = {
  id: string;
  name: string;
  age: number;
};

type UserPart2 = {
  id: number;
  phone: string;
};

/**
 * In intersection if 2 times have incompatible types then, actual type is intersection type,
 * like here id : string & number , which is never
 *
 * we will get error only when assigning value
 */
type User = UserPart & UserPart2;

const user: User = {
  id: "1",
  name: "John",
  age: 20,
  phone: "123456789",
};
