/* 

  Given an array of positive integers representing the values of coins in your
  possession, write a function that returns the minimum amount of change (the
  minimum sum of money) that you   create. The given coins can have
  any positive integer value and aren't necessarily unique (i.e., you can have
  multiple coins of the same value).

  input - [1,2,5]
  output - 4
*/ 

function nonConstructibleChange(coins) {
  coins.sort((a, b) => a - b );
	
	let currentChangeCreated = 0;
	for(let coin of coins) {
		if(currentChangeCreated + 1 < coin) return (currentChangeCreated + 1);
		else currentChangeCreated += coin; 
	}
	return currentChangeCreated + 1
}