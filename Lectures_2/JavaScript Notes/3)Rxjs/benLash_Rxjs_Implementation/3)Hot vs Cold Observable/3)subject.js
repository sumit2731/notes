const { Subject } = Rx;


let sub1 = new Subject();

 let i = 1;
let inyerval = setInterval(() => {
    sub1.next(i++);
}, 1000);

let subscription1 = sub1.subscribe(val => console.log("sub1 " +val), (error) => console.log(error) , () => console.log("Completed S1"));

setTimeout(() => {
    sub1.subscribe(val => console.log("sub2 " + val), (error) => console.log(error), () => console.log("Completed S2"));
},3000);


setTimeout(() => {
    subscription1.unsubscribe();
    //clearInterval(inyerval);
}, 5000);


setTimeout(() => {
    sub1.next(i);
    sub1.subscribe(val => console.log("sub3 " + val), (error) => console.log(error), () => console.log("Completed S3"));
}, 7000);