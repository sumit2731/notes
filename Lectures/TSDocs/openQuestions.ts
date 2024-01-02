/* 
Intersection with union types
*/

//case 1 - different properties in union
type Country1 = {
  continent: string;
};

type Religion1 =
  | {
      religion: "hindu";
    }
  | {
      race: "muslim";
    };

type ConunrtyWithReligion1 = Country1 & Religion1;

let c11 = {} as ConunrtyWithReligion1;

let c21: ConunrtyWithReligion1 = {
  continent: "asia",
  religion: "hindu",
  race: "muslim",
};
// cannot access any properties in union
c21.race; // cannot access any property

//case 2 - same property in union

type UnionType =
  | {
      id: number;
    }
  | {
      id: string;
    };

type Name = {
  name: string;
};

type newType2 = UnionType & Name;

let obj12: newType2 = {
  name: "",
  id: 1,
};

console.log(obj12.id);

let obj22 = {} as newType2;

console.log(obj22.id); // id is union type

//example3

type Person2 = {
  firstName: string;
  lastName: String;
  age: number;
};

type PersonWithEvent2 =
  // | {
  //     on(propName: "firstNameChanged", callback: (value: string) => void): void;
  //   }
  // | {
  //     on(propName: "lastNameChanged", callback: (value: string) => void): void;
  //   }
  // | {
  //     on(propName: "ageChanged", callback: (value: number) => void): void;
  //   };
  | {
      on: (propName: string) => void;
    }
  | {
      on: (propName: number) => void;
    };

type NewPerson = Person2 & PersonWithEvent2;

let obj2: NewPerson = {
  firstName: "sumeet",
  lastName: "sood",
  age: 30,
  //here type is right
  on: (param: string) => {
    console.log(param);
  },
};

let obj3 = {} as NewPerson;

// first argument is of never type
obj3.on("");
