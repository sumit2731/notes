/* 
*Given 2 binary tress, check whether they are equl or not
*/

/* 
My Solution
*/
function equalBST1(tree1, tree2) {
    let root1 = tree1.root;
    let root2 = tree2.root;
    if(root1.value !== root2.value) return false;
    let q1,q2;
    let node1,node2;
    q1.push(root1);
    q2.push(root2);
    while(q1.length > 0 && q2.length) {
        node1 = q1.shift();
        node2 = q2.shift();
        if(node1.left !== node2.left) return false;
        if (node1.right !== node2.right) return false;
        if(node1.left) {
            q1.push(node1.left);
            q2.push(node2.left);
        }
        if(node1.right) {
            q1.push(node1.right);
            q2.push(node2.right);
        }
    }
    if(q1.length == q2.length) return true;
    else return false;
}

/* 
Tushar's Solution(better 1)
*/
function equalBST2(root1, root2) {
    if(root1 == null && root2 == null) return true;
    if(root1 == null || root2 == null) return false;
    if(root1.value != root2.value) return false;
    return (root1.value == root2.value) && equalBST2(root1.left, root2.left) && equalBST2(root1.right, root2.right);
}