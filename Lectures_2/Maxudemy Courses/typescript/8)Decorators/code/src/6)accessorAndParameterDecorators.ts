
function Log6(target: any, propertyName: string | Symbol) {
  console.log("Property Decorator");
  console.log(target);
  console.log(propertyName);
}
/**
 * @AccessDecorators
  beisde proeprties you can also add Decorators to accessor(getter or setter)
  this type of decorator receives 3 arguments.
  First argument is same as Property decorator i.e ProtoType of class or Constrcutor Function. 
  then we have name of memebr we 
  are dealing with(name of accessor we are dealing with), at last we have proeprtDescriptor.
*/
function Log66(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Accessor Decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

/**
 * @MethodDecorators are same as Accessdecorators but they are applied to either setter or getter method
 * so arguents that method decorator receives is same as accessor decorator.diffrence is proeprties avalaible
 * on descriptor. In case of method decorator descriptor contains value and writable but in case of accessor
 * decorator we have getter and setter instead of value and writable. configurable and enumerable are present
 * on both
 */
function Log666(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log("Method Decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

/**
 * @ParameterDecorators
 * first 2 arguments are same as Method Decorator.
 * second argument is name of function where argument is used not name of argument
 * third one is position of argument in method signature(start from 0). , 
 */
function Log6666(target: any, name: string | Symbol, position: number) {
    console.log("Parameter Decorator");
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product6 {
  @Log6
  title: string;
  private _price: number;

  @Log66
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid Price - Should be Positive");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log666
  getPriceWithTax(@Log6666 tax: number) {
    return this._price * (1 + tax);
  }
}

/**
 * @DecoratorsLink
 * https://www.logicbig.com/tutorials/misc/typescript.html - Go to this Link and navigate to decorators, there
 *  you will see all types of decorators
 */