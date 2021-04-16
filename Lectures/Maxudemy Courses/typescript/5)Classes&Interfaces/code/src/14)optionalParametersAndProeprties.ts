interface Named14 {
  readonly name?: string;
  /* 
  We can define optional properties in Interfaces as well as
  in Classes. we do it by adding ? at the end of property name.
  it means whatever class or object implements this interface it may
  or maynot have outputName
  */
  outputName?: string;
}
interface Greetable14 extends Named14 {
  greet(phrase: string): void;
}

class Person14 implements Greetable14 {
  /* 
  This property is optional. because we may not get value of name
  in constructor. lets make it optional in constrictor too
  */
  name?: string;
  age = 30;

  /* 
  Here in cosntructor passing argument should be optional, because it is
  fine if we dnt want to have name property. so we can make passing argument
  to constructor optional by either using? or by giving it some default value. this
  is true for not only constructor but for any function
  */
  constructor(n?: string) {
    if (n) {
        this.name = n;
    }
  }

  greet(name: string) {
    console.log(`Greetings {$name}`);
  }
}

let user14: Greetable14;

user14 = new Person14("Max");
user14 = new Person14();

user14.greet("Max");


/* 
syntax for defining optional functions in interface.
we can make them optional by adding '?' after
function name like-
    validation?: (flag: any) => boolean;
*/

/** 
@Compiling_Interfaces_to_Javascript
If we look in js files, there we wnt find interface keyword, or name of 
any interface(like Greetable14). this is because there is no transltion for interfaces,
js does'nt know or understands interface. It is ts feature which is only avalible during development,
which helps us to write better code. At the run time, there will no race of interfaces. they are simply
dumped, you could say. They are used during compilation to check your code and they are ignored
*/