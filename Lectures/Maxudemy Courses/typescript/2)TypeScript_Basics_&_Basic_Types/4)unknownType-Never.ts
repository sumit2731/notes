/**
 * @Unknown_Type
 * We can assign any type to this variable
 * so how does it diffre from any type?
 */

 let name20: unknown;
 name20 = 'sumeet';
 name20 = 12;

/* 
Difference comes here. In case of any we can do this-
we can assign value which is of type any to other varibale
which is of some specific type, here it is string
*/
let rollNo = 'sood';
let id4: any = 1;
rollNo = id4;
//like wise this is also possible-
let obj: {name: string} = {name: 'sumeet'};
obj = id4;
/* 
*We can do above, because any is most flexible type in ts
it disables all typechecking and ts says I give up do whatever you want
*/

/* 
but in case of unknown type,we cannot do this. we get error that type unknown is not
assignable to type string
*/ 
// rollNo = name20;

/* so unknown is a bit more restrictive than any.we have to check what type of value
 unkbown is holding before we can assign to variable that expexts a type 
*/



/* here we check type then assign value, typescript detects this check
and allows ths assignment.we cannot do this assignment outside if statement
so with unknow we need this extra typescheck to assign unknow type to some variable 
which has some specific type.
but this check is not required we use type any
*/
if (typeof name20 == 'string') {
    rollNo = name20;
}
/* 
so unknown is better choice over any if we are not sure what type of value, variable will hold.
but i know what i want to do with it eventualy. we will just add extra check to make sure
that what you want to do can be done. it is also better than any as you are not allowed to do 
everything, atleast you have some type checking 
*/

/**
 * @Never It is another type that functions can return. Given function does
 * not return anything. so you will say that return type is void. but this is
 * not the case, because this function crashes our script or this part of script
 * (if you are using try catch) so we do not return 
 * anything form this fucntion. so this function never produces the values.so return
 * type of this function, it actually not just void but also never. but infered
 * type is void, this is because never is new type. but you can specify never type 
 * explicitly to make clear to other that this fucntion is intended to never return
 * anything and essentially crash your script or that part of script
 * 
 * Another function whose return type is never is, function with infinite
 * loop
 */

 function generateError(message: string, code : number) {
     throw{message: message, errorCode: code};
 }
  const result = generateError('An Error Occured', 500);
  console.log(result);