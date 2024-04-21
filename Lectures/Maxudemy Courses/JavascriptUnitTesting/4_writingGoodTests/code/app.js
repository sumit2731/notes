import { extractEnteredNumberValues, extractNumbers } from "./src/parser.js";

import { calculateResult } from "./src/math.js";

import { generateResultText, outputResult } from "./src/output.js";

const form = document.querySelector("form");

/**
 * Code before splitting
 */
function formSubmitHandler2(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const numberInputs = extractNumbers(formData);

  let result = "";

  try {
    const numbers = [];
    for (const numberInput of numberInputs) {
      validateStringNotEmpty(numberInput);
      const number = transformToNumber(numberInput);
      validateNumber(number);
      numbers.push(number);
    }
    result = add(numbers).toString();
  } catch (error) {
    result = error.message;
  }

  let resultText = "";

  if (result === "invalid") {
    resultText = "Invalid input. You must enter valid numbers.";
  } else if (result !== "no-calc") {
    resultText = "Result: " + result;
  }

  output.textContent = resultText;
}

/**
 * Code after splitting
 */
function formSubmitHandler(event) {
  event.preventDefault();
  const numberValues = extractEnteredNumberValues(form);
  const result = calculateResult(numberValues);
  let resultText = generateResultText(result);
  outputResult(resultText);
}

form.addEventListener("submit", formSubmitHandler);
