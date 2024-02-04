import Kiwi from "./kiwi.jpg";
import altText from "./altText.txt";

console.log(document.currentScript);
console.log(import.meta.url); // full path of file
// console.log(script.src);
console.log(self.location);
console.log(Kiwi);
//Kiwi - http://127.0.0.1:5500/code/dist/23de234a71129d9c860b.jpg

/**
 * publicPath - dist/
 * Kiwi -dist/23de234a71129d9c860b.jpg
 *
 * publicPath - not mentioned
 * Kiwi - http://127.0.0.1:5500/dist/23de234a71129d9c860b.jpg or http://127.0.0.1:5500/3_AssetModules/code/dist/23de234a71129d9c860b.jpg
 * depends which folder is opened in vsCode
 */
function addImage() {
  const img = document.createElement("img");
  img.alt = altText;
  img.width = 300;
  img.src = Kiwi;
  const body = document.querySelector("body");
  body.appendChild(img);
}

export default addImage;
