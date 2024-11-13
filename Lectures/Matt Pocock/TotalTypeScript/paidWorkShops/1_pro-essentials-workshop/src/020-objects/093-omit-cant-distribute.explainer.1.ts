import { Equal, Expect } from "@total-typescript/helpers";

type User = {
  id: string;
  name: string;
  age: number;
  imageId: string;
};

type Organisation = {
  id: string;
  name: string;
  address: string;
  imageId: string;
};

type Product = {
  id: string;
  name: string;
  price: number;
  imageId: string;
};

type Entity = User | Organisation | Product;
/**
 * Omit is not distributive i.e it does not iterate over every member of union.Instead,
 * it mushes the union into a structure it comprehends, and then operates on this new construct
 *
 * Here it combines 3 union types and picksnproeprties common to them and excludes provided property
 * If we provide a property which does not exists then it just combines them togather
 */
type EntityWithoutId = Omit<Entity, "id">;
//   ^?

type test = Expect<
  Equal<
    EntityWithoutId,
    | {
        name: string;
        age: number;
        imageId: string;
      }
    | {
        name: string;
        address: string;
        imageId: string;
      }
    | {
        name: string;
        price: number;
        imageId: string;
      }
  >
>;
