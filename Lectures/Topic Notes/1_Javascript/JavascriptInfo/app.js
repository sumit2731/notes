let element = document.getElementById('sumit');

let observer = new MutationObserver((mutationRecords) => {
  console.log(mutationRecords);
});

observer.observe(element,{
  childList: true, // observe direct children
  subtree: true, // and lower descendants too
  characterDataOldValue: true // pass old data to callback
});


let span = document.createElement('span');
span.id = 'span1';
element.append(span);

let span2 = document.createElement('span');
span2.id = 'span2';
span.append(span2);