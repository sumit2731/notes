/**
 * callback passed is going to be called every single time your mutation observer observes some type
 * of mutation in the dom based on some criteria we define
 */

const mutationObserver = new MutationObserver((entries) => {
  /**
   * target - points to thing that we are actually observing
   *
   * @UseCase - addition or removal of child nodes
   * config - {childList:true}
   * properties on entries -
   *    type - 'childList', what type of mutation we are observing
   *    addedNodes,removedNodes - Tells which nodes were added or removed(if mutation is childList)
   *
   * @To get old value also
   * config - {attributes: true, attributeOldValue: true}
   * type - 'attributes'
   * attributeName - name of changed attribute
   * oldValue - you need to pass attributeOldValue: true in config, to get old value
   *
   * when you want to check for certain attributes only
   *
   * config - {attributes: true, attributeOldValue: true, attributeFilter: ['title']}
   *
   *
   * @Usecase - to check if text of element changes -
   *
   * config - {characterData: true, characterDataOldValue: true}
   * we need to observe the node, not html element. get node by using childNodes method.
   * proeprties on entries -
   *    oldValue - old value of mutation content
   *
   *
   * @UseCase - We want to observe changes not on parent only but on whole subtree
   *  config - {subtree: true} (along with other config)
   *
   */
  console.log(entries);
});

const parent = document.querySelector(".parent");

/**
 * Here we tell mutationObserver what we want to observe the chnages to childList
 */
mutationObserver.observe(parent, { childList: true });

parent.children[0].remove();
parent.appendChild(document.createElement("div"));
