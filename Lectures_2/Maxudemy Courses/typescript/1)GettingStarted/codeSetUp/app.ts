const button = document.querySelector("button");
/**
 * @Desc - we add ! tosay it will not be null and then we do Explicit casting
 */
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function() {
  /**
   * @Desc - Explicit casting to a number by using +
   */
  console.log(add(+input1.value, +input2.value));
});
