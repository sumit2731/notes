/**
 * @TypeCasting is also called Type Asserion
 * Type assertion allows you to set the type of a value and tell the compiler not to infer it
 * It heps you tell tyoescript that some value if of specific type, when
 * typescript is not able to detect it on its own but you as developer know
 * that it will be case. Good example for this is if we get access to something
 * in the DOM.lets see a example
 */

/* Here infered type by ts is HTMLParagraghElement | null 
   because only p tag will be selected by this selector and ts is able to detect it
   and null is because there may not be any element that mathes this criteria
*/
let paragraph1 = document.querySelector("p");

/* 
Here type infered by ts is HtmlElement | null
ts knows that it is some HtmlElement.but it cannot scan our html file and find
out exactly which elemnt it is. so ts assigns it a generic type. but we as a developer 
knows that it is input element.
 
We get a error if try to access value proeprty which exist on HTMLInputElement,
we get error . it is because of 2 reasons, 
    a)first is input1 can be null, we can fix this by adding !
    b)value property does not exist on type HtmlElement because this generic type
    (HtmlElement) does not support properties that are specific to, well specific html elements.
In order to solve it we need to tell ts that element that we select is just not only not null
but also of type HtmlInputElement and that's  what we can do with typecasting.
*/

let input1 = document.getElementById("id1")!;
input1.value = "1";

/* 
There are 2 syntax for typecasting. They are equivalent
HTMLInputElement is globally avalible  because in tsconfig.json in lib section
we have included DOM
*/

let input12 = <HTMLInputElement>document.getElementById("id1")!;

/* 
In React you have this <> in js or ts, where you write jsx code in your
react components. so similar syntax exists in react project and there <> are
not used  to pass any information regardng types you are using but instead they
are parsed by some buid tools and by react ultimately to know what you want to render
on screen.so totally detached from ts. so not to clash wih jsx syntax, ts team provides
alternative to this <> syntax for typecasting.

This syntax tell that expression in front of it will yield value which is of type
HTMLInputElement.

ofcourse since you are forcing typescript to use thus type, it;s your responsibiity
as developer to ensure that whatever this expression yields will be of that type. otherwise'
you might get run time error or unexpected runtime behaviour

lets talk about !, it tell ts that this expression will never yield null. this is required
for some expressions like this here, when we select something from DOM that might return null.
if we as a developer knows that it will never be null then we can use this !, oterwise you can use
if check and ts will recognize this if check and wnt give you error, inside that if statement.

here when we do typecasting we, also handle null case, because there we say it will always be of type
HTMLInputElement, so ! is redundant here
*/

let input131 = document.getElementById("id1")! as HTMLInputElement;
input131.value = "1";

/* 
lets see alternative to using !
Here we do typecasting only when we try to access value property
*/

let input13 = document.getElementById("id1");
if (input13) {
  // (input1 as HTMLInputElement).value = "1";
  (<HTMLInputElement>input13).value = "1";
}

/**
 * @Not Covered in lectures-
 */

/**
 * @Using Type_Casting for type guards. link-
 * https://www.logicbig.com/tutorials/misc/typescript/type-guards.html
 * In below link see section - "Type guards for objects", here you can see that we can use type casting
 * to access properties on Union type.
 */

/**
 * Here without using typecasting we cannot access name proeprty on obj3, because
 * type infered by ts is {}.
 */
class Employee3 {
  name = "sumeet";
}

let obj3 = {};

(obj3 as Employee3).name;
