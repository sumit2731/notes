// from last lectures =, we kow what this means-
//[a-z]+[0-9]+[A-Z]+! = abcdefghi797799WEER!
// now problem is it will look for this patttern anywhere in string and it will match
// if this pattern is present any where in string but we want our sting to start and end with this pattern
//for that we have 2 special characters- ^ and $, lets us ethem-

//^[a-z]+[0-9]+[A-Z]+!$
//^ means word should start with this pattern, ^sumit, it means string should start with ^
//$ means end of string should be this, sumit$ it means string should end with sumit
//if we use them togather , then our whole string should be this, in line no 7 we 
// that our whole string should be this