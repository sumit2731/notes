//Grouping
// we make group by parenthesesis- (as), it means look for a followed by s. same can be achieved by as, so what is use of groups?
//[as] means s or p
// lests say you want to make both a and s optional, here is where groups become handy
//use -(as)?, if we dnt use group i.e as?, here only s is optional
//if we use () like this, then it is called capturing group
// Capuring group means that expressions found by this regular expression, so by
//bt regular expression enclosed in (), is kind of stored and you can refer it again with
//backslash \ and number, where number relates to the group, so first group is number 1 and so on
//ex1- (ab)\1 this is same as (ab)(ab)
//ex2- (ab)@\1 , this is same as (ab)@(ab)

// here what we mean is whatever you found in first group should be used again.
// now this is not a way to be lazy and write somethig once and repeating it.
// it's not just referiing to some check here but also to what it found
// it will be clearer if use range, now ([a-z])@\1 will not match
//a@b, but it will match a@a or b@b. so we are looking for what excatly it found in 
// in first group, so \1 does not mean repeat the previous rule. it means
// what was matched to first group
//if we use ([a-z]+)@\1 then it will match abc@abc. this is because 
//so these capturing groups, capture the thing that was matched not the pattern
//so if we refer to them again with \1 or \2 , we are refering to exact match
//we dnt use these that often
// lets say we dnt want to use these capuring groups, then to improve performance
// we can use '?:' at begining of group to tell that we do not want result to be stored
//ex - (?: [a - z] +)@, here we say that everything matched in this group, should
//not be captured, so it is a non-capturing group now.

//another type of group that we have is positive group ahead, we can create it by using ?=
//positive look ahead could be you say i want to treat something as a match if it is followed by something
//ex- a(?=[a-z]+), string- ababadf here all a's will be matched, b's will not be matched
//because and that is important thing about look aheads
//part  you are looking at, the part in the group is not included in the match, it's just part of matching
// algorithm, it says match should be any a which is followed by rules defined by this group
//where result of group is not included in the match, that is why b is not part of match
//this can be useful in validating passowrds, in paswords you need lower case, upper case and special character
//here order of characters does'nt matter to us, but in default order does matter in regu;ar expressions
//by lookaheads we can say match anything which is follwoed by let's say special chracter which is
//followed by lowercase character, and by combining these look aheads correctly we can basically create
//alternatives, where we can say that we need to have one special character, one smallcase chracter
//but exact postion dos'nt matter