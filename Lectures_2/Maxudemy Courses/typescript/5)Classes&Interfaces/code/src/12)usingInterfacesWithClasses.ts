/*
In last lecture we saw we can use interface to give types ot object.
but we can do same thing by defining custom types. in ts-
type Person12 = {
  name: string;
  age: number;
  greet(phrase: string): void;
}
now also we can give types to our object.rest all code remains. so why Interface
exists? interface and customType are not exactly same. they can be used interchnagably
some times, but here are some diffrences.
    
1)Interface can only be used to define structure of Object.you can use type for that
  as well but inside of a custom type you can also store other things like union types
  or so on, like we did it earlier in our course(i.e custom type is used to store union types also).
  it sounds like type are more flexible but other side of coin is that interface is clearer, when 
  you define something as interface, it's super clear that you want to define the structure of an 
  object with that.mostly we use interfaces to define structure of objects.
    
2)Another things that you can do with interfaces but you can also do with types
  is that you can implement interface in a class.

3)Later in this section, we will see how we can use interfaces to define types of functions.

Reason you work with interface is that interface can be used as a contract. A class can
implement a interface and then class has to adhere to the contract of interface. lets
change name of our interface and see how can a class implement it.


*/
/* interface Person12 {
  name: string;
  age: number;
  greet(phrase: string): void;
} */

interface Greetable12  {
  /*
  *Yo cannot use public and private modifers inside inteface but
  you can use readoly. it means whatevers object you build based on
  this interface must only be set once and is read only thereafter, so it
  cannot be chnaged after object has been intialization. raedOnly is also
  avalible if you define your custom type using type keyword.
  */
  readonly name: string;
  greet(phrase: string): void;
}
/* 
A Class can implement more than 1 interface in a class. but you can
inherit only 1 class. In a class we can have extra functionality that are not part of
interface but we need to atleast have those mebers which are specified in interface.

Note that class can also implement a custom type. so Greetable12 can be a custom type
and our class can implement it. In initial days of ts it was not possible to implement
custom types but now we can.
*/
class Person12 implements Greetable12 {
    name: string;
    age = 30;
    
    constructor(n: string) {
        this.name = n;
    }

    greet(name: string) {
        console.log(`Greetings {$name}`);
    }
}
/* 
What is use of interface? we can use it to assig types to our object
*/
let user12: Greetable12;
/* 
When ever we initialize it should have only that properties which are mentioned in Interface
It cannot have extra properties
*/
user12 = {
  name: "Sumeet",
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
};
/* 
It is okay because Person12 impelments the Greetable. so that is another powerfull
 - you can use in a interface as a type on some constant or varible which will then
 actually store another class instance,but this class has to implement the interface.

 what is use of interface? user12 is of type Greetable12, so we know that greet method
 will exist on it and we can call it.
*/
user12 = new Person12("Max");
/* 
Cannot do this as name is defined readOnly in  Greetable12 interface
note that in Class Person12 we have not defined name as readonly so it
is taking that from interface
*/
// user12 .name = 'Sumeet Sood';
user12.greet("Max");

/* 
Why would we want to use interface?

it is useful in situations like this- where we know we want to have a certain set of functionalities,
let's say greet method and we want to ensure that a class has such a greet method and another class
has it maybe as well.Well then we can implement an interface which forces the existence of this method.
So then we can easily share functionality amoungst classes and every class has to add its own implementation,
the exact code that should be execute when the method is called but we enforce a certain structure with the help of 
interfaces and this can be useful , if we have then have other parts of our code which then rely on that structure.
Here we said user12 to be of type Greetable12 and with that we say we don't care what's inside user12
(it stores instance of Person12, so it has some other properties) but what has to be in there is greet method and 
we know  that it has to be in there because whatever we store in user one has to be Greetable12.And that allows us 
to write truly powerful and flexible code  where we don't have to know everything about an object or everything about
a class but we just know whatever I'm getting here in user12 , has to have a greet method.

We don't care whether a person has anything else. here we're interested in greet(user12.greet) and hence 
we give type Greetable12 to user12 and therefore we can't store anything in user12 which would not have greet method, 
because Greetable forces whatever you base on it to have such a read method.
*/