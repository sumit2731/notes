function myFunction() {
    var elmnt = document.getElementById("myDIV");
    var x = myDIV.scrollLeft;
    var y = myDIV.scrollTop;
    console.log(x);
    console.log(y);
    document.getElementById("demo").innerHTML = "Horizontally: " + x + "px<br>Vertically: " + y + "px";
}
function f2() {
    console.log("Sumeet Sood");
    myDIV.scrollTop = myDIV.scrollTop + 100;
}
function f3() {
   console.log(document.documentElement.clientWidth);
   console.log(document.documentElement.clientHeight);
}