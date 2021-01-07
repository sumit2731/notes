//  '.' In regular exp means any character, if you actually mean '.' then you have to use escape character
// so use \. but in case of  range selector, . means ., so you dnt have to use escape character
// '-' is only special character inside the range
//this is my email regular expression-
//[a - zA - Z0 - 9] +@[a - zA - Z]+\.com
// soution given in lecture- [a-zA-Z0-9!#$&_*?^{}~\.-]+@[a-z]+\.com
//note that '-' should be used in end, otherwise it will be  interpreted as range selector
// in above solution we onlly allow alphabets before @. lets also allow special character after that
// so new expression is - [a-zA-Z0-9!#$&_*?^{}~\.-]+@[a-zA-Z0-9!#$&_*?^{}~\.-]+\.com
//now we dnt want to allow email addresses starting with '.', what we want is,
// email adress starting with any charcater other than ., then it may have '.', then it
// may have '.' followed by any other character. '.' should not be in front of '@'
// so '.' is only only allowed if it is proceeded and succees by some other character, that expression is-
//[a-zA-Z0-9!#$&_*?^{}~\-]+[.]*[a-zA-Z0-9!#$&_*?^{}~\-]+@[a-zA-Z0-9!#$&_*?^{}~-]+\.[a-zA-Z]+
// it works fine for this- sumeet.sood@sumeet_sood.com
//what if we want to have more  than 1 ., for mail address like this-
//sumeet.sood.kriti@gmail.com, My solution for this was-
//[a-zA-Z0-9!#$ & _ *?^ {}~-]+[a-zA-Z0-9!#$ & _ *?^ {}~.-]*[a-zA-Z0-9!#$ & _ *?^ {}~-]+@[a-zA-Z0-9!#$ & _ *?^ {}~-]+\.[a-zA-Z]+
// this has problem that expresion needs to have minimum of 3 characters. better solution , shown in video was-
//[a-zA-Z0-9!#$ & _ *?^ {}~-]+(\.*[a-zA-Z0-9!#$ & _ *?^ {}~-]+)*@[a-zA-Z0-9!#$ & _ *?^ {}~-]+\.[a-zA-Z]+
//now we also want to allow email adress like, sumit.sood@gmail.servers.com, use this(my solution)-
//[a-zA-Z0-9!#$ &_*?^{}~-]+(\.*[a-zA-Z0-9!#$ & _ *?^ {}~-]+)*@[a-zA-Z0-9]+[.a-zA-Z0-9-]*\.[a-zA-Z]+
//solution in lecture was-   
//[a-zA-Z0-9!#$ &_*?^{}~-]+(\.*[a-zA-Z0-9!#$ & _ *?^ {}~-]+)*@([a-zA-Z0-9+(a-z0-9-) *\.] + [a - zA - Z] +
//@([a-zA-Z0-9]+([a-z0-9-]*)\.)+[a-zA-Z]+
//now we want our whole expression to be this, so use ^ at begining and $ at end
//^[a - zA - Z0 - 9!#$ & _ *?^ {}~-] + (\.* [a - zA - Z0 - 9!#$ & _ *?^ {}~-] +)*@([a - z0 - 9 + (a - z0 - 9 -) *\.] + [a - zA - Z] +$