import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import * as i1 from 'ngx-color/sketch';
import { ColorSketchModule } from 'ngx-color/sketch';
import { CommonModule } from '@angular/common';

class RtNgxColorComponent {
    ngOnInit() {
        console.log('RtNgxColorComponent init');
    }
    handleChange($event) {
        console.log($event.color);
    }
}
RtNgxColorComponent.ɵfac = function RtNgxColorComponent_Factory(t) { return new (t || RtNgxColorComponent)(); };
RtNgxColorComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RtNgxColorComponent, selectors: [["rt-ngx-color"]], decls: 1, vars: 0, consts: [[2, "display", "flex", "width", "300px", 3, "onChange"]], template: function RtNgxColorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "color-sketch", 0);
        i0.ɵɵlistener("onChange", function RtNgxColorComponent_Template_color_sketch_onChange_0_listener($event) { return ctx.handleChange($event); });
        i0.ɵɵelementEnd();
    } }, directives: [i1.SketchComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RtNgxColorComponent, [{
        type: Component,
        args: [{
                selector: 'rt-ngx-color',
                template: '<color-sketch style="display:flex; width:300px" (onChange)="handleChange($event)"></color-sketch>'
            }]
    }], null, null); })();

class RtNgxColorModule {
}
RtNgxColorModule.ɵfac = function RtNgxColorModule_Factory(t) { return new (t || RtNgxColorModule)(); };
RtNgxColorModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: RtNgxColorModule });
RtNgxColorModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            ColorSketchModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RtNgxColorModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    RtNgxColorComponent
                ],
                imports: [
                    CommonModule,
                    ColorSketchModule
                ],
                exports: [
                    RtNgxColorComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(RtNgxColorModule, { declarations: [RtNgxColorComponent], imports: [CommonModule,
        ColorSketchModule], exports: [RtNgxColorComponent] }); })();

/*
 * Public API Surface of new-rt-ngx-color
 */

/**
 * Generated bundle index. Do not edit.
 */

export { RtNgxColorComponent, RtNgxColorModule };
//# sourceMappingURL=rt-ngx-color.mjs.map
