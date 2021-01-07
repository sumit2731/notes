(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('sumit-ng6-lib', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['sumit-ng6-lib'] = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    var SumitNg6LibService = /** @class */ (function () {
        function SumitNg6LibService() {
        }
        return SumitNg6LibService;
    }());
    SumitNg6LibService.ɵfac = function SumitNg6LibService_Factory(t) { return new (t || SumitNg6LibService)(); };
    SumitNg6LibService.ɵprov = i0.ɵɵdefineInjectable({ token: SumitNg6LibService, factory: SumitNg6LibService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SumitNg6LibService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    var SumitNg6LibComponent = /** @class */ (function () {
        function SumitNg6LibComponent() {
        }
        SumitNg6LibComponent.prototype.ngOnInit = function () {
        };
        return SumitNg6LibComponent;
    }());
    SumitNg6LibComponent.ɵfac = function SumitNg6LibComponent_Factory(t) { return new (t || SumitNg6LibComponent)(); };
    SumitNg6LibComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SumitNg6LibComponent, selectors: [["lib-sumit-ng6-lib"]], decls: 2, vars: 0, template: function SumitNg6LibComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵtext(1, " sumit-ng6-lib works! ");
                i0.ɵɵelementEnd();
            }
        }, encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SumitNg6LibComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-sumit-ng6-lib',
                        template: "\n    <p>\n      sumit-ng6-lib works!\n    </p>\n  ",
                        styles: []
                    }]
            }], function () { return []; }, null);
    })();

    var SumitComponentComponent = /** @class */ (function () {
        function SumitComponentComponent() {
        }
        SumitComponentComponent.prototype.ngOnInit = function () {
        };
        return SumitComponentComponent;
    }());
    SumitComponentComponent.ɵfac = function SumitComponentComponent_Factory(t) { return new (t || SumitComponentComponent)(); };
    SumitComponentComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SumitComponentComponent, selectors: [["sumit-lib-sumit-component"]], decls: 2, vars: 0, template: function SumitComponentComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵtext(1, "sumit-component works!");
                i0.ɵɵelementEnd();
            }
        }, styles: [""] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SumitComponentComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'sumit-lib-sumit-component',
                        templateUrl: './sumit-component.component.html',
                        styleUrls: ['./sumit-component.component.scss']
                    }]
            }], function () { return []; }, null);
    })();

    var SumitNg6LibModule = /** @class */ (function () {
        function SumitNg6LibModule() {
        }
        return SumitNg6LibModule;
    }());
    SumitNg6LibModule.ɵmod = i0.ɵɵdefineNgModule({ type: SumitNg6LibModule });
    SumitNg6LibModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SumitNg6LibModule_Factory(t) { return new (t || SumitNg6LibModule)(); }, imports: [[]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SumitNg6LibModule, { declarations: [SumitNg6LibComponent, SumitComponentComponent], exports: [SumitNg6LibComponent, SumitComponentComponent] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SumitNg6LibModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [SumitNg6LibComponent, SumitComponentComponent],
                        imports: [],
                        exports: [SumitNg6LibComponent, SumitComponentComponent]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of sumit-ng6-lib
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.SumitComponentComponent = SumitComponentComponent;
    exports.SumitNg6LibComponent = SumitNg6LibComponent;
    exports.SumitNg6LibModule = SumitNg6LibModule;
    exports.SumitNg6LibService = SumitNg6LibService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sumit-ng6-lib.umd.js.map
