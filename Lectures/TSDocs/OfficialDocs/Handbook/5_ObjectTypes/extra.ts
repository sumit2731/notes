/**
 * How conflict is handle in intersection
 */

type Person2 = {
  name: string;
  address: {
    city: string;
  };
};

type Emp = {
  id: number;
  address: {
    country: string;
  };
};
/**
 * If properties have name in intersecting types then final type for that property is also intersection
 * of type of that property in intersecting types.
 *
 * For Example type of address proeprty - {city: string} & {country: string}
 */
type EmpPerson = Person2 & Emp;

let empPer: EmpPerson = {
  name: "",
  id: 12,
  address: {
    city: "",
    country: "",
  },
};

/**
 * How Conflict is handled while extending the interface
 */

interface Person3 {
  name: string;
  address: {
    city: string;
  };
}
/**
 * we get error if types for same property mismatch, and these types can come from anywhere else also
 * because of declaration merging.
 */
interface Emp3 extends Person2 {
  id: number;
  address: {
    country: string;
  };
}

/**
 * Event in declaration merging same property cannot have incompatible types
 */
interface Person3 {
  name: boolean;
}
