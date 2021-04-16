/**
* @As we are using webpack, now we can remove .js extension from imports. This is because
webpck will automatically look for .js nd certain other extensions. so you dnt
you should'nt add them otherwise webpack will look for files with double extensions.
*/

import { ProjectInput } from "./components/project-input";
import { ProjectList } from "./components/project-list";

const prjInput = new ProjectInput();
const activePrjList = new ProjectList('active');
const finishedPrjList = new ProjectList('finished');
console.log("is it reflecting");

/* 
Drag and Drop API-
https://kryogenix.org/code/browser/custom-drag-image.html
https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API
https://codepen.io/SitePoint/pen/epQPNP
*/