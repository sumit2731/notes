// create a div with the scroll
let div = document.createElement("div");

div.style.overflowY = "scroll";
div.style.width = "50px";
div.style.height = "50px";

// must put it in the document, otherwise sizes will be 0
document.body.append(div);
let scrollWidth = div.offsetWidth - div.clientWidth;
debugger;
div.remove();

alert(scrollWidth);
