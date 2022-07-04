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
RtNgxColorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: RtNgxColorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
RtNgxColorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: RtNgxColorComponent, selector: "rt-ngx-color", ngImport: i0, template: '<color-sketch style="display:flex; width:300px" (onChange)="handleChange($event)"></color-sketch>', isInline: true, components: [{ type: i1.SketchComponent, selector: "color-sketch", inputs: ["disableAlpha", "presetColors", "width"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: RtNgxColorComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'rt-ngx-color',
                    template: '<color-sketch style="display:flex; width:300px" (onChange)="handleChange($event)"></color-sketch>'
                }]
        }] });

class RtNgxColorModule {
}
RtNgxColorModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: RtNgxColorModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
RtNgxColorModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: RtNgxColorModule, declarations: [RtNgxColorComponent], imports: [CommonModule,
        ColorSketchModule], exports: [RtNgxColorComponent] });
RtNgxColorModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: RtNgxColorModule, imports: [[
            CommonModule,
            ColorSketchModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: RtNgxColorModule, decorators: [{
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
        }] });

/*
 * Public API Surface of new-rt-ngx-color
 */

/**
 * Generated bundle index. Do not edit.
 */

export { RtNgxColorComponent, RtNgxColorModule };
//# sourceMappingURL=rt-ngx-color.mjs.map
