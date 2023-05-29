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
 * Space Complexity - O (d)
 */

function sameBsts(arrayOne, arrayTwo) {
    if((arrayOne.length != arrayTwo.length) && (arrayOne[0] != arrayTwo[0])) return false;
    /**
     * rootIndex1 - index of currentRoot node of first bst subtree
     * rootIndex2 - index of root node of subtree of second array
     */
    function sameBstsHelper(min,max, rootIndex1, rootIndex2) {
        if((rootIndex1 == undefined) && (rootIndex2 == undefined)) return true;
        if((rootIndex1 == undefined) || (rootIndex2 == undefined)) return false;
        let currenRoot1 = arrayOne[rootIndex1], currenRoot2 = arrayTwo[rootIndex2];
        if(currenRoot1 != currenRoot2) return false;
        let leftRootIndex1, leftRootIndex2, rightRootIndex1, rightRootIndex2;
        for(let i = rootIndex1+1; i < arrayOne.length; i++) {
            if(!leftRootIndex1 && (arrayOne[i] < currenRoot1) && (arrayOne[i] >= min)) leftRootIndex1 = i;
            if(!rightRootIndex1 && (arrayOne[i] >= currenRoot1) & (arrayOne[i] < max)) rightRootIndex1 = i;
            if(leftRootIndex1 && rightRootIndex1) break;
        }
        for(let i = rootIndex2+1; i< arrayTwo.length; i++) {
            if(!leftRootIndex2 && (arrayTwo[i] >= min) && (arrayTwo[i] < currenRoot2)) leftRootIndex2 = i;
            if(!rightRootIndex2 && (arrayTwo[i] >= currenRoot2) && (arrayTwo[i] < max)) rightRootIndex2 = i;
            if(leftRootIndex2 && rightRootIndex2) break;
        }
        return sameBstsHelper(min,currenRoot1,leftRootIndex1,leftRootIndex2) && sameBstsHelper(currenRoot1,max,rightRootIndex1,rightRootIndex2);
    }
    return sameBstsHelper(-Infinity, Infinity,0,0);
}

console.log(sameBsts([10, 15, 8, 12, 94, 81, 5, 2, 11],[10, 8, 5, 15, 2, 12, 11, 94, 81]));

  
// Do not edit the line below.
exports.sameBsts = sameBsts;