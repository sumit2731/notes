/**
 * @OptionalChaining
 * Letss say we are fetching this object from api, then we wnt be sure
 * if some properties exist on it or not
 * 
 * here ts kows which proeprties exists and which does'nt do it can gives us 
 * errors but if this object is fetched from backend then ts has no clue
 */

const fetchedUserData = {
  id: "u1",
  name: "Max",
  job: { title: "CEO", description: "My Own Company" },
};

/* 
This is how we handle it in javascript to avoid run time errors in js.
if job does not exist whle expession returns undefined
*/

console.log(fetchedUserData.job  && fetchedUserData.job.title);

/**
 * with ts we actually got a nicer way of doing this,you got the optional
 * chaining operator. you can add question mark after the thing you are
 * not sure whether it's defined or not(in ts version 3.7 or higher)
 * 
 * it means if fetchedUserData exists then access fetchedUserData.job
 * and if fetchedUserData.job exists then access fetchedUserData.job.title.
 * 
 * Optional chaining helps us safely access nested properties and nested objects
 * in our object data. and if thing in front of ? is undefined, it will not access
 * the thing after and therefore it will not throw runtime error but instead it
 * will just not continue.
 * so behind the scenes it is basically compiled to if check which checks whether fetchedUserData.job
 * exists before it tries to access fetchedUserData.job.title
 * 
 * here if we remove job property form defination of fetchedUserData then we get error,
 * because here ts knows for sure that job proeprty does not exists on this object.
 */

 console.log(fetchedUserData?.job?.title);


 /**
  * @NullishCoalescing helps us to deal with  nullish Data.
  */

  /* we are not sure if it is udefined, null or it is valid piece of data
  if we have defined it in ts then ts knows what it is, lets say we get it
  from DOM, or api call then ts is not sure about it.
  */
 const userInput = '';

 /* now lets say we wan to store in some other variable and if it is null
 we want to have fallback value, we can do this in js by this- 
 */

// const storedData = userInput || 'DEFAULT';

/* problem wih this is is that we want fallback vaue only when userInut is null
here we will get fallback value even for all falsy values of storedData
for such cases we can use ?? (NullishCoalescing) operator.

it mean use fallback value only if userInpg is undefined or null
*/

const storedData = userInput ?? "DEFAULT";