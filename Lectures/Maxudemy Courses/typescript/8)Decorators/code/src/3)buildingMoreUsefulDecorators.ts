function Logger3(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template:string, hookId: string) {
    /* 
    Sometimes we get error if we do not use argument of function(depends upon configs of tsconfig)
    so to remove that error, instead of passing constructor as arguent we use _. this is to basicaly
    signal to typescript that I know I will get this argument, but I dnt need it.

    now we want to create object of that class isnide our decorator, so we can use constructor
    function. for that we need to chnage the type of constructor from Function to any
    */
    //return function(constructor: Function) {
    //return function(_: Function) {
    return function(constructor: any) {
        const hookEl = document.getElementById(hookId);
        //here we are  creating object of class in which we are using this decorator
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = p.name;
        }
    }
}
/* 
here we pass a argument to  DecoratorFctory
*/
@WithTemplate('<h1>This is paragraph</h1>', 'app')
class Person3 {
  name = "Max";

  constructor() {
    console.log("Creating person Object");
  }
}

const pers3 = new Person3();
console.log(pers3);
