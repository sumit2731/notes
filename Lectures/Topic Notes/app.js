elem.oncontextmenu = function(event) {
  event.preventDefault();
  alert("Button context menu");
};

document.oncontextmenu = function(event) {
  event.preventDefault();
  alert("Document context menu");
};