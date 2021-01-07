// Ranges (Character Sets) and Quantifiers

//Ranges
// [ts] - It means look for t ans s induivally. dnt look for ts. here they are treated standalone
// it says match all t, match all s. t and s dnt need to be connected
//[a-z]= match all characters individually
// [a-zA-Z0-9] - match all numbers and characters

//Qunatifiers
//a+ - it means  one or more instances of a will be treated as single match. because of this, aaaa will be
//one match otherwise if we use just a, they will be 4 diffrent matches

//a? = 0 or 1 match. aa - it is 2 matches

// a* - 0 or unlimited amount

// any quantifier only applies to charaxxter or group before it
//[a-zA-Z]+ - any number of characters coming after each other are treated as one match. AzzS is one match

//[a,s,d]+
// it means any number of characters that are either a ,s or d. when occur after each other they
// will be treated as one match