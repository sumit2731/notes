import { expect, it, vitest } from "vitest";

interface User {
  id: number;
  name: string;
}

function printUser(user: User) {
  // test case passes like this- we want this test case to pass by using loop
  console.log(user.id);
  console.log(user.name);
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
