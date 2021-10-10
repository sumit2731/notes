/* 
Problem Statement
*/

// old interface
class TruthAndDare {
    constructor(){
      this.turn = Math.floor(Math.random() * 2) + 1;
    }
    Getturn(){
      if(this.turn == 1){
        this.turn = 2
      }else{
        this.turn = 1
      }
      return this.turn
    }
    playGame(playerOnename,playerTwoname){
      if(this.Getturn() == 1){
        return`${playerOnename}'s turn`
      }else{
        return `${playerTwoname}'s turn`
      }
    }
  }
  
  const obj = new TruthAndDare()
  console.log(obj.playGame("Ross","Chandler"))

  /* 
  One thing to note is that the players are used to using the playGame function and you want to quietly make the modifications
   without changing the outlook that the players are used to. For this purpose, you need to use the adapter pattern so that 
   the players can keep on calling playGame, but the new functionality is implemented on the backend instead.

  Sample input-
    const obj = new Adapter(6) //pass even/odd values here to see varying results
    console.log(obj.playGame("Ross","Chandler"))

  Sample Output -
    "Rolling the dice"
  
*/


/* 
Solution -
*/

// new interface
class NewTruthAndDare {
    constructor(randomValue){
        this.turn = randomValue
    }
   
    newplayGame(playerOnename,playerTwoname){
      if((this.turn % 2) == 0){
        return `${playerOnename}'s turn`
      }else{
        return `${playerTwoname}'s turn`
      }
    }
}
  
// Adapter Class
class Adapter {
    constructor(randomValue) {
        const newGame = new NewTruthAndDare(randomValue);
        
        /* 
        Finally, we make sure that the interface does not change for the players. This means they can keep calling playGame
         without knowing that the method to randomize turns has changed or the function name has changed to newplayGame
        */
        this.playGame = function(playerOnename,playerTwoname) {
            return newGame.newplayGame(playerOnename,playerTwoname)
        };
    }
}