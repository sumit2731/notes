import Kiwi from "./kiwi.jpg";
import altTest from "./alt.text";

//Kiwi - http://127.0.0.1:5500/code/dist/23de234a71129d9c860b.jpg

function addImage() {
  const img = document.createElement("img");
  img.alt = "Kiwi";
  img.width = 300;
  img.src = altTest;
  const body = document.querySelector("body");
  body.appendChild(img);
}

export default addImage;
