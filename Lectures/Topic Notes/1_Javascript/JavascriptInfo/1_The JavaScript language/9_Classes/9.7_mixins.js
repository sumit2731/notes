/* 
 a mixin is a class containing methods that can be used by other classes without a need to inherit from it.
 In other words, a mixin provides methods that implement a certain behavior, but we do not use it alone, we 
    use it to add the behavior to other classes.

*/

/* 
A mixin example
    The simplest way to implement a mixin in JavaScript is to make an object with useful methods, so that we 
        can easily merge them into a prototype of any class.
    
    There’s no inheritance, but a simple method copying. So User may inherit from another class and also include
    the mixin to “mix-in” the additional methods, like this:
*/

// mixin
let sayHiMixin = {
  sayHi() {
    alert(`Hello ${this.name}`);
  },
  sayBye() {
    alert(`Bye ${this.name}`);
  }
};

// usage:
class User {
  constructor(name) {
    this.name = name;
  }
}

// copy the methods
Object.assign(User.prototype, sayHiMixin);

// now User can say hi
new User("Dude").sayHi(); // Hello Dude!

/* 
See Notes

*/