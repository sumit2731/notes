function countChildern(node) {
    let childLi = node.querySelectorAll('li');
    let childLiCount = childLi.length;
    for (let child of childLi) {
        if(child.querySelectorAll('li').length > 0) {
            childLiCount = countChildern(child); 
        }
    }
    return childLiCount;
}

let AllListElement = document.querySelectorAll('li');
console.log(AllListElement);
for (let li of AllListElement) {
    // li.innerHTML = li.innerHTML + '(' + countChildern(li) + ')';
    if (li.querySelectorAll('li').length > 0) {
        // console.log(li.querySelectorAll('li').length);
        //li.innerHTML = li.innerHTML + '(' + li.querySelectorAll('li').length + ')';
        li.firstChild.nodeValue = li.firstChild.nodeValue + '(' + li.querySelectorAll('li').length + ')'
    }
}