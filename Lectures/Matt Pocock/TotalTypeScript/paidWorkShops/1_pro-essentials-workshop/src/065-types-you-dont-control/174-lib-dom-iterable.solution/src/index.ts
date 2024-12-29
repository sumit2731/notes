const elements = document.querySelectorAll("div");
/**
 * solution - add DOM.Iterable in libs
 * 
 * so libs in tsconfig.json, this should be your default in all web projects
 * 
 * It's worth noting that DOM.Iterable is included by default if you don't specify the lib option.
  However, explicitly stating which libraries are included can help ward off potential problems later
  on, particularly when operating in diverse environments like Node.js.
 */
for (const element of elements) {
  element.innerHTML = "Hello World!";
}
