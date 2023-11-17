/**
 * How to compile ts file into js
 *
 * a)if you have install typescript compiler globally on your system -
 *  tsc "nameOfFile"
 *
 * 2)Using ts compiler without installing it
 *  npx tsx "nameOfFile"
 */

/**
 * Topics covered -
 *
 * a)basic types
 * b)union types
 * c)object types
 */

/**
 * Now any object can be assign to this we will get error if we try to assign non object type.
 *
 * we can even assign empty object to this
 */
let user: object;

user = {};

user = {
  name: "Sumeet",
  age: 31,
  isAdmin: true,
  id: "abc", //123
};

/**
 * Topics Covered
 *
 * d)array types
 */

let hobbies: Array<string>;

let hobbies2: string[];

hobbies = ["coding", "music"];

/**
 * Adding types to Functions
 *
 * you get error if function return type is void and it is returning something
 * if we do not specify return type typescript infers it automatically. that is preffered way,instead of
 * setting return type manually.
 */

function multiply(a: number, b: number): number {
  return a * b;
}

/**
 * Defining function types.
 * here we defined a function type, and then gave that type to a parameter.
 * then we called that function with already defined function which matched the defined type
 */

type functionType = (a: number, b: number) => number;

//defining function type inside object type
type customType = {
  callback: (a: number, b: number) => number;
};

/**
 * defining function type using interface (Not covered in course)
 */

interface functionType2 {
  (a: number, b: number): number;
}

//defining function type inside a object via interface

interface customInterface {
  callback(a: number, b: number): number;
}

function calculate(a: number, b: number, calcFn: functionType) {
  return calcFn(a, b);
}

calculate(1, 2, multiply);

/**
 * CustomTypes/TypeAlias
 *
 * above we defined a custom type
 */

/**
 * Defining object types with interface
 * 
 * you add curlybraces after name because the interface type is essentially for creating objects.
    I'm saying essentially because you can also define function types with it,but that's not too important here,
    and not something you'll probably use a lot.And, therefore, the most common use case for the interface keyword
    is to define object types
 */

interface Credentials {
  email: string;
  password: string;
}

let creds: Credentials;

creds = {
  password: "abc",
  email: "abc@gmail.com",
};

/**
 * type vs interface
 * 
 * In general you can always use the type keyword, and that also allows you to define other types
    than object types like function type.Interface is more limited when it comes to that,because it's basically 
    limited to object types.
    
    note -you can actually use interface to also define function types but you for example cannot use interface to 
    store a union type.


    Nonetheless, the interface type also has some advantages.For example, if you're defining a class, you can inherit
    the interface.
    
    So this feature where you can implement interfaces into classes can be a reason for using interfaces
    over the type keyword
 */

class AuthCredentials implements Credentials {
  email: string;
  password: string;
  userName: string;
}

function login(credentials: Credentials) {}

/**
 * Here But we could also call login with a new instance of Auth credentials since that also implements credentials,
    and therefore TypeScript knows that this will also be a valid object that has at least the properties and methods
    that are wanted by that interface.
 */
login(new AuthCredentials());

/**
 * Another reason for using the interface keyword for defining an object type is that it's easily extendable.
You can simply redefine the same interface with the same name without getting in an error and add more properties or 
methods to it.Now you might wonder why I would do it like this and not just add it here, but that can be useful if you
are, for example,creating a library which you are sharing with other developers from all over the world,and you have 
your interface definition in some part of your library, but you want to allow those developers to easily extend your
interface. With that feature, which is called declaration merging.

In basically all other scenarios,and therefore, in the end, in most use cases.it therefore doesn't matter. if you use
interface or type and you can use whatever you prefer.
 */

/**
 * Merging types
 */
//using types
type Admin = {
  permissions: string[];
};

type AppUser = {
  userName: string;
};

type AppAdmin = Admin & AppUser;

let admin: AppAdmin;

admin = {
  permissions: ["login"],
  userName: "Sumeet",
};

//using interfaces

interface Admin2 {
  permissions: string[];
}

interface AppUser2 {
  userName: string;
}

interface AppAdmin2 extends Admin2, AppUser2 {}

let admin2: AppAdmin2;

admin = {
  permissions: ["login"],
  userName: "Sumeet",
};

//literal types

let role: "admin" | "user" | "editor";

/**
 * /type guards using if checks and typeof operator -
 *
 * see lectures 22 and 23
 *
 * see code 1 in 1_ts which is based on example given in 23
 *
 */

/**
 * ***********************************Generics*****************************************************************
 *
 * generic types are types that work together with another type. see figure1.
 *
 */

type DataStorage<T> = {
  storage: T[];
  add: (data: T) => void;
};

const textStorage: DataStorage<string> = {
  storage: [],
  add(data) {
    this.storage.push(data);
  },
};

const userStorage: DataStorage<User> = {
  storage: [],
  add(user) {},
};

/**
 you can just define generic types like this with help of the type keyword,instead you can, for example,
 also define a so-called the generic function
*/

function merge<T, U>(a: T, b: U) {
  return {
    ...a,
    ...b,
  };
}

/**
 * here since T and U are derived from argument type, we do not need to speciffy them separately. also ts has
 * all info about type of newUser
 */
const newUser = merge({ name: "Max" }, { age: 34 });
