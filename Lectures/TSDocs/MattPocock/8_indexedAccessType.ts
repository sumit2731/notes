/**
 * numbers gives the union of all array member
 */

type Letters = ["a", "b", "c"];

type Letter = Letters[number];

const num = ["red", "green", "blue"];

/**
 * When we apply it on Union of Array types then it combines all induival array values into  single
 *   union
 */

type ColorVehicle = ["red", "green", "blue"] | ["car", "truck", "bus"];

type t27 = ColorVehicle[number];

/**
 * neted indexed access
 */

interface UserRoleConfig {
  user: ["view", "create", "update"];
  superAdmin: ["view", "create", "update", "delete"];
}

type role1 = UserRoleConfig[keyof UserRoleConfig];

type Role = UserRoleConfig[keyof UserRoleConfig][number];

type Color = ["red", "green", "blue"];

type Vehicle = ["car", "truck", "bus"];
