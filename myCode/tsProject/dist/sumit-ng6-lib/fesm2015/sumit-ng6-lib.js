import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

class SumitNg6LibService {
    constructor() { }
}
SumitNg6LibService.ɵfac = function SumitNg6LibService_Factory(t) { return new (t || SumitNg6LibService)(); };
SumitNg6LibService.ɵprov = ɵɵdefineInjectable({ token: SumitNg6LibService, factory: SumitNg6LibService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SumitNg6LibService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class SumitNg6LibComponent {
    constructor() { }
    ngOnInit() {
    }
}
SumitNg6LibComponent.ɵfac = function SumitNg6LibComponent_Factory(t) { return new (t || SumitNg6LibComponent)(); };
SumitNg6LibComponent.ɵcmp = ɵɵdefineComponent({ type: SumitNg6LibComponent, selectors: [["lib-sumit-ng6-lib"]], decls: 2, vars: 0, template: function SumitNg6LibComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, " sumit-ng6-lib works! ");
        ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SumitNg6LibComponent, [{
        type: Component,
        args: [{
                selector: 'lib-sumit-ng6-lib',
                template: `
    <p>
      sumit-ng6-lib works!
    </p>
  `,
                styles: []
            }]
    }], function () { return []; }, null); })();

class SumitComponentComponent {
    constructor() { }
    ngOnInit() {
    }
}
SumitComponentComponent.ɵfac = function SumitComponentComponent_Factory(t) { return new (t || SumitComponentComponent)(); };
SumitComponentComponent.ɵcmp = ɵɵdefineComponent({ type: SumitComponentComponent, selectors: [["sumit-lib-sumit-component"]], decls: 2, vars: 0, template: function SumitComponentComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, "sumit-component works!");
        ɵɵelementEnd();
    } }, styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SumitComponentComponent, [{
        type: Component,
        args: [{
                selector: 'sumit-lib-sumit-component',
                templateUrl: './sumit-component.component.html',
                styleUrls: ['./sumit-component.component.scss']
            }]
    }], function () { return []; }, null); })();

class SumitNg6LibModule {
}
SumitNg6LibModule.ɵmod = ɵɵdefineNgModule({ type: SumitNg6LibModule });
SumitNg6LibModule.ɵinj = ɵɵdefineInjector({ factory: function SumitNg6LibModule_Factory(t) { return new (t || SumitNg6LibModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SumitNg6LibModule, { declarations: [SumitNg6LibComponent, SumitComponentComponent], exports: [SumitNg6LibComponent, SumitComponentComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(SumitNg6LibModule, [{
        type: NgModule,
        args: [{
                declarations: [SumitNg6LibComponent, SumitComponentComponent],
                imports: [],
                exports: [SumitNg6LibComponent, SumitComponentComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of sumit-ng6-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { SumitComponentComponent, SumitNg6LibComponent, SumitNg6LibModule, SumitNg6LibService };
//# sourceMappingURL=sumit-ng6-lib.js.map
