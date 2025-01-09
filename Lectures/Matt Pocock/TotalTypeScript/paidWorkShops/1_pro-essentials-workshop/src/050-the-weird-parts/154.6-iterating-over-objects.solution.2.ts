import { expect, it, vitest } from "vitest";

interface User {
  id: number;
  name: string;
}
// here we widen the type to Record<string, any>
function printUser(user: Record<string, any>) {
  Object.keys(user).forEach((key) => {
    console.log(user[key]);
  });
}

it("Should log all the keys of the user", () => {
  const consoleSpy = vitest.spyOn(console, "log");

  printUser({
    id: 1,
    name: "Waqas",
  });

  expect(consoleSpy).toHaveBeenCalledWith(1);
  expect(consoleSpy).toHaveBeenCalledWith("Waqas");
});
