import { User } from "./file1";

// Now `User` includes `id`, `name`, `email`, and `age`.
const user: User = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
  age: 30, // This property is optional
};

console.log(user);
