/**
 * particular things about jquery
 * 
 * a)What should happen if there are no elements match the selector? In jQuery when there are no matched elements, nothing 
 *  occurs, so we can follow that.
 * 
 * b)What do we return if we try to get the value of a CSS property that isn't set on the element? We should return undefined as
 *  per jQuery.
 */


function $(selector) {
  let element = document.querySelector(selector);
  return {
    css(property, value) {
      if (value) {
        if (element) element.style[property] = value;
        return this;
      }
      else {
        let computerValue;
        if (element) {
          computerValue = element.style[property];
          if (computerValue == '') computerValue = undefined;
        }
        return computerValue;
      }
    }
  }
}

console.log("Loaded");
console.log($('button').css('fontSize'));