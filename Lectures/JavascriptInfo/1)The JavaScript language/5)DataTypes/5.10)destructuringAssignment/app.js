let options = {
    title: "Menu",
    height: 200
  };
  
  // { sourceProperty: targetVariable }
let width, height, title;

({width:w, height:h, title} = options);
console.log(w);
console.log(h);
console.log(title);