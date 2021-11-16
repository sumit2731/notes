let observer = new MutationObserver((mutationRecords,observer) => {
    console.log(mutationRecords); // console.log(the changes)
    console.log(observer);
  });
  
observer.observe(elem, {
    childList: true, // observe direct children
    subtree: true, // and lower descendants too
    characterData: true,
    characterDataOldValue: true // pass old data to callback
});

function addChild() {
    let div = document.createElement("div");
    div.id = 'child3';
    div.innerHTML = "Newly Added Child3";
    elem.appendChild(div);
}

btn1.addEventListener("click",addChild);


function addGrandChild() {
    let div = document.createElement("div");
    div.id = 'child22';
    div.innerHTML = "GrandChild 22";
    child2.appendChild(div);
}

btn2.addEventListener("click",addGrandChild,false);

function addSuperGrandChild() {
    let div = document.createElement("div");
    div.id = 'child111';
    div.innerHTML = "SuperGrandChild";
    child11.appendChild(div);
}

btn3.addEventListener('click', addSuperGrandChild);

// function addSuperGrandChild() {
//     let div = document.createElement("div");
//     div.id = 'superGrandChild';
//     div.innerHTML = "Newly Added SupergrandChild";
//     grandChild.appendChild(div);
// }
// btn2.addEventListener('click', addSuperGrandChild,false);

// function removeSuperGrandChild() {
//     //grandChild.removeChild(superGrandChild);
//     child1.removeChild(child11);
// }

// btn3.addEventListener('click', removeSuperGrandChild,false);

//let demoElem = document.getElementById('highlight-demo');






// let observer = new MutationObserver(mutations => {

//     console.log(mutations)

//     for(let mutation of mutations) {
//       // examine new nodes, is there anything to highlight?
  
//       for(let node of mutation.addedNodes) {
//         // we track only elements, skip other nodes (e.g. text nodes)
//         if (!(node instanceof HTMLElement)) continue;
  
//         // check the inserted element for being a code snippet
//         if (node.matches('pre[class*="language-"]')) {
//           Prism.highlightElement(node);
//         }
  
//         // or maybe there's a code snippet somewhere in its subtree?
//         for(let elem of node.querySelectorAll('pre[class*="language-"]')) {
//           Prism.highlightElement(elem);
//         }
//       }
//     }
  
// });
  
  
// observer.observe(demoElem, {childList: true, subtree: true});

// document.body.appendChild(demoElem);


//   // dynamically insert content with code snippets
// demoElem.innerHTML = `A code snippet is below:
// <pre class="language-javascript"><code> let hello = "world!"; </code></pre>
// <div>Another one:</div>
// <div>
//   <pre class="language-css"><code>.class { margin: 5px; } </code></pre>
// </div>
// `;