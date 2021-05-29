var outerScope = 1;


function f1() {
    var outerScope = 2;
    console.log(outerScope);
}

f1();
console.log(outerScope);


