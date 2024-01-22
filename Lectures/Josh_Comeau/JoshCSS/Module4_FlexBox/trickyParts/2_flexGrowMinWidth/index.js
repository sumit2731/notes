let item1 = document.querySelector(".item1");

let item2 = document.querySelector(".item2");

window.addEventListener("resize", () => {
  //   console.log(item1.clientWidth);
  //   console.log(item2.clientWidth);
  console.clear();
  console.log(`Difference = ${item1.clientWidth - item2.clientWidth}`);
});
