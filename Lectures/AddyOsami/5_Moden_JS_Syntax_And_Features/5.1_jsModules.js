/* 

Decoupling Application
    
Modules Loaded from Remote Sources - 
    import {cakeFactory} from "https://example.com/modules/cakeFactory.mjs";

Dynamic Modules 

*/
    form.addEventListener("submit", e => {
        e.preventDefault();
        import("/modules/cakeFactory.js").then((module) => {
            // Do something with the module.
            module.oven.makeCupcake("sprinkles");
            module.oven.makeMuffin("large");
        });
    });

/* 
Popular patterns like Import on Interaction and Import on Visibility can be easily implemented in vanilla JavaScript using
    the dynamic import feature.
    
    a)import on interaction
    b)import on visisbility

*/

const btn = document.querySelector('button');

btn.addEventListener('click', e => {
  e.preventDefault();
  import('lodash.sortby')
    .then(module => module.default)
    .then(sortInput()) // use the imported dependency
    .catch(err => { console.log(err) });
});


/* 
Advantages of Modules -

    a)Modules scripts are evaluated only once as compared to tardational scripts that are evaluated each time they are 
        added to DOM
    a)modules scripts are automatically defered
    b)Modules providing namesapcing without plluting global name sapce
    c)Dead coode elimination or Tree Shaking

*/

