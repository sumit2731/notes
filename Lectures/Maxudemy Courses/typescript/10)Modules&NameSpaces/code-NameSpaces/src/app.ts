/**
 * @Here we usednamespaces. now one way is that we manually import these multiple
 * files in index.html. otehr way is not use outFile property in tsconfig.json. here we will
 * go with second option. see this link-
 * https://www.typescriptlang.org/tsconfig#outFile
 */

/// <reference path="components/project-input.ts" />
/// <reference path="components/project-list.ts" />

namespace App {
  const prjInput = new ProjectInput();
  const activePrjList = new ProjectList('active');
  const finishedPrjList = new ProjectList('finished');
}



/* 
Drag and Drop API-
https://kryogenix.org/code/browser/custom-drag-image.html
https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API
https://codepen.io/SitePoint/pen/epQPNP
*/
