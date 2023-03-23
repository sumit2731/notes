// let complexObject = [{ id: 1, name: "sume" }];

// let [{ id: anyName }] = complexObject;

// console.log(anyName);

let emp = {
  id: 100,
  name: "Sumeet",
  country: "Australia",
};

function dummyFunction({ id, name, country }) {
  console.log(id);
  console.log(name);
  console.log(country);
}

dummyFunction(emp);

//swapping variables
