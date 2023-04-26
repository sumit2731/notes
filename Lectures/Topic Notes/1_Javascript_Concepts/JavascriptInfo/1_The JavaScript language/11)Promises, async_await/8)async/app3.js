async function f1() {
  let val = await Promise.resolve(1);
  return val;
}

function f2() {
  //p1 is pending promise
  let p1 = f1();
  console.log(p1);
  p1.then((val) =>
    console.log("Promise returned by f1 resolved with = " + val)
  );
  console.log("Inside f2");
}
f2();

/* 
promise
Inside f2
Promise returned by f1 resolved with = 1

*/