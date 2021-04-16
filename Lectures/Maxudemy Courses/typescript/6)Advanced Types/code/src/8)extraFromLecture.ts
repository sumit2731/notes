
/**
 * ts docs - https://www.typescriptlang.org/docs/handbook/advanced-types.html#index-types In docs also see - @indexed_access_operator
 * @keyof T,the @index_type_query_operator For any type T, keyof T is the union of known, public property names of T
 * It returns a union type, which has literal values as induival types.
 * https://mariusschulz.com/blog/keyof-and-lookup-types-in-typescript(code is beow)
 */

 interface Todo {
  id: number;
  text: string;
  due: Date;
}

/**
 * @Below keyof expression is equivalent to -
 * 
 * type TodoKeys = 'id' | 'text' | 'due'
 * 
 */
type TodoKeys = keyof Todo;


/**
 * Now lets see example which uses keyof. below means key should be a property
 * present in obj. 
 * it means of k is of union of literals values.these literals are name of properties
 * of  object which if of type T,now this union type can have all proeprties or it can have
 * some proeprties. for example see defination of Pick and in docs see example of pick,
 * you will corelate
 * 
 * because of this ts can also infer return type of function
 */

function prop<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const todo = {
  id: 1,
  text: "Buy milk",
  due: new Date(2016, 11, 31),
};



/**
 * Here ts also infers return type, it will be of type, T[k]
 */


const text = prop(todo, "text"); // string
const due = prop(todo, "due"); // Date

 let argu: 'id' | "text" = "id";

const id = prop(todo, argu); // number

//this gives us error, becaus name property does not exist on todo and IDE detects and and shows error-

//const name = prop(todo,"name");

/*
--------------------------------------------------------------------------------------------------------------------------------------

/**
 * @Mapped Types- TypeScript provides a way to create new types based on old types — mapped types
 * (It workks only for type not for interface and class). see below link
 * https://www.typescriptlang.org/docs/handbook/advanced-types.html#mapped-types
 */

 //Let’s take a look at the simplest mapped type and its parts:

type Keys = 'option1' | 'option2';
/**
 * This is equivalent to-
  type Flags = { 
      option1: boolean;
      options2: boolean
   };
 */type Flags = { [K in Keys]: boolean };




/**
 * @Use of 'in' keyword in ts (and  Mapped types)
 * 
 * 1)it can used as type guard, see lecture 2)moreOnTypeGuards
 * 2)it is used in union types
 * 2)An alternative meaning of in in typescript is in mapped type definition. You can read about them in the-
 *  https://www.typescriptlang.org/docs/handbook/advanced-types.html#mapped-types. here this in syntax is explained
 * The in keyword is used there as part of the syntax to iterate over all the items in a union of keys.
 */ 


//partial are defined like this-

interface Person {
    name: string;
    age: number;
}
type Partial8<T> = {
    [P in keyof T]?: T[P]; // P will be each key of T
}
type PersonPartial = Partial8<Person>; // same as { name?: string;  age?: number; }

type unionType1 = 'name' | 'age';
type unionType2 = keyof Person;
// it is only possible for type, it will not work for other cases

type newPartial = {
    [p in ('name' | 'age')]: boolean
}
let obj1: newPartial = {
    name: true,
    age: true
};

let obj111: Partial<Person>;




interface PageInfo {
    title: string;
}

type Page = 'home' | 'about' | 'contact';

const x: Record<Page, PageInfo> = {
    about: { title: 'about' },
    contact: { title: 'contact' },
    home: { title: 'home' },
};