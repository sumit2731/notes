let observer = new MutationObserver((mutationRecords,observer) => {
    console.log(mutationRecords); // console.log(the changes)
    console.log(observer);
  });
  
observer.observe(elem, {
    childList: true, // observe direct children
    /* 
    If false only chnages in direct childs are observed. for this to work
    childList should be true
    */
    subtree: true, // and lower descendants too
    characterData: true,
    characterDataOldValue: true // pass old data to callback
});

function addChild() {
    let div = document.createElement("div");
    div.id = 'child3';
    div.innerHTML = "Child3";
    elem.appendChild(div);
}

btn1.addEventListener("click",addChild);


function addGrandChild() {
    let div = document.createElement("div");
    div.id = 'child21';
    div.innerHTML = "GrandChild 21";
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