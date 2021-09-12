let id1 = Symbol();

//symbol with description
let id2 = Symbol("id");

//Symbol help us to create hidden properties

let user = {
  // belongs to another code
  name: "John",
};

let id = Symbol("id");

user[id] = 1;

alert(user[id]);


//using symbols in literal notatio

let id = Symbol("id");

let user = {
  name: "John",
  [id]: 123, // not "id": 123
};


//how to access symbol properties on object
/* 1)Symbols are skipped by for…in loop
2)Object.keys(user) also ignores them
3)In contrast, Object.assign copies both string and symbol properties */