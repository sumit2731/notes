// let img = document.createElement('img');
// img.src = "https://js.cx/clipart/train.gif"; // (*)

// img.onload = function() {
//   alert(`Image loaded, size ${img.width}x${img.height}`);
// };

// img.onerror = function() {
//   alert("Error occurred while loading image");
// };

window.onbeforeunload = function() {
  console.log("Event happened");
 return false;
};