import { Equal, Expect } from "@total-typescript/helpers";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

const fetchUser = async (): Promise<User> => {
  const response = await fetch("/api/user");
  const user = await response.json();
  return user;
};
/**
 * Problem - user should have some types from UserInterface
 */
const example = async () => {
  const user = await fetchUser();

  type test = Expect<Equal<typeof user, { name: string; email: string }>>;
};
