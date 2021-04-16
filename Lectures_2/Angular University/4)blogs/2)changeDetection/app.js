// this is the new version of addEventListener
function addEventListener(eventName, callback) {
     // call the real addEventListener
     callRealAddEventListener(eventName, function() {
         
        // first call the original callback
        callback(...);     
        // and then run Angular-specific functionality
        var changed = angular.runChangeDetection();
         if (changed) {
             angular.reRenderUIPart();
         }
     });
}