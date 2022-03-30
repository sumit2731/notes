import cleanSet from 'clean-set';



let current = {
    a: { b: [], c: true },
    d: [],
    e: {
      f: { g: 'hello' },
      h: { i: 0 },
    },
};
   
let next = cleanSet(current, 'e.h.i', 1);

// console.log(next.e.h.i);
// console.log(current.e.h.i);
// console.log(current.a === next.a);
console.log(current === next)
console.log(current.a === next.a);
console.log(current.e === next.e);
console.log(current.e.h === next.e.h);
console.log(current.e.f === next.e.f);




// import  dset  from 'dset';

// let foo = { abc: 123 };
// let foo1 = foo;
// dset(foo, 'foo.bar', 'hello');
// // or: dset(foo, ['foo', 'bar'], 'hello');
// console.log(foo);
// console.log(foo === foo1);





