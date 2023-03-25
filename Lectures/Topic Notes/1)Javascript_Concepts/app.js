let user2 = {
  hello() {
    console.log("Hello");
  },
};
// let's create a circular reference:
// user.me references the user itself

user2.hello();
let clone2 = structuredClone(user2);
clone2.hello();
// console.log(clone2.me === clone2); // true
// console.log(clone2.me === user2);
