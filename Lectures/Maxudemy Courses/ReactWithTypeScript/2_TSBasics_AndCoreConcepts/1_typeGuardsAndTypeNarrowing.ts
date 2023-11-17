type User = {
  name: string;
  age: number;
};

type Admin3 = {
  name: string;
  age: number;
  permissions: string[];
  randomProp: string;
};

function login2(u: User | Admin3) {
  if ("permissions" in u) {
    //here ts knows that u will have randopProp property
    console.log(u.randomProp);
  }
}
