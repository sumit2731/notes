let selectedTd;

table.onclick = function (event) {
  let target = event.target; // where was the click?

  if (target.tagName != "TD") return; // not on TD? Then we're not interested

  highlight(target); // highlight it
};

function highlight(td) {
  if (selectedTd) {
    // remove the existing highlight if any
    selectedTd.classList.remove("highlight");
  }
  selectedTd = td;
  selectedTd.classList.add("highlight"); // highlight the new td
}


table.onclick = function (event) {
  let td = event.target.closest("td"); // (1)

  if (!td) return; // (2)

  if (!table.contains(td)) return; // (3)

  highlight(td); // (4)
};