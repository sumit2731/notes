define("dist/sumit-ng6-lib/sood", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.SumitComponentComponent = 2;
});
define("app1", ["require", "exports", "dist/sumit-ng6-lib/sood"], function (require, exports, sumit_ng6_lib_1) {
    "use strict";
    exports.__esModule = true;
    //import {logging} from 'sumit-ng6-lib';
    console.log(sumit_ng6_lib_1.SumitComponentComponent);
    console.log("welcome to app1.ts file");
});
