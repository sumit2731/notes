function Logger7(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

/**
 *What you return from decorator and what typescript is able to use depends upon
 typ of decorator you are working with. Ib class decorator you can return a constructor
 function which will replce the class to which you added the decorator.

 so here we can return new constructor function or we can simpley return a new class.

 Visit this link - https://www.typescriptlang.org/docs/handbook/generics.html#using-class-types-in-generics
 */
function WithTemplate7(template: string, hookId: string) {
  return function <T extends {new (...args:any[]): {}}>(orignalConstructor: T)
  {
    return class extends orignalConstructor  {
      constructor(...args: any[]) {
        super();
        const hookEl = document.getElementById(hookId);
        //const p = new orignalConstructor();
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = "sumeet";
        }
      }
    };
  };
}
/* 
here we pass a argument to  DecoratorFctory
*/
@WithTemplate7("<h1>This is paragraph</h1>", "app")
class Person7 {
  name = "Max";
  id = 1;
  printName() {
    console.log("print Name");
  }

  constructor() {
    console.log("Creating person Object");
  }
}

const pers7 = new Person7();
console.log(pers7);


/**
 * @ThingToBeNoted here we need to specify that returned class has all properties which are avaible on class on which we apply decorator.
 * Question - https://www.udemy.com/course/understanding-typescript/learn/lecture/16935728#questions/10588830
 */

 /**
  * @Here we encountered the concept of constructor funcion type in ts. so go throught these articles-
  * https://stackoverflow.com/questions/39614311/class-constructor-type-in-typescript
  * https://www.simonholywell.com/post/typescript-constructor-type.html
  * 
  * Realted to this is  conectpts of @mixins. see this link-
  * https://mariusschulz.com/blog/mixin-classes-in-typescript
  */


  /**
   * @For concept of generic defualt
   */
