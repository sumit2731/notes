import { it, expect } from "vitest";
/**
 * this is how we mention the type of this
 */
function add(this: { x: number; y: number }) {
  return this.x + this.y;
}

/**
 * we cannot use an arrow function as a method when we do objects like this. So with classes, you
 * can use an arrow function within the class and it will kind of automatically bind the this to
 * the context of the class. Very useful. But in this setup, it just doesn't work. in arrow functions
 * you cannot give type to 'this'. so we have to chnage it back to normal function
 *
 * only way to get this working actually is to change it to a normal function declaration.
 * And now as a normal function declaration, it has access to the this in which it's being
 * called, which an arrow function kind of doesn't.
 *
 * other thing to be noticed here if these methods are defined inside the object, this will automatically
 * have access to members of object without any tying.but if you for some reason need to define these functions
 * outside object,then you can use the this parameter to make sure they're strongly typed to the context in which they're called.
 *
 */
function setValues(this: { x: number; y: number }, x: number, y: number) {
  this.x = x;
  this.y = y;
}

it("Should add the numbers together", () => {
  const calculator = {
    x: 0,
    y: 0,

    add,
    setValues,
    /**
     * if we define function like this then, this is automatically typed.
     * this just looks very similar to a class. And often what you'll see, this is kind of how classes run under the hood
     *
     */
    someOtherFunc(num: number) {
      this.x = num;
      this.y = num;
    },
  };

  calculator.setValues(1, 2);

  expect(calculator.add()).toEqual(3);
});
