/**
* @Note here after import we have added
*/

import { ProjectInput } from "./components/project-input.js";
import { ProjectList } from "./components/project-list.js";

const prjInput = new ProjectInput();
const activePrjList = new ProjectList('active');
const finishedPrjList = new ProjectList('finished');

/* 
Drag and Drop API-
https://kryogenix.org/code/browser/custom-drag-image.html
https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API
https://codepen.io/SitePoint/pen/epQPNP
*/