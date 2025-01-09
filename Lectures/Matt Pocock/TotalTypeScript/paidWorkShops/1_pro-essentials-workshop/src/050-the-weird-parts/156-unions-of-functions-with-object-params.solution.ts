import { expect, it, vitest } from "vitest";

const logId = (obj: { id: string }) => {
  console.log(obj.id);
};
const logName = (obj: { name: string }) => {
  console.log(obj.name);
};

const loggers = [logId, logName];
/**
 * a function can be called with objects that has some extra proprties, like we
 * saw in previous sections. here we use that only
 *
 * if you see type of func in param it is union of function(so you might thing that obj needs
 * to be union of all individual types), but when called both union types are mushed togather.
 * the union of function is turned into one function with one call signature that says its a
 * fucntion which takes in object with properties - id and name (again this is because of reason 1).
 *
 * when we call this function now, it has to be a function that contains all of the
 * possibilities of things being passed into it. that means obj type needs not to be union of all
 * individual function types but intersection.
 */
const logAll = (obj: { id: string; name: string }) => {
  loggers.forEach((func) => func(obj));
  // consider you can even call individual function with obj
  logId(obj);
  logName(obj);
};

it("should log id and name of an object", () => {
  const consoleSpy = vitest.spyOn(console, "log");

  logAll({ id: "1", name: "Waqas" });

  expect(consoleSpy).toHaveBeenCalledWith("1");
  expect(consoleSpy).toHaveBeenCalledWith("Waqas");
});
