/**
 * @IndexProperties gives us flexiblility about how many properties we want to have in object 
 * and what is their name
 * ts docs link - https://www.typescriptlang.org/docs/handbook/interfaces.html#indexable-types
 * there we talk about 2 operators- "index type query" and "indexed access" operators:
 */
interface ErrorContainer4 {
    /*
    we define index proeprties by using [], inside them we have any name of your choice
    like key or prop then colon, then we have vaue type of the property. in a object we
    can have string, numbers and symbols as a property. you for exmpale cnt use boolean here.
    here we use string. with that we are saying in this object must have proeprties which are 
    strings, like name is valid string even if dnt wrap it in "".

    then we add a colon then we give value type. with that we say we dnt know exact property
    name , I also dnt know exact proeprty count. we just know that every property which is added
    to this object, can be interpreted as a string and the value for that proeprty also must be a
    string.

    with that we still can also add predefined properties,however only if they
    are of same type as this.so we add id proeperty. so object will now have id property and it 
    can add as many other properties as it wants. type of id needs to be string only, as we
    have index type property which is of type string, so it is a retrction
    */
    [prop: string]: string;
    //type of id needs to be string
    //id: number;
    //id: string;
}
/* 
If we do not add any property i.e if it is empty object, then also it is fine
but now we can add any number of properties
*/
const errorBag4: ErrorContainer4 = {
    id: '1',
    email: 'sumitsood2gmail.com',
    /* 
    In interface we defined that properties can only be string, but 1 is number
    but here 1 is interpreted as string, so we can use numbers as string types.
    so anything that can be converted into string is a valid proeprty name.

    but if in interface we define we can only have number proeprties, then you
    cannot have string as proeprty. because string like 'name' cannot be converted into
    number
    */
    1: 'name',
    username: 'username1'
};

interface ErrorContainer42 {
    [prop2: number]: string
}

const errorBag42: ErrorContainer42 = {
    1: 'Here property can only be number, because that is what we define in interface'
}


/**
 * @Usecase for Index proeprties
 * Let's say we are writing a application where we are validating user inputs,
 * so you have multiple input fileds and depending on what user enters there
 * and which field it is, you might want to store and eventually show diffrent 
 * error messages. 
 * 
 * so we have interface ErrorContainer, it should be flexible regarding what it holds.
 * it will have id of input's as proeprty of object and value of property will be error
 * message that we want to display. the problem is we dnt know in adve which property 
 * names I will have as i want it to be flexible and use it for any form on my web page.
 * so I will have forms with diffrent inputs id's. also if input is valid, then that input
 * should not be part of our object.
 * 
 * so i want a object where I am very clear about value type(it should be string) but
 * where I dnt know in advance how many proeprties I will have and which names 
 * properties will have
 */



/**
 * @Index properties in class
 */

  class Company {
    [t: string]: number;
  }

  let c1 = new Company();

  c1.id = 1;

   
  /**
   * @keyof operator
   * Link - https://mariusschulz.com/blog/keyof-and-lookup-types-in-typescript
   * for code see, file 8)
   */
  
  /**
  @Uses of 'in' operator and Mapped Types
  see link -https://stackoverflow.com/questions/50214731/what-does-the-in-keyword-do-in-typescript
  see link - https://www.typescriptlang.org/docs/handbook/advanced-types.html#mapped-types
  for code ee file 8)
  */
  
  class Employee4 {
     id = 1;
     name = 'Sumeet';
 }
/* 
It can only ne used for type, it will fail in case of class
*/
 type Person4 = {
     [t in (keyof Employee4)]?: string
 }

 let person: Person4 = { name: 'sumeet'};




 // Use this:
type PartialWithNewMember4<T> = {
  [P in keyof T]?: T[P];
} & { newMember: boolean }

// **Do not** use the following!
// This is an error!
/* type PartialWithNewMember41<T> = {
  [P in keyof T]?: T[P];
  newMember: boolean;
} */

