/**
 * Hint 1
 * 
 * You can immediately conclude that the input arrays don't represent the same BST if their first values aren't equal to each 
 *  other, since their first values represent the root of the BST. Similarly, you can conclude this if their lengths are    
 * different. If their first values are equal to each other and their lengths are the same, what should your next step be?
 * 
 * Hint 2
 * 
 * Given an array of integers, all of the values in the array that are smaller than the first value in the array are located 
 * in the left subtree of the BST that the array represents, and all of the values in the array that are greater than or equal
 * to the first value in the array are located in the right subtree of the BST that the array represents. Use this fact and 
 * Hint #1 to recursively determine whether all subtrees in the BSTs represented by the arrays are equal to each other.
 * 
 * 
 * Hint 3
 * 
 * Write a recursive function that takes in two arrays of integers. If the first values of the arrays aren't equal to each other
 * or if the arrays don't have the same length, the arrays don't represent the same BST. If the first values and lengths are 
 * equal to each other, respectively, perform the following actions on both arrays: gather all integers that are smaller than 
 * the first integer; these form a new array that represents the left subtree of the relevant BST; gather all integers that are
 * greater than or equal to the first integer; these form a new array that represents the right subtree of the relevant BST. Call
 * the recursive function twice: once with the two left-subtree arrays and once with the two right-subtree arrays.
 * 
 * 
 * Hint 4
 * 
 * Do you actually need to create all of the auxiliary arrays mentioned in Hint #3?
 */


/**
 * Time Complexity - O(n *n)
 * Space Complexity - O (n)
 * This solution is what you want to aim for in interview. second solution is sbit difficult and you might not be able to come 
 *  with it in given time but it is worth talking about it.
 */

function sameBsts(arrayOne, arrayTwo) {
    if((arrayOne.length == 0) && (arrayTwo.length == 0)) return true;
    if((arrayOne.length != arrayTwo.length) || (arrayOne[0] != arrayTwo[0])) return false;
    /**
     * leftSubArray1 - this has all values smaller than current root. so it all the arrays that will be used in left subarray
     */
    let leftSubArray1 = [], rightSubArray1 = [], leftSubArray2= [], rightSubArray2 = [];
    
    for(let i = 1; i< arrayTwo.length; i++) {
      if(arrayOne[i] < arrayOne[0]) leftSubArray1.push(arrayOne[i]);
      else rightSubArray1.push(arrayOne[i]);
      if(arrayTwo[i] < arrayTwo[0]) leftSubArray2.push(arrayTwo[i]);
      else rightSubArray2.push(arrayTwo[i]);
    }
    return (leftSubArray1.length == leftSubArray2.length) && (rightSubArray1.length == rightSubArray2.length) && sameBsts(leftSubArray1, leftSubArray2) && sameBsts(rightSubArray1, rightSubArray2)
  }
  
  // Do not edit the line below.
  exports.sameBsts = sameBsts;

  