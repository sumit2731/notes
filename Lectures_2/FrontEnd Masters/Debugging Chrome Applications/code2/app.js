function f1() {
    console.log("Function1");
}

// let b1 = document.querySelector('button');
// b1.addEventListener('click',f1);

// let c1 = document.createElement("button");
// c1.textContent = "Cick Me2";
// c1.addEventListener('click',f1);
// document.body.appendChild(c1);

function a (x) {
    let a1 = 1;
    let emp = {id: 1, name: "Sumeet", country: "Germany"};
    console.log("Line 1");
    console.log("Line 1");
    b(10);
    console.log(emp.name);
    console.log("Line 1");
}

function b (y) {
    let b1 = 2;
    console.log("Line 1");
    c(20);
    console.log("Line 1");
    console.log("Line 1");
}

function c (z) {
    console.log("Line 1");
    let c1 = 3;
    console.log("Line 1");
}
a(100);
console.log("Finished");

