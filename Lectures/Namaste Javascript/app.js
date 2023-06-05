var a = 10;
let b = 2;
function f1() {
    let a1 = 1;
    var c = 3;
    console.log(b);
    function f2() {
        let d =1;
        var e = 1;
        console.log(a);
        console.log(c);
    }
    f2();
}
f1();