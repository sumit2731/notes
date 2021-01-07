// Passord Match
//here we will match password, our password needs to be 8 chracaters long
//it should have small case chracter, large character, a special chracater and a number
//lets use this expression - [a-bA-Z0-9!@#$], but we want it to happen at 8 times.
// now if we use [a-bA-Z0-9!@#$]{1,} it is equivalent to [a-bA-Z0-9!@#$]+ 
// what it means is from atleast one match to as many match as you want, what we want is atleast 8 characters
//so this is our expression- [a-bA-Z0-9!@#$]{8,}, here our problem is we can have 8 lower case chracters
// and it will be match, what we want is we want to enfoce all chracters, we cannot do that with 
//range alone, we can do that with look aheads, if we use this-
//[a-zA-Z0-9!@#$]{8,}(?=[a-z]) it means have any 8 charcaters which are in []
//then after them have a small case character so we need to have nine characters and first 8 will be match.
//we know this, this is what lookaheads do, but we dnt want that. we want our string to have atleat one lower case character
//position does not match and we want this lowercase chracter to be matched with this expression- [a-zA-Z0-9!@#$]{8,}
//for that we can put positive lookahead to begining, lets see how this positive
// lookahead behaves in begining of word, pattern - (?=ab)[a-b]+ only ab will match that pattern. this is because
//ab matches both positive lookahead as well as range expression. so if we use positive lookaheads in begining
// string should match them as well as pattern follwing them
//ex- (?=b)[a-z]{2,} it means we should have 2 or more alphabets, but alphabets should start with b
//ex- (?=.+b)[a-z]{2,}, it means we need to have 2 or more lower case alphabets and one of these should be b
// when we use lookshead before a pattern,it means pattern after lookahead should satisfy conditions of lookahead
//mean but we can also use lookaheads like this- (?=[ab])[a-z]+
//now this means there should be characters a or b followed by one or more 
//small case characters, what we want is, we dnt want our string to end with lowercase chracter
// we want to have atleat one lowercase chracter at any positon if we do this-
// (?=[a-b])[a-zA-Z0-9!?]{8,}, then we put condiiton that our pattern should start with alphabet. we want small case to be at any place-
//(?=.*[a-b])[a-zA-Z0-9!?]{8,}, lets put condition for large case and special case chracater-
//(?=.*[a-b])(?=.*[A-Z])(?=.*[0-9])(?=.*[!?])[a-zA-Z0-9!?]{8,} , this is our pattern

//lets see some some our observation, pattern-(?=b)(?=c)[a-z]+ , no string will match this pattern, this is because we want
//first alphabet of matching string should match with pattern  (b), (c) and [a-b]. inshort we want
//our pattern to start with b as well as c , which is not possible.
// if we use this expression- (?=.*b)(?=c)[a-z]+, then cb will be match because it matches (.*b), (c) as well as [a-z]

// with that we saw how positive lookahead behaves in front as well as back of pattern