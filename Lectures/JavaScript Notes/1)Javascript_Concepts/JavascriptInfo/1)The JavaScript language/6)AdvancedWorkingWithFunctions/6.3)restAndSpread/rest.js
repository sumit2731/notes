/* 

When we see "..." in the code, it is either rest parameters or the spread syntax.There’s an easy way to distinguish 
    between them:

    When ... is at the end of function parameters, it’s “rest parameters” and gathers the rest of the list of 
        arguments into an array.
    When ... occurs in a function call or alike, it’s called a “spread syntax” and expands an array into a list.

The rest of the parameters can be included in the function definition by using three dots ... followed by the name of
 the array that will contain them. The dots literally mean “gather the remaining parameters into an array”.


We can choose to get the first parameters as variables, and gather only the rest.


The rest parameters must be at the end
*/


function showName(firstName, lastName, ...titles) {
    alert( firstName + ' ' + lastName ); // Julius Caesar
  
    // the rest go into titles array
    // i.e. titles = ["Consul", "Imperator"]
    alert( titles[0] ); // Consul
    alert( titles[1] ); // Imperator
    alert( titles.length ); // 2
  }
  
  showName("Julius", "Caesar", "Consul", "Imperator");



/* 
Rest vs argumnets

    In old times, rest parameters did not exist in the language, and using arguments was the only way to get all 
     arguments of the function. And it still works, we can find it in the old code.

    Diffreneces -

        But the downside is that although arguments is both array-like and iterable, it’s not an array. It does not 
            support array methods, so we can’t call arguments.map(...) for example.

        Also, it always contains all arguments. We can’t capture them partially, like we did with rest parameters.

        Arrow functions do not have "arguments"

    
    So when we need these features, then rest parameters are preferred.
  

 

  
  
  
  */