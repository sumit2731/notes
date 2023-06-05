function outer() {
    function inner() {
        console.log(a);
    }
    inner();
    let a = 1;
}

outer();