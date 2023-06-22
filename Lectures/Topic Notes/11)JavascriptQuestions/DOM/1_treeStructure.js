
/**
 * Generate Tree Structure from given Data
 */

let data = {
    "Fish": {
      "trout": {},
      "salmon": {}
    },
  
    "Tree": {
      "Huge": {
        "sequoia": {},
        "oak": {}
      },
      "Flowering": {
        "apple tree": {},
        "magnolia": {
          "sumit": {},
          "sood": {}
        }
      }
    }
  };
  
  
  
  function createTree(wrapper, data) {
    let rootOrderedList = document.createElement('ul');
    function recursionHelper(data, parentElement) {
      for(prop in data) {
        let listItem = document.createElement('li');
        listItem.textContent = prop;
        parentElement.append(listItem);
        if(Object.keys(data[prop]).length > 0) {
          let orderedList = document.createElement('ul');
          listItem.append(orderedList);
          recursionHelper(data[prop],orderedList);
        }
      }
  
    }
    recursionHelper(data, rootOrderedList);
    wrapper.append(rootOrderedList);
  }
  
  createTree(wrapper, data);