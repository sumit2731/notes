//regex101.com
//Flags- a)g- global- dnt stop after finding first match
//b) i -insenstive - case insenstive search
// a)(H|h)ello -match Hello or hello
// b)(H|h)? ello - it means part prior to ?, is optional. it matches hello, Hello and ello. we create a
// group by using (). we used ? before a group so that whole group is optional
// c) (H|h)e?llo - Here only e is optional, so only direct chracater before ? is made optional. if you want to make 
// everything optional , you have to make a group like this- ((H|h) e)?llo
 