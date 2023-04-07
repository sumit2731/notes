let p1 = new Promise((resolve,reject) => setTimeout(() => resolve(1),6000));
let p2 = new Promise((resolve,reject) => setTimeout(() =>resolve(p1),3000));
let p3 =  new Promise((resolve,reject) => setTimeout(() =>resolve(p2),3000));

//1 when p1,p2 and p3 resolves
//p3.then(val => console.log(val));

let p4 = Promise.resolve(p3);

/* pending promise - this promise is resolved when final promise resloves i.e when p3 emitted value */
//console.log(p4);

/* 1, p4e resolves when p1,p2,p3 are resolved */
//p4.then(val => console.log(val));

async function f1() {
    let a = await p4;
    console.log("await excuted");
    return a;
}

let a = f1();
a.then((val) => console.log(val));
console.log("next line executed");
