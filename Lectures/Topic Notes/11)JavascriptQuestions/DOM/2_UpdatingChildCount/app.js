/**
 * Update Child Count of Each Node
 */


function countNodesHelper(listItem) {
    let orderedLists = listItem.children;
    if (orderedLists.length == 0) return 1;
    let count = 0;
    for (let orderedList of orderedLists) {
        let childListItems = orderedList.children;
        for (let childListItem of childListItems) {// mammals
            count += countNodesHelper(childListItem);
        }
    }
    listItem.firstChild.data += ` (${count})`;
    return count + 1;
}

function countNodes() {
    let orderedList = document.querySelector('#wrapper').children[0];
    for (let listItem of orderedList.children) {
        countNodesHelper(listItem);
    }
}

countNodes();

/**
 * Simple Course solution
 */

let lis = document.getElementsByTagName('li');

for (let li of lis) {
  // get the count of all <li> below this <li>
  let descendantsCount = li.getElementsByTagName('li').length;
  if (!descendantsCount) continue;

  // add directly to the text node (append to the text)
  li.firstChild.data += ' [' + descendantsCount + ']';
}

