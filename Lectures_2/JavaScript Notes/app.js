function f1() {
    let a = false;
    console.log("F1 Executed");
    return a;
}
function f2() {
    let b = true;
    console.log("F2 Executed");
    return b;
}

if(f1() || f2()) {
    console.log("If executed");
} else {
    console.log("else executed")
}