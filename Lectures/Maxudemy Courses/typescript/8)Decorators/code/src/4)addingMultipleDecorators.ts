function Logger4(logString: string) {
    console.log("Decorator Factory called");
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate4(template: string, hookId: string) {
    console.log("WithTemplate Factories");
  return function (constructor: any) {
      console.log("Rendering template");
    const hookEl = document.getElementById(hookId);
    //here we are  creating object of class in which we are using this decorator
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

/**
 * @Multiple Decorators are executed in bottom up hierarchy.
 *  Decorator factories are executed in top bottom heirarchy
 */
@Logger4('Logging')
@WithTemplate4("<h1>This is paragraph</h1>", "app")
class Person4 {
  name = "Max";

  constructor() {
    console.log("Creating person Object");
  }
}

const pers4 = new Person4();
console.log(pers4);
