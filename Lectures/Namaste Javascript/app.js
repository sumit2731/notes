function a() {
    var a= 1;
    function b() {
        var b = 2;
        console.log(a);
        console.log(b);
        function c() {
            var c = 3;
            function d() {
                debugger;
                console.log(a);
                console.log(b);
                console.log(c);
            }
            d();
        }
        c();
    }
    b();
}


a();