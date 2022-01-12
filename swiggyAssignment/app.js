let widgetContainer = document.querySelector('#widget-container');

let mainInput = widgetContainer.querySelector('#main-input');

mainInput.addEventListener('focus', () =>  changePostButton(true))
mainInput.addEventListener('blur', () => changePostButton(false));

let postButton;

let commentContainer;

function changePostButton(show) {
  let listenerAdded = false;
  if(!postButton) {
    postButton = widgetContainer.querySelector('#post-button');
    postButton.addEventListener('click',addComment  )
  }
    if(show)postButton.classList.remove('hide');  
}


function addComment() {
  if(!commentContainer) commentContainer = widgetContainer.querySelector('#comments-container');
  let commentElement = createListItem(mainInput.value);
  let commentList = commentContainer.querySelector('.comments-list');
  commentList.append(commentElement);
}


function createListItem(content) {
  let listItem = document.createElement('li');
  listItem.append(getCommentContainer(content));
  return listItem;

}

function getCommentContainer(content) {
  
  let commentContainer = createElementWithClass('div','comment-container');
  
  //header
  let commentHeaderContainer = createElementWithClass('div','comment-header-container');
  
  let authorHeading = createElementWithClass('h3','','Sumeet Sood');
  commentHeaderContainer.append(authorHeading);


  //body
  let commentBodyContainer = createElementWithClass('div', 'comment-body-container');
  let contentSpan = createElementWithClass('span', '', content);
  commentBodyContainer.append(contentSpan);

  //footer

  let footerContainer = createElementWithClass('div','comment-footer-container');
  
  let likeButton = createElementWithClass('button', '', 'like');
  let shareButton = createElementWithClass('button', '', 'share');
  let addButton = createElementWithClass('button', '', 'Edit');
  let replyButton = createElementWithClass('button', '', 'Reply');

  replyButton.addEventListener('click', addReply);

  footerContainer.append(likeButton);
  footerContainer.append(shareButton);
  footerContainer.append(addButton);
  footerContainer.append(replyButton);

  commentContainer.append(commentHeaderContainer);
  commentContainer.append(commentBodyContainer);
  commentContainer.append(footerContainer);

  return commentContainer;
}
//sunny.puri@swiggy.in

// function onReplyComment() {
//   let listItem = this.parentElement.parentElement.parentElement;

//   let textArea = createElementWithClass('textArea');
//   let button = createElementWithClass('button');
  
//   let commentContainer = createElementWithClass('div', 'input-container');


  
// }

function addReply() {
  let listItem = this.parentElement.parentElement.parentElement;
  let replyList = this.querySelector('#nested');
  if(!replyList) {
    replyList = createElementWithClass('ul','nested');
    listItem.append(replyList);
  }
  
  
  let commentContainer = getCommentContainer('This is Reply');
  let replyListItem = createElementWithClass('li');
  replyListItem.append(commentContainer);

  replyList.append(replyListItem);
}



function createElementWithClass(element, className, content) {
  let htmlElement = document.createElement(element);
  if(className) htmlElement.classList.add(className);
  if(content) htmlElement.innerHTML = content;
  return htmlElement;
}

