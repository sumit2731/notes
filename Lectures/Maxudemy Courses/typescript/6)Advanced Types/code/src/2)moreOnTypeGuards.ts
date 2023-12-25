type Admin2 = {
  name: string;
  privileges: string[];
  salary: number;
};

type Employee2 = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee2 = Admin2 & Employee2;

const e2: ElevatedEmployee2 = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable2 = string | number;
type Numeric2 = number | boolean;

type Universal2 = Combinable2 & Numeric2;

/* 
typeGuard helps us with union type because whilst it is nice to have flexibility
often you need to know which exact type you are getting now at runtime.

This is because althrough our function accepts diffrent types, but you do different things
depending upon type of argument.
*/
function add2(a: Combinable2, b: Combinable2) {
  /* This is typeGuard. It allows us to utilize the flexibility union types gives us and
     still ensures that our code runs correctly at run time. we decide what do to based on
     types of parameters. this is typeGuard using typeof. we can also write other types of
     type guard.
     */
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee2 = Employee2 | Admin2;

function printEmployeeInformation2(emp: UnknownEmployee2) {
  /* 
  Both Employee2 and Admin2 have name property, so this will always work
  */
  console.log("Name: " + emp.name);
  /* 
  *here we cannot use typeof, because typeof of argument will always be object, also
  we cannot use - 
    if(emp.privileges)
  ts will give error.
  
  so we use in keyword which is built into js to create our type guard.
  this is js code that allows us to check if a property exists on object
  */
  if ("privileges" in emp) {
    /**
     * here ts narrows down the type of emp to Admin2 because of if check. within this
     * check of can also access other properties that exists on Admin2 type.
     */
    console.log("privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start date: " + emp.startDate);
  }
}

printEmployeeInformation2(e2);

/* when working with classes we can use another type of typeGuad
that is instance */

class Car2 {
  drive() {
    console.log("Driving........");
  }
}

class Truck2 {
  drive() {
    console.log("Driving a truck");
  }

  loadCargo(amount: number) {
    console.log("Loading Cargo...." + amount);
  }
}

type Vehicle2 = Car2 | Truck2;

const v1 = new Car2();
const v2 = new Truck2();

function useVehicle2(vehicle: Vehicle2) {
  vehicle.drive();
  if ("loadCargo" in vehicle) {
    vehicle.loadCargo(10);
  }
  /* This is typeGuard using instanceof. instanceof is javascript operator.
  The instanceof operator tests whether the prototype property of a constructor 
  appears anywhere in the prototype chain of an object.
  
  Classes in ts are compiled to constructor functions in js. however if we use interface
   instead of classes, i.e we provide method defination in objcet via objects literals then 
   instanceof will not work because interfaces are not translated to anything in js. therefor we cannot
   use them at run time
  */
  if (vehicle instanceof Truck2) {
    vehicle.loadCargo(10);
  }
}

/**
typeguard is just a term that describes the idea or approach of  checking
if certain proeprty or method exist before you try yo use it or if you can do something
with the type before you try to use it.
*/

/**
 @Discrimiated_Unions - https://www.totaltypescript.com/discriminated-unions-are-a-devs-best-friend
Special type of typeGuard you could say or something that helps you with typeguards
is discriminated union. it's pattern which you can use when you are working with union 
types that makes implementing type guards easier. it is avalible when you work with object types
*/

/* 
lets say we have couple of interfaces, it will work with classes too, I want to show you
that it works with interfaces too
*/

interface Bird {
  /* 
  we re not assigning value to type, we are assigning
  it type. which is literal type 
  */
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  /* 
  We can do it like this, but 
    a)we do typing mistake while typing property name
    b)with the incerase in number of animals we will have lot of if conditions
  Here we cannot use 'instanceof' because we are working with interfaces(interfaces 
  are compiled to nothing in target js, so at run time we do not have it as constructor
  function)
  
  We can solve this problem by building a discriminating union by giving every interface,
  so every object which should be part of that union an extra proeprty. you can use any name you want
  often you use kind or type. now we cannot give value to proeprty in interface, so we are giving it
  literal type.
  */
  /* if ('flyingSpeed' in animal) {
    console.log("Moving with Speed: " +animal.flyingSpeed);
  }
  if ('runningSpeed' in animal) {
    console.log("Moving with Speed: " + animal.runningSpeed);
  } */
  let speed;
  switch (animal.type) {
    /* 
    Here we will get autocompletion, because ts understands
    what values type variable can hold
     */
    case "bird":
      /* 
      here Inside bird case, we will get suggestions for Bird iterface
      properties, because ts knows that if we re in this block object is
      of type Bird
      */
      speed = animal.flyingSpeed;
      break;

    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log("Moving at speed: " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 20 });

/**
This is Discriminated Union because we have one common property
in every object that makes up our union, which describes that object,
so that we can use this property , that describes this object in our
check to have 100% typesafety to check which properties are avalible 
for such an object and which properties are not. so this is useful pattern
that you can use when working with object types.

so instead of checking for existance of a given property or instead of using
instanceOf, we use a property , we know will exist, to check type of object we are
working with.

we also eliminate the danger of mistyping because ts understands that the only 
cases we can have here are Bird and Horse, hence it gives autocompeltion. if we 
do typo, we will error.
*/

/**
 * @Not_Covered_in_course
 */

/**
 * @Using Type_Casting for type guards. link-
 * https://www.logicbig.com/tutorials/misc/typescript/type-guards.html
 * In below link see section - "Type guards for objects", here you can see that we can use type casting
 * to access properties on Union type.
 */

/**
@Type_Predicates (This is not covered in Max's Course)

  https://www.logicbig.com/tutorials/misc/typescript/type-guards.html

Type predicates are a special return type that signals to the Typescript compiler what type a particular value is. 
Type predicates are always attached to a function that takes a single argument and returns a boolean.
Type predicates are expressed as argumentName is Type. 

Type Pradicates are also called User-defined Guards

see link-

https://dev.to/daveturissini/aha-understanding-typescript-s-type-predicates-40ha
https://fettblog.eu/typescript-type-predicates/#:~:text=Type%20predicates%20in%20TypeScript%20help,paramter%20to%20something%20more%20useful.
*/

class Car {
  drive() {
    console.log("car driving");
  }
}

class Bike {
  ride() {
    console.log("Bike ridding");
  }
}

function isCar(vehicle: Bike | Car): vehicle is Car {
  return (vehicle as Car).drive != undefined;
}

function move(vehicle: Bike | Car): void {
  if (isCar(vehicle)) {
    vehicle.drive();
  } else {
    vehicle.ride();
  }
}
