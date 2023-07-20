//----------------Block1 ----------control jumps to closeset error handler

/* 
 When a promise rejects, the control jumps to the closest rejection handler. 
*/

function p1(num1) {
    return new Promise((resolve,reject) => {
        if(num1 === 4) throw new Error("sumeet");
        setTimeout(() =>resolve(2*num1),1000)
    });
}

/* 
 * example 1, promise rejects, the control jumps to the closest rejection handler in promise chain missing all then blocks in between. here since
   we have  provided second callback for error handling(line *), control does not go to catch, but goes to error handler defined 
    at line *, then to next resolve handler(line **).value passed to this resolved handler is undefined as we did not return
    anyhing from reject handler at line *, but if we remove it then control goes to nearest catch block i.e lien ***
 */

    p1(1)
      .then((num1) => { //2
        return  p1(num1)
      }) 
      .then((num2) => { //4
        return p1(num2)
      }) 
      .then(
        (num3) => p1(num3),
        (error) => 8 //*
      )
      .then((num4) => { //*
        return console.log("control in then block" + num4);
      }) 
      .catch((error) => {
        return console.log("Error " + error)
      }); //***

//-------- Block2--------- rethrowing of error

/* 
Example 2 - first reject handler at line * is exected, form here we again throw error, so it goes to next nearest handler i.e line **. handler at line **
handles the error, so ten controls goes to next resolve handler i.e at line ***
*/

p1(1).then(num1 => p1(num1)) //2
     .then(num2 => p1(num2)) //4
     .then(num3 => p1(num3), error => { // this is closest handler, so this will be executed *
        console.log("This is Error");
        throw new Error("This is Error") // error thrown will be caught in netx error handler
     }) 
     .then(num4 => console.log(num4)) 
     .catch(error => console.log("Catch Block " +error)) //**  this catches the error. as catch blocks finishes normally,  So the next successful .then handler is called
     .then(() => console.log("Then is executed")) // *** this will be called



// let p1 = new Promise((resolve, reject) => setTimeout(() => reject(1), 5000))


/**
 * If promise does not fail then catch is not executed in this case, .catch returns the orignal promise only
 */
