function sum(a, b) {
  console.log(a);
  return a + b;
}

let add5 = sum.bind(this, 5);

console.log();

let a = add5(1);
console.log(a);
