type Person = {
  address: {
    localAdress: {
      state: string;
    };
  };
};

type Employee = {
  address: {
    lat: number;
    long: number;
    localAdress: {
      city: string;
    };
  };
};

type EmpPerson = Person & Employee;

let pe: EmpPerson = {
  address: {
    lat: 12,
    long: 12,
    localAdress: {
      state: "Punjab",
      city: "",
    },
  },
};
