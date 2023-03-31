let obj5 = {
  // toString handles all conversions in the absence of other methods
  toString() {
    return { name: "name1" };
  },
  valueOf() {
    return { name: "name2" };
  },
};

console.log(+obj5);
