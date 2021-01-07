interface Named13 {
    readonly name: string;
}

/* 
Here whatever class implements Greetable13 needs to have name variable and
greet method. This is because Greetable inherits Named13. also a interface
unlike class can extend multiple interfaces. THis is bacause interface is pure
ts feature, it is not translated to js, therefore we can break the rules setup
for Javascript Classes and extend multiple interfaces.
*/
interface Greetable13 extends Named13 {
  greet(phrase: string): void;
}

class Person13 implements Greetable13 {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(name: string) {
    console.log(`Greetings {$name}`);
  }
}

let user13: Greetable13;

user13 = {
  name: "Sumeet",
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};
user13 = new Person13("Max");

user13.greet("Max");

/* 
I mentioned that Interfaces are used to define the structure of
object, now intrefaces can also be used to define the structure of
a function. so basically as a replacement of function type, you 
already learnt about. functions are objects in the end
*/

// type AddFn13 = (a: number, b: number) => number;

/* 
This is alternative to defining function type. but it is
not used commonly.
Syntax is just like we defined normal function in our Interface or Class,
only differnce is we do not give name to function. so we have annonymous function
if you want to call it like this.
*/

interface AddFn13 {
    (a: number, b: number) : number;
}

let add13: AddFn13;
add13= (n1: number, n2: number) => {
    return n1+n2;
}
