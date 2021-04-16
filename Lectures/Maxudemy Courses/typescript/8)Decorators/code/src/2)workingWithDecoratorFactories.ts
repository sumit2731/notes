function Logger2(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}
/* 
here we pass a argument to  DecoratorFctory
*/
@Logger2('LOGGING- PERSON')
class Person2 {
  name = "Max";

  constructor() {
    console.log("Creating person Object");
  }
}

const pers2 = new Person2();
console.log(pers2);
